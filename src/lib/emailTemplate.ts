export interface QuoteFormData {
  name: string;
  company?: string;
  phone: string;
  email: string;
  industry?: string;
  product?: string;
  quantity?: string;
  message: string;
  timestamp?: string;
}

/**
 * Generates an executive-level ASCII / Unicode structured summary
 * with orange brand markers, ideal for Web3Forms message bodies and plain-text email clients.
 */
export function generateExecutiveSummary(data: QuoteFormData): string {
  const time =
    data.timestamp ||
    new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

  const lines = [
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `        🟧 PAPER WORLD — CLIENT RFQ QUOTATION 🟧         `,
    `      Industrial & Luxury Paper Bag Manufacturers        `,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    ``,
    `[ 1. CLIENT PROFILE ]`,
    `• Full Name       : ${data.name || "Not provided"}`,
    `• Organization    : ${data.company?.trim() ? data.company.trim() : "Individual / Retail"}`,
    `• Phone Contact   : ${data.phone || "Not provided"}`,
    `• Email Address   : ${data.email || "Not provided"}`,
    ``,
    `[ 2. PACKAGING SPECIFICATIONS ]`,
    `• Packaging Type  : ${data.product || "Custom Specification"}`,
    `• Required Volume : ${data.quantity ? `${data.quantity} Bags` : "Custom Volume"}`,
    `• Industry Sector : ${data.industry || "General Retail / Commercial"}`,
    ``,
    `[ 3. PROJECT SCOPE & CUSTOM REQUIREMENTS ]`,
    `"${data.message || "Custom paper bag manufacturing quotation requested."}"`,
    ``,
    `[ 4. INSTANT SALES ACTIONS ]`,
    `• Direct Call     : tel:${(data.phone || "").replace(/[^0-9+]/g, "")}`,
    `• WhatsApp Chat   : https://wa.me/919886699009?text=${encodeURIComponent(
      `Hello Paper World Team, regarding quotation request from ${data.name} (${data.phone}) for ${data.product || "Paper Bags"}`
    )}`,
    `• Direct Email    : mailto:${data.email}`,
    ``,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
    `Submitted at : ${time} (IST)`,
    `Origin       : Paper World Official Portal (https://paperworld.co.in)`,
    `━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`,
  ];

  return lines.join("\n");
}

/**
 * Generates a luxury, high-converting HTML email with Paper World's
 * primary orange palette (#D97028 / #EA580C) and responsive card layout.
 */
