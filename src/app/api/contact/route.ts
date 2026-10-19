import { NextResponse } from "next/server";
import {
  buildWeb3FormsPayload,
  generateQuoteEmailHtml,
  generateExecutiveSummary,
  QuoteFormData,
} from "@/lib/emailTemplate";

export async function POST(request: Request) {
  try {
    const data: QuoteFormData = await request.json();

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

    const formDataWithTime: QuoteFormData = {
      ...data,
      timestamp,
    };

    // Supports WEB3FORMS_ACCESS_KEY (Vercel env), NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY, with fallback
    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY ||
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      "733724f6-ba0d-4a49-bf90-122c54e145ae";

    let emailDeliveredDirectly = false;

    // 1. Check for Direct SMTP / Nodemailer delivery if configured in Vercel / .env
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const recipientEmail =
      process.env.SMTP_TO || "reachus@paperworld.co.in, paperworldbglr@gmail.com";

    if (smtpUser && smtpPass) {
      try {
        const nodemailer = await import("nodemailer");
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: smtpPort,
          secure: smtpPort === 465,
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        const htmlEmail = generateQuoteEmailHtml(formDataWithTime);
        const plainText = generateExecutiveSummary(formDataWithTime);

        const subject = `New Quote Request: ${data.name || "Inquiry"}${data.company ? ` (${data.company})` : ""} - ${data.product || "Paper Bags"}`;

        await transporter.sendMail({
          from: `"Paper World Quote Portal" <${smtpUser}>`,
          to: recipientEmail,
          replyTo: data.email,
          subject,
          text: plainText,
          html: htmlEmail,
        });

        emailDeliveredDirectly = true;
        console.info("Direct luxury HTML quote email sent via SMTP successfully.");
      } catch (smtpErr) {
        console.warn("Direct SMTP delivery failed, falling back to Web3Forms:", smtpErr);
      }
    }

    // 2. Check for Resend API delivery if RESEND_API_KEY is configured
    if (!emailDeliveredDirectly && process.env.RESEND_API_KEY) {
      try {
        const htmlEmail = generateQuoteEmailHtml(formDataWithTime);
        const plainText = generateExecutiveSummary(formDataWithTime);
        const subject = `New Quote Request: ${data.name || "Inquiry"}${data.company ? ` (${data.company})` : ""} - ${data.product || "Paper Bags"}`;

        const resendRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: process.env.RESEND_FROM || "Paper World <quotes@paperworld.co.in>",
            to: recipientEmail.split(",").map((e) => e.trim()),
            reply_to: data.email,
            subject,
            text: plainText,
            html: htmlEmail,
          }),
        });

        if (resendRes.ok) {
          emailDeliveredDirectly = true;
          console.info("Direct luxury HTML quote email sent via Resend API successfully.");
        }
      } catch (resendErr) {
        console.warn("Resend delivery failed, falling back to Web3Forms:", resendErr);
      }
    }

    // 3. Web3Forms Delivery (Default & Reliable Fallback)
    const payload = buildWeb3FormsPayload(formDataWithTime, accessKey);
    let web3Result: any = null;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const contentType = response.headers.get("content-type") || "";
      if (contentType.includes("application/json")) {
        web3Result = await response.json();
      } else {
        const text = await response.text().catch(() => "");
        console.warn("Web3Forms returned non-JSON response:", text.slice(0, 300));
      }
    } catch (fetchError) {
      console.warn("Web3Forms submission error:", fetchError);
    }

    // Log the lead details on the server for zero-data-loss guarantee
    console.info("[PAPER WORLD RFQ RECEIVED]:", {
      name: data.name,
      company: data.company,
      phone: data.phone,
      email: data.email,
      industry: data.industry,
      product: data.product,
      quantity: data.quantity,
      message: data.message,
      timestamp,
      emailDeliveredDirectly,
      web3Success: web3Result?.success,
    });

    if (emailDeliveredDirectly || (web3Result && web3Result.success)) {
      return NextResponse.json({
        success: true,
        message: "Your quote request has been delivered to Paper World team!",
      });
    }

    return NextResponse.json(
      {
        success: false,
        message:
          web3Result?.message ||
          "Unable to deliver quote request to email. Please verify your Web3Forms access key or use WhatsApp.",
      },
      { status: 400 }
    );
  } catch (error: any) {
    console.error("Contact API submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Failed to process quote request.",
      },
      { status: 400 }
    );
  }
}
