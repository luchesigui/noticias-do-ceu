import { GiftCardService } from '../../../../services/gift-card-service.js';
import { EmailService } from '../../../../services/email-service.js';

export const prerender = false;

// Confirm gift card payment (simulating checkout approval)
export async function POST({ params }) {
  try {
    const { code } = params;

    // Validate code format
    if (!code || !/^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(code)) {
      return new Response(JSON.stringify({ error: 'Invalid code format. Expected XXXX-XXXX-XXXX' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const card = await GiftCardService.confirmPayment(code);

    // Send email notifications — await them so serverless environment does not abort the requests
    const emailPromises = [];

    if (card.recipient_email && !card.recipient_email.startsWith('no-email@')) {
      emailPromises.push(
        EmailService.sendGiftCardToRecipient(card).catch((err) =>
          console.error('[gift-card] failed to email recipient:', err.message)
        )
      );
    }

    if (card.sender_email && !card.sender_email.startsWith('no-email@')) {
      emailPromises.push(
        EmailService.sendGiftCardConfirmationToSender(card).catch((err) =>
          console.error('[gift-card] failed to email sender:', err.message)
        )
      );
    }

    if (emailPromises.length > 0) {
      await Promise.all(emailPromises);
    }

    return new Response(JSON.stringify({
      success: true,
      message: 'Pagamento confirmado com sucesso!',
      card
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: error.message === 'Gift card not found' ? 404 : 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