export function generateQuoteEmailHtml(data: QuoteFormData): string {
  const time =
    data.timestamp ||
    new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

  const cleanPhone = (data.phone || "").replace(/[^0-9+]/g, "");
  const waMessage = encodeURIComponent(
    `Hello ${data.name}, thank you for contacting Paper World regarding your quote request for ${data.product || "paper bags"} (${data.quantity || "custom"} units).`
  );
  const waUrl = `https://wa.me/${cleanPhone.replace("+", "")}?text=${waMessage}`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Quotation Request - Paper World</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      background-color: #F8FAFC;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      color: #1E293B;
      -webkit-font-smoothing: antialiased;
    }
    table {
      border-collapse: separate;
      border-spacing: 0;
    }
    .wrapper {
      width: 100%;
      background-color: #F8FAFC;
      padding: 30px 15px;
    }
    .container {
      max-width: 620px;
      margin: 0 auto;
      background-color: #FFFFFF;
      border-radius: 18px;
      overflow: hidden;
      border: 1px solid #E2E8F0;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    }
    .top-accent {
      height: 6px;
      background: linear-gradient(90deg, #D97028 0%, #EA580C 50%, #F59E0B 100%);
    }
    .header {
      background-color: #0F172A;
      padding: 36px 32px 30px;
      text-align: center;
    }
    .badge {
      display: inline-block;
      background: rgba(217, 112, 40, 0.2);
      border: 1px solid #D97028;
      color: #FB923C;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 1.5px;
      text-transform: uppercase;
      padding: 6px 14px;
      border-radius: 50px;
      margin-bottom: 12px;
    }
    .brand-title {
      margin: 0;
      font-size: 26px;
      font-weight: 800;
      letter-spacing: 2px;
      color: #FFFFFF;
    }
    .brand-subtitle {
      margin: 8px 0 0;
      font-size: 13px;
      color: #94A3B8;
      letter-spacing: 0.5px;
    }
    .content {
      padding: 32px 28px;
    }
    .section-title {
      font-size: 13px;
      font-weight: 700;
      color: #D97028;
      text-transform: uppercase;
      letter-spacing: 1.2px;
      margin: 0 0 14px;
      display: flex;
      align-items: center;
    }
    .info-card {
      background-color: #FFFDFB;
      border: 1px solid #FED7AA;
      border-radius: 14px;
      padding: 20px;
      margin-bottom: 24px;
    }
    .table-data {
      width: 100%;
    }
    .table-data td {
      padding: 8px 0;
      font-size: 14px;
      vertical-align: top;
      border-bottom: 1px dashed #F1F5F9;
    }
    .table-data tr:last-child td {
      border-bottom: none;
    }
    .label-col {
      width: 38%;
      color: #64748B;
      font-weight: 600;
    }
    .value-col {
      width: 62%;
      color: #0F172A;
      font-weight: 700;
    }
    .highlight-pill {
      display: inline-block;
      background-color: #FFF7ED;
      color: #C2410C;
      border: 1px solid #FDBA74;
      padding: 3px 10px;
      border-radius: 6px;
      font-size: 13px;
      font-weight: 700;
    }
    .message-box {
      background-color: #FFF9F5;
      border-left: 4px solid #D97028;
      border-radius: 4px 12px 12px 4px;
      padding: 18px 20px;
      margin-bottom: 26px;
      border-top: 1px solid #FFEDD5;
      border-right: 1px solid #FFEDD5;
      border-bottom: 1px solid #FFEDD5;
    }
    .message-box p {
      margin: 0;
      font-size: 14px;
      line-height: 1.6;
      color: #334155;
      white-space: pre-wrap;
    }
    .action-header {
      font-size: 13px;
      font-weight: 700;
      color: #0F172A;
      margin: 0 0 12px;
      text-transform: uppercase;
      letter-spacing: 0.8px;
    }
    .action-table {
      width: 100%;
      margin-bottom: 24px;
    }
    .btn {
      display: block;
      text-align: center;
      padding: 13px 16px;
      border-radius: 10px;
      font-size: 13px;
      font-weight: 700;
      text-decoration: none;
      transition: all 0.2s ease;
    }
    .btn-orange {
      background: linear-gradient(135deg, #D97028 0%, #EA580C 100%);
      color: #FFFFFF !important;
      box-shadow: 0 4px 12px rgba(217, 112, 40, 0.25);
    }
    .btn-green {
      background: #25D366;
      color: #FFFFFF !important;
      box-shadow: 0 4px 12px rgba(37, 211, 102, 0.25);
    }
    .btn-outline {
      background: #F1F5F9;
      color: #0F172A !important;
      border: 1px solid #CBD5E1;
    }
    .footer {
      background-color: #F8FAFC;
      border-top: 1px solid #E2E8F0;
      padding: 24px 28px;
      text-align: center;
    }
    .footer-text {
      margin: 0 0 8px;
      font-size: 12px;
      color: #64748B;
      line-height: 1.5;
    }
    .footer-muted {
      margin: 0;
      font-size: 11px;
      color: #94A3B8;
    }
  </style>
</head>
<body>
  <div class="wrapper">
    <div class="container">
      <div class="top-accent"></div>
      
      <!-- Brand Header -->
      <div class="header">
        <div class="badge">🟠 Client Inquiry Received</div>
        <h1 class="brand-title">PAPER WORLD</h1>
        <p class="brand-subtitle">Industrial & Luxury Paper Bag Manufacturers • Bangalore</p>
      </div>

      <!-- Main Body -->
      <div class="content">
        <!-- Client Details -->
        <h2 class="section-title">👤 Client Contact Overview</h2>
        <div class="info-card">
          <table class="table-data" cellpadding="0" cellspacing="0">
            <tr>
              <td class="label-col">Client Name</td>
              <td class="value-col">${data.name || "Not provided"}</td>
            </tr>
            <tr>
              <td class="label-col">Company / Brand</td>
              <td class="value-col">${data.company?.trim() ? data.company.trim() : "Individual / Retail Client"}</td>
            </tr>
            <tr>
              <td class="label-col">Phone Number</td>
              <td class="value-col">
                <a href="tel:${cleanPhone}" style="color: #D97028; text-decoration: none;">${data.phone}</a>
              </td>
            </tr>
            <tr>
              <td class="label-col">Email Address</td>
              <td class="value-col">
                <a href="mailto:${data.email}" style="color: #D97028; text-decoration: none;">${data.email}</a>
              </td>
            </tr>
          </table>
        </div>

        <!-- Packaging Specifications -->
        <h2 class="section-title">📦 Packaging Order Specifications</h2>
        <div class="info-card">
          <table class="table-data" cellpadding="0" cellspacing="0">
            <tr>
              <td class="label-col">Product Category</td>
              <td class="value-col">
                <span class="highlight-pill">${data.product || "Custom Bag Specification"}</span>
              </td>
            </tr>
            <tr>
              <td class="label-col">Estimated Quantity</td>
              <td class="value-col">
                <span class="highlight-pill" style="background-color: #FEF3C7; color: #B45309; border-color: #FCD34D;">
                  ${data.quantity ? `${data.quantity} Units` : "Not specified"}
                </span>
              </td>
            </tr>
            <tr>
              <td class="label-col">Industry Domain</td>
              <td class="value-col">${data.industry || "General Retail / Commercial"}</td>
            </tr>
            <tr>
              <td class="label-col">Submission Time</td>
              <td class="value-col" style="font-size: 13px; color: #64748B;">${time}</td>
            </tr>
          </table>
        </div>

        <!-- Project Notes -->
        <h2 class="section-title">📝 Project Requirements & Notes</h2>
        <div class="message-box">
          <p>${data.message || "Custom paper bag quotation requested with custom branding."}</p>
        </div>

        <!-- Instant Follow-up Actions -->
        <div class="action-header">⚡ Instant Client Actions</div>
        <table class="action-table" cellpadding="0" cellspacing="0">
          <tr>
            <td style="width: 32%; padding-right: 6px;">
              <a href="tel:${cleanPhone}" class="btn btn-orange">
                📞 Call Client
              </a>
            </td>
            <td style="width: 36%; padding: 0 3px;">
              <a href="${waUrl}" target="_blank" class="btn btn-green">
                💬 WhatsApp Client
              </a>
            </td>
            <td style="width: 32%; padding-left: 6px;">
              <a href="mailto:${data.email}?subject=${encodeURIComponent(`Paper World Quotation for ${data.name}`)}" class="btn btn-outline">
                ✉️ Reply Email
              </a>
            </td>
          </tr>
        </table>
      </div>

      <!-- Footer -->
      <div class="footer">
        <p class="footer-text">
          <strong>Paper World Packaging Desk</strong><br>
          #527/2, 26th Cross, Magadi Road, Bengaluru 560023, India<br>
          Direct Sales: +91 9886699009 | +91 8884984499 | reachus@paperworld.co.in
        </p>
        <p class="footer-muted">
          Generated automatically via Paper World Online Quote Portal (<a href="https://paperworld.co.in" style="color: #D97028; text-decoration: none;">paperworld.co.in</a>)
        </p>
      </div>
    </div>
  </div>
</body>
</html>`;
}

/**
 * Creates the optimized payload for Web3Forms so that
 * the incoming email notification is structured, orange-accented, and executive.
 */
export function buildWeb3FormsPayload(data: QuoteFormData, accessKey: string) {
  const time =
    data.timestamp ||
    new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "medium",
    });

  const executiveSummary = generateExecutiveSummary(data);

  return {
    access_key: accessKey,
    subject: `🟧 [PAPER WORLD RFQ] ${data.name} — ${data.product || "Paper Bags"} (${data.quantity || "Quote"})`,
    from_name: "Paper World 🟧 Quote Desk",
    replyto: data.email,

    // Web3Forms highlights the 'message' field as a prominent card in the email!
    message: executiveSummary,

    // Formatted key-value fields with orange badges for the Web3Forms table
    "🟧 CLIENT NAME": data.name,
    "🟧 COMPANY / BRAND": data.company?.trim() ? data.company.trim() : "Independent / Retail",
    "🟧 PHONE NUMBER": data.phone,
    "🟧 EMAIL ADDRESS": data.email,
    "🟧 PACKAGING TYPE": data.product || "Custom Specification",
    "🟧 ESTIMATED QUANTITY": data.quantity ? `${data.quantity} Bags` : "Custom Volume",
    "🟧 TARGET INDUSTRY": data.industry || "General Retail / Commercial",
    "🟧 SUBMITTED AT": `${time} IST`,
    "🟧 PORTAL SOURCE": "Paper World Official Website (paperworld.co.in)",
    "🟧 QUICK ACTION (CALL)": `tel:${(data.phone || "").replace(/[^0-9+]/g, "")}`,
    "🟧 QUICK ACTION (WHATSAPP)": `https://wa.me/919886699009?text=${encodeURIComponent(
      `Paper World RFQ from ${data.name} (${data.phone}) for ${data.product || "Paper Bags"}`
    )}`,
  };
}
