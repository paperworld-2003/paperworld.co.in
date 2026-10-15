import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Supports both WEB3FORMS_ACCESS_KEY (server-side, e.g. Vercel) and NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    const accessKey =
      process.env.WEB3FORMS_ACCESS_KEY ||
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      return NextResponse.json(
        {
          success: false,
          message:
            "Web3Forms access key is not configured. Please set WEB3FORMS_ACCESS_KEY in environment variables.",
        },
        { status: 500 }
      );
    }

    const payload = {
      access_key: accessKey,
      subject: `[NEW RFQ QUOTE] ${data.name || "Inquiry"}${data.company ? ` — ${data.company}` : ""}`,
      from_name: "Paper World RFQ Portal",
      replyto: data.email || undefined,
      "Client Name": data.name,
      "Company / Organization": data.company || "Not provided",
      "Contact Number": data.phone,
      "Email Address": data.email,
      "Industry Sector": data.industry || "General Retail / Commercial",
      "Packaging Category": data.product || "Custom Specification",
      "Estimated Order Quantity": data.quantity ? `${data.quantity} Units` : "Not specified",
      "Project Scope & Custom Specifications": data.message,
      "Submitted Via": "Paper World Official Website (https://paperworld.co.in)",
      "Submission Time": new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "full",
        timeStyle: "medium",
      }),
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    return NextResponse.json(result);
  } catch (error) {
    console.error("Contact API submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to process quote request. Please try again later.",
      },
      { status: 500 }
    );
  }
}
