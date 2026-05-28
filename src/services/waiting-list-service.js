export class WaitingListService {
  static async addLead(email, plan) {
    const apiKey = import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY;
    const ownerEmail = import.meta.env.OWNER_EMAIL || process.env.OWNER_EMAIL;

    if (!apiKey) {
      throw new Error("RESEND_API_KEY is not configured.");
    }
    if (!ownerEmail) {
      throw new Error("OWNER_EMAIL is not configured.");
    }

    const timestamp = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });

    const htmlContent = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <h2 style="color: #8B5A2B; font-family: serif; border-bottom: 2px solid #8B5A2B; padding-bottom: 10px; text-transform: uppercase;">
          ☁️ Novo Lead - Notícias do Céu
        </h2>
        <p style="font-size: 16px; line-height: 1.6;">
          Um novo usuário demonstrou interesse em criar um memorial e entrou na lista de espera!
        </p>
        <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background-color: #f9f9f9; width: 30%;">E-mail:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background-color: #f9f9f9;">Plano Escolhido:</td>
            <td style="padding: 10px; border: 1px solid #ddd; text-transform: uppercase;">${plan === 'lifetime' ? 'Vitalício (R$ 9,90)' : 'Anual (R$ 90,00/ano)'}</td>
          </tr>
          <tr>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; background-color: #f9f9f9;">Data/Hora:</td>
            <td style="padding: 10px; border: 1px solid #ddd;">${timestamp}</td>
          </tr>
        </table>
        <p style="font-size: 12px; color: #666; margin-top: 30px; border-top: 1px solid #eee; padding-top: 10px; text-align: center;">
          Notícias do Céu MVP · Gerador de Leads de Espera
        </p>
      </div>
    `;

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "onboarding@resend.dev",
        to: ownerEmail,
        subject: `☁️ Lead Lista de Espera: ${email} (${plan})`,
        html: htmlContent
      })
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || `Failed to send email to ${ownerEmail}. Status: ${response.status}`);
    }

    return data;
  }
}
