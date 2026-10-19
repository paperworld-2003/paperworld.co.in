import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Supports WEB3FORMS_ACCESS_KEY (Vercel env), NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY, with fallback
    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY ||
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
      "733724f6-ba0d-4a49-bf90-122c54e145ae";

    if (!accessKey) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Web3Forms access key is missing. Please configure WEB3FORMS_ACCESS_KEY in Vercel.",
        },
        { status: 400 }
      );
    }

    const payload = {
      access_key: accessKey,
      subject: `[NEW RFQ QUOTE] ${data.name || "Inquiry"}${data.company ? ` — ${data.company}` : ""}`,
      from_name: "Paper World RFQ Portal",
      replyto: data.email || undefined,
      "Client Name": data.name || "Not provided",
      "Company / Organization": data.company || "Not provided",
      "Contact Number": data.phone || "Not provided",
      "Email Address": data.email || "Not provided",
      "Industry Sector": data.industry || "General Retail / Commercial",
      "Packaging Category": data.product || "Custom Specification",
      "Estimated Order Quantity": data.quantity ? `${data.quantity} Units` : "Not specified",
      "Project Scope & Custom Specifications": data.message || "Custom paper bag quotation requested.",
      "Submitted Via": "Paper World Official Website (https://paperworld.co.in)",
      "Submission Time": new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "full",
        timeStyle: "medium",
      }),
    };

    let result: any = null;

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
        result = await response.json();
      } else {
        const text = await response.text().catch(() => "");
        console.warn("Web3Forms returned non-JSON response from server endpoint:", text.slice(0, 300));
      }
    } catch (fetchError) {
      console.warn("Direct server-side fetch to Web3Forms failed:", fetchError);
    }

    // Always log the submission on the server so leads are never lost
    console.info("[RFQ Inquiry Received]:", {
      name: data.name,
      company: data.company,
      phone: data.phone,
      email: data.email,
      industry: data.industry,
      product: data.product,
      quantity: data.quantity,
      message: data.message,
      time: new Date().toISOString(),
    });

    if (result && result.success) {
      return NextResponse.json({
        success: true,
        message: result.message || "Quote request submitted successfully!",
      });
    }

    return NextResponse.json(
      {
        success: false,
        message:
          result?.message ||
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
