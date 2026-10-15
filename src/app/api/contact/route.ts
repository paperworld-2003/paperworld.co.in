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

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      return NextResponse.json(
        {
          success: false,
          message: result.message || "Failed to submit form to email service.",
        },
        { status: response.status || 400 }
      );
    }

    return NextResponse.json(result);
  } catch (error: any) {
    console.error("Contact API submission error:", error);
    return NextResponse.json(
      {
        success: false,
        message: error?.message || "Internal server error occurred.",
      },
      { status: 500 }
    );
  }
}
