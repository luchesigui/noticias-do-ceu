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

    // Send email notifications — fire-and-forget, don't block the response
    if (card.recipient_email) {
      EmailService.sendGiftCardToRecipient(card).catch((err) =>
        console.error('[gift-card] failed to email recipient:', err.message)
      );
    }
    if (card.sender_email) {
      EmailService.sendGiftCardConfirmationToSender(card).catch((err) =>
        console.error('[gift-card] failed to email sender:', err.message)
      );
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
