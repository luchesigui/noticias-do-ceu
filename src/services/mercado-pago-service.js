import { users as usersApi } from '../lib/data.js';

export class MPService {
  /**
   * Retrieves the access token from environment variables.
   * Supports both process.env (Vercel/Node) and import.meta.env (Astro).
   */
  static getAccessToken() {
    const token = (typeof process !== 'undefined' ? process.env.MP_ACCESS_TOKEN : null) || 
                  (typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.MP_ACCESS_TOKEN : null);
    if (!token || token === 'seu_access_token') {
      console.warn('WARNING: MP_ACCESS_TOKEN is not configured or is using placeholder.');
    }
    return token || '';
  }

  /**
   * Creates a Checkout Pro Preference for the specified user and plan.
   * @param {string} userId
   * @param {'annual' | 'lifetime'} plan
   * @param {string} origin - Base URL of the application
   */
  static async createPreference(userId, plan, origin) {
    const token = this.getAccessToken();

    // Fetch user details from the database
    const { data: user, error } = await usersApi.findById(userId);
    if (error || !user) {
      throw new Error('Usuário não encontrado.');
    }

    const isLifetime = plan === 'lifetime';
    const title = isLifetime ? 'Notícias do Céu - Plano Vitalício' : 'Notícias do Céu - Plano Anual';
    const price = isLifetime ? 39.90 : 9.90;

    const requestBody = {
      items: [
        {
          id: plan,
          title: title,
          quantity: 1,
          currency_id: 'BRL',
          unit_price: price,
        }
      ],
      payer: {
        email: user.email,
        name: user.name,
      },
      back_urls: {
        success: `${origin}/api/checkout/callback`,
        failure: `${origin}/api/checkout/callback`,
        pending: `${origin}/api/checkout/callback`,
      },
      auto_return: 'approved',
      // Mercado Pago webhook notifications endpoint
      notification_url: `${origin}/api/mp/webhook`,
      external_reference: userId,
    };

    const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Error creating Mercado Pago preference:', errorText);
      throw new Error(`Erro ao criar preferência no Mercado Pago: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  }

  /**
   * Retrieves payment status details from Mercado Pago.
   * @param {string} mpPaymentId
   */
  static async getPaymentStatus(mpPaymentId) {
    const token = this.getAccessToken();

    const response = await fetch(`https://api.mercadopago.com/v1/payments/${mpPaymentId}`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Error fetching payment status for ${mpPaymentId}:`, errorText);
      throw new Error(`Erro ao buscar status do pagamento no Mercado Pago: ${response.statusText}`);
    }

    return await response.json();
  }

  /**
   * Cancels a preapproval (subscription) in Mercado Pago.
   * @param {string} subscriptionId
   */
  static async cancelSubscription(subscriptionId) {
    const token = this.getAccessToken();

    const response = await fetch(`https://api.mercadopago.com/v1/preapprovals/${subscriptionId}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        status: 'cancelled',
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Error cancelling subscription ${subscriptionId}:`, errorText);
      throw new Error(`Erro ao cancelar assinatura no Mercado Pago: ${response.statusText}`);
    }

    return await response.json();
  }
}
