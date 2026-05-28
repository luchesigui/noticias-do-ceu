const RESEND_URL = 'https://api.resend.com/emails';

function getConfig() {
  const apiKey =
    (typeof process !== 'undefined' ? process.env.RESEND_API_KEY : null) ||
    (typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.RESEND_API_KEY : null);

  const fromEmail =
    (typeof process !== 'undefined' ? process.env.FROM_EMAIL : null) ||
    (typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.FROM_EMAIL : null) ||
    'onboarding@resend.dev';

  return { apiKey, fromEmail };
}

async function sendEmail({ to, subject, html }) {
  const { apiKey, fromEmail } = getConfig();
  if (!apiKey) throw new Error('RESEND_API_KEY is not configured.');

  const res = await fetch(RESEND_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ from: `Notícias do Céu <${fromEmail}>`, to, subject, html }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || `Resend error: ${res.status}`);
  return data;
}

const planLabel = (plan) => (plan === 'lifetime' ? 'Vitalício' : 'Anual');

export class EmailService {
  static async send({ to, subject, html }) {
    return sendEmail({ to, subject, html });
  }

  static async sendGiftCardToRecipient(card) {
    const redeemUrl = `https://noticiasdoceu.com/redeem?code=${card.code}`;

    const html = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #faf9f6; border: 2px solid #2c2c2c; border-radius: 4px; overflow: hidden;">
        <div style="background: #2c2c2c; padding: 28px 32px; text-align: center;">
          <p style="margin: 0; color: #d4a97a; font-size: 11px; letter-spacing: 4px; text-transform: uppercase; font-family: sans-serif;">Notícias do Céu</p>
          <h1 style="margin: 8px 0 0; color: #faf9f6; font-size: 26px; font-weight: bold; letter-spacing: 1px;">Um Presente Especial para Você</h1>
        </div>

        <div style="padding: 36px 32px;">
          <p style="font-size: 16px; line-height: 1.7; color: #2c2c2c; margin-top: 0;">
            Olá, <strong>${card.recipient_name}</strong>!
          </p>
          <p style="font-size: 15px; line-height: 1.7; color: #444;">
            <strong>${card.sender_name}</strong> enviou para você um gift card do <strong>Plano ${planLabel(card.plan)}</strong> do Notícias do Céu — um memorial digital onde as histórias do seu pet continuam vivas para sempre.
          </p>

          ${card.message ? `
          <div style="border-left: 3px solid #d4a97a; padding: 12px 20px; margin: 24px 0; background: #fffbf5; border-radius: 0 4px 4px 0;">
            <p style="margin: 0; font-size: 14px; color: #5a4a3a; font-style: italic; line-height: 1.7;">"${card.message}"</p>
            <p style="margin: 8px 0 0; font-size: 12px; color: #8a7a6a;">— ${card.sender_name}</p>
          </div>
          ` : ''}

          <div style="text-align: center; margin: 32px 0;">
            <p style="font-size: 11px; color: #888; letter-spacing: 2px; text-transform: uppercase; font-family: sans-serif; margin-bottom: 8px;">Seu código de resgate</p>
            <div style="display: inline-block; background: #2c2c2c; color: #faf9f6; font-family: 'Courier New', monospace; font-size: 26px; font-weight: bold; letter-spacing: 6px; padding: 16px 32px; border-radius: 4px;">
              ${card.code}
            </div>
          </div>

          <div style="text-align: center; margin: 28px 0;">
            <a href="${redeemUrl}" style="display: inline-block; background: #d4a97a; color: #2c2c2c; text-decoration: none; font-family: sans-serif; font-weight: bold; font-size: 14px; padding: 14px 36px; border-radius: 40px; letter-spacing: 0.5px;">
              Resgatar Presente →
            </a>
          </div>

          <p style="font-size: 13px; color: #888; line-height: 1.6; text-align: center;">
            Ou acesse <a href="https://noticiasdoceu.com/redeem" style="color: #d4a97a;">noticiasdoceu.com/redeem</a> e insira o código manualmente.
          </p>
        </div>

        <div style="background: #f0ede6; padding: 16px 32px; text-align: center; border-top: 1px solid #ddd;">
          <p style="margin: 0; font-size: 11px; color: #999; font-family: sans-serif;">Notícias do Céu · Memórias que ficam para sempre</p>
        </div>
      </div>
    `;

    return sendEmail({
      to: card.recipient_email,
      subject: `${card.sender_name} enviou um presente para você 🎁`,
      html,
    });
  }

  static async sendGiftCardConfirmationToSender(card) {
    const html = `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #faf9f6; border: 2px solid #2c2c2c; border-radius: 4px; overflow: hidden;">
        <div style="background: #2c2c2c; padding: 28px 32px; text-align: center;">
          <p style="margin: 0; color: #d4a97a; font-size: 11px; letter-spacing: 4px; text-transform: uppercase; font-family: sans-serif;">Notícias do Céu</p>
          <h1 style="margin: 8px 0 0; color: #faf9f6; font-size: 26px; font-weight: bold; letter-spacing: 1px;">Presente Enviado com Sucesso!</h1>
        </div>

        <div style="padding: 36px 32px;">
          <p style="font-size: 16px; line-height: 1.7; color: #2c2c2c; margin-top: 0;">
            Olá, <strong>${card.sender_name}</strong>!
          </p>
          <p style="font-size: 15px; line-height: 1.7; color: #444;">
            Seu gift card do <strong>Plano ${planLabel(card.plan)}</strong> foi confirmado e enviado para <strong>${card.recipient_name}</strong>${card.recipient_email ? ` (${card.recipient_email})` : ''}.
          </p>

          <div style="background: #fff; border: 1px solid #e0dbd0; border-radius: 4px; padding: 20px 24px; margin: 24px 0;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; color: #444;">
              <tr>
                <td style="padding: 8px 0; color: #888; font-family: sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; width: 40%;">Destinatário</td>
                <td style="padding: 8px 0; font-weight: bold;">${card.recipient_name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #888; font-family: sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Plano</td>
                <td style="padding: 8px 0; font-weight: bold;">${planLabel(card.plan)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #888; font-family: sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 1px;">Código</td>
                <td style="padding: 8px 0; font-family: 'Courier New', monospace; font-weight: bold; letter-spacing: 3px;">${card.code}</td>
              </tr>
            </table>
          </div>

          <p style="font-size: 13px; color: #888; line-height: 1.6;">
            O destinatário recebeu um e-mail com o código e as instruções para resgatar o presente. Guarde o código acima caso precise compartilhá-lo novamente.
          </p>
        </div>

        <div style="background: #f0ede6; padding: 16px 32px; text-align: center; border-top: 1px solid #ddd;">
          <p style="margin: 0; font-size: 11px; color: #999; font-family: sans-serif;">Notícias do Céu · Memórias que ficam para sempre</p>
        </div>
      </div>
    `;

    return sendEmail({
      to: card.sender_email,
      subject: `Seu presente para ${card.recipient_name} foi enviado ✓`,
      html,
    });
  }
}
