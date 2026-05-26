/**
 * Notícias do Céu - Gift Card Purchase Flow
 *
 * Handles the 3-step gift card purchase:
 * 1. Form personalization + live preview
 * 2. Stripe payment (sandbox-ready)
 * 3. Confirmation with code, share, print
 *
 * Architecture:
 * - Frontend-only (no backend required for mock mode)
 * - Stripe Payment Element for real payments
 * - Falls back to mock payment if Stripe is not configured
 * - Generates gift card codes locally (real impl calls backend API)
 */

// ============================================================
// Configuration
// ============================================================

const CONFIG = {
    // Stripe publishable key (set to null for mock/dev mode)
    // Replace with your real key: pk_test_... or pk_live_...
    STRIPE_KEY: null,

    // Backend API base URL (set to null for mock mode)
    // e.g. 'http://localhost:3000/api' or 'https://api.noticias-do-ceu.com/api'
    API_BASE_URL: null,

    // Gift card price in cents (R$ 39.90)
    PRICE_CENTS: 3990,
    CURRENCY: 'brl',

    // Product description
    PRODUCT_NAME: 'Gift Card - Plano Vitalício',
    PRODUCT_DESCRIPTION: 'Acesso vitalício ao memorial digital Notícias do Céu',
};

// ============================================================
// State
// ============================================================

let currentStep = 1;
let stripe = null;
let cardElement = null;
let giftCardData = {
    giverName: '',
    giverEmail: '',
    recipientName: '',
    recipientEmail: '',
    message: '',
    code: '',
    plan: 'lifetime',
};

// ============================================================
// Initialization
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
    initFormListeners();
    initCharCount();

    // Parse URL query parameter for plan type
    const params = new URLSearchParams(window.location.search);
    const planParam = params.get('plan');
    if (planParam === 'annual' || planParam === 'lifetime') {
        selectGiftPlan(planParam);
    } else {
        selectGiftPlan('lifetime'); // Default
    }
});

function selectGiftPlan(plan) {
    giftCardData.plan = plan;

    const cardLifetime = document.getElementById('plan-card-lifetime');
    const cardAnnual = document.getElementById('plan-card-annual');
    const radioLifetime = document.getElementById('plan-lifetime');
    const radioAnnual = document.getElementById('plan-annual');

    const previewTitle = document.getElementById('gift-preview-title');
    const previewFeatures = document.getElementById('gift-preview-features');

    const summaryProductName = document.getElementById('summary-product-name');
    const summaryProductPrice = document.getElementById('summary-product-price');
    const payButton = document.getElementById('pay-button');

    if (plan === 'lifetime') {
        // State and config
        CONFIG.PRICE_CENTS = 3990;
        CONFIG.PRODUCT_NAME = 'Gift Card - Plano Vitalício';
        CONFIG.PRODUCT_DESCRIPTION = 'Acesso vitalício ao memorial digital Notícias do Céu';

        // Check input
        if (radioLifetime) radioLifetime.checked = true;

        // Visual classes
        if (cardLifetime) {
            cardLifetime.className = "cursor-pointer relative bg-white border-2 border-accent rounded-xl p-4 flex flex-col justify-between hover:shadow-md transition-all select-none";
        }
        if (cardAnnual) {
            cardAnnual.className = "cursor-pointer relative bg-white/60 border-2 border-ink/10 rounded-xl p-4 flex flex-col justify-between hover:shadow-md transition-all select-none";
        }

        // Preview & Summary
        if (previewTitle) previewTitle.textContent = 'Plano Vitalício';
        if (previewFeatures) previewFeatures.textContent = 'Acesso vitalício • Jornal diário • 1 carta/mês';
        if (summaryProductName) summaryProductName.textContent = 'Gift Card - Plano Vitalício';
        if (summaryProductPrice) summaryProductPrice.textContent = 'R$ 39,90';
        if (payButton) payButton.innerHTML = `<i class="fa-solid fa-lock"></i> Pagar R$ 39,90`;
    } else {
        // State and config
        CONFIG.PRICE_CENTS = 990;
        CONFIG.PRODUCT_NAME = 'Gift Card - Plano Anual';
        CONFIG.PRODUCT_DESCRIPTION = '1 ano de acesso ao memorial digital Notícias do Céu';

        // Check input
        if (radioAnnual) radioAnnual.checked = true;

        // Visual classes
        if (cardLifetime) {
            cardLifetime.className = "cursor-pointer relative bg-white/60 border-2 border-ink/10 rounded-xl p-4 flex flex-col justify-between hover:shadow-md transition-all select-none";
        }
        if (cardAnnual) {
            cardAnnual.className = "cursor-pointer relative bg-white border-2 border-accent rounded-xl p-4 flex flex-col justify-between hover:shadow-md transition-all select-none";
        }

        // Preview & Summary
        if (previewTitle) previewTitle.textContent = 'Plano Anual';
        if (previewFeatures) previewFeatures.textContent = 'Acesso por 1 ano • Jornal diário • compartilhamento';
        if (summaryProductName) summaryProductName.textContent = 'Gift Card - Plano Anual';
        if (summaryProductPrice) summaryProductPrice.textContent = 'R$ 9,90';
        if (payButton) payButton.innerHTML = `<i class="fa-solid fa-lock"></i> Pagar R$ 9,90`;
    }
}

// Make globally available
window.selectGiftPlan = selectGiftPlan;

function initFormListeners() {
    const msgField = document.getElementById('gift-message');
    const giverName = document.getElementById('giver-name');

    if (msgField) {
        msgField.addEventListener('input', updatePreview);
    }
    if (giverName) {
        giverName.addEventListener('input', updatePreview);
    }

    // Form submission
    const form = document.getElementById('gift-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            handleFormSubmit();
        });
    }
}

function initCharCount() {
    const msgField = document.getElementById('gift-message');
    const charCount = document.getElementById('char-count');
    if (msgField && charCount) {
        msgField.addEventListener('input', () => {
            charCount.textContent = msgField.value.length;
        });
    }
}

// ============================================================
// Step Navigation
// ============================================================

function goToStep(step) {
    // Hide all steps
    document.querySelectorAll('.step-content').forEach(el => {
        el.classList.remove('active');
    });

    // Show target step
    document.getElementById(`step-${step}`).classList.add('active');

    // Update indicators
    for (let i = 1; i <= 3; i++) {
        const indicator = document.getElementById(`step-indicator-${i}`);
        const line = document.getElementById(`step-line-${i}`);

        if (i <= step) {
            indicator.classList.remove('bg-gray-300', 'text-gray-600');
            indicator.classList.add('bg-accent', 'text-white');
        } else {
            indicator.classList.add('bg-gray-300', 'text-gray-600');
            indicator.classList.remove('bg-accent', 'text-white');
        }

        if (line && i < step) {
            line.classList.remove('bg-gray-300');
            line.classList.add('bg-accent');
        } else if (line) {
            line.classList.add('bg-gray-300');
            line.classList.remove('bg-accent');
        }
    }

    currentStep = step;

    // Initialize Stripe if entering step 2
    if (step === 2 && CONFIG.STRIPE_KEY && !stripe) {
        initStripe();
    }

    // Scroll to top of form
    window.scrollTo({ top: 300, behavior: 'smooth' });
}

// ============================================================
// Form Handling
// ============================================================

function updatePreview() {
    const message = document.getElementById('gift-message').value;
    const giver = document.getElementById('giver-name').value;

    const previewMsg = document.getElementById('preview-message');
    const previewGiver = document.getElementById('preview-giver');

    if (previewMsg) {
        previewMsg.textContent = message ? `"${message}"` : '"Sua mensagem aparecerá aqui..."';
    }
    if (previewGiver) {
        previewGiver.textContent = giver ? `— ${giver}` : '— Seu nome';
    }
}

function handleFormSubmit() {
    // Validate
    const giverName = document.getElementById('giver-name').value.trim();
    const giverEmail = document.getElementById('giver-email').value.trim();
    const recipientName = document.getElementById('recipient-name').value.trim();
    const message = document.getElementById('gift-message').value.trim();

    if (!giverName || !giverEmail || !recipientName || !message) {
        showToast('Por favor, preencha todos os campos obrigatórios.', 'error');
        return;
    }

    if (!isValidEmail(giverEmail)) {
        showToast('Por favor, insira um e-mail válido para você.', 'error');
        return;
    }

    const recipientEmail = document.getElementById('recipient-email').value.trim();
    if (recipientEmail && !isValidEmail(recipientEmail)) {
        showToast('Por favor, insira um e-mail válido para o amigo.', 'error');
        return;
    }

    // Save data
    giftCardData = {
        ...giftCardData,
        giverName,
        giverEmail,
        recipientName,
        recipientEmail,
        message,
        code: '',
    };

    // Update summary
    document.getElementById('summary-recipient').textContent = recipientName;
    document.getElementById('summary-giver').textContent = giverName;

    // Go to payment step
    goToStep(2);
}

// ============================================================
// Stripe Integration
// ============================================================

function initStripe() {
    if (!CONFIG.STRIPE_KEY) return;

    stripe = Stripe(CONFIG.STRIPE_KEY);

    // Create card element (lightweight, no full Payment Intent yet)
    const elements = stripe.elements({
        appearance: {
            theme: 'stripe',
            variables: {
                colorPrimary: '#8B5A2B',
                colorBackground: '#ffffff',
                colorText: '#2C1E16',
                colorDanger: '#f44336',
                fontFamily: 'Lora, serif',
                borderRadius: '8px',
            },
        },
    });

    cardElement = elements.create('card', {
        style: {
            base: {
                fontFamily: 'Lora, serif',
                fontSize: '16px',
                color: '#2C1E16',
                '::placeholder': {
                    color: '#9ca3af',
                },
            },
        },
    });

    cardElement.mount('#stripe-card-element');
}

async function handlePayment() {
    showLoading('Processando pagamento...');

    try {
        if (CONFIG.STRIPE_KEY && CONFIG.API_BASE_URL) {
            // ============================================
            // REAL MODE: Stripe + Backend API
            // ============================================
            await handleRealPayment();
        } else {
            // ============================================
            // MOCK MODE: Simulate payment (dev/sandbox)
            // ============================================
            await handleMockPayment();
        }
    } catch (error) {
        hideLoading();
        console.error('Payment error:', error);
        showToast(error.message || 'Erro ao processar pagamento. Tente novamente.', 'error');
    }
}

async function handleRealPayment() {
    // 1. Create payment intent on backend
    const response = await fetch(`${CONFIG.API_BASE_URL}/gift-cards/create-payment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            giverName: giftCardData.giverName,
            giverEmail: giftCardData.giverEmail,
            recipientName: giftCardData.recipientName,
            recipientEmail: giftCardData.recipientEmail,
            message: giftCardData.message,
            plan: giftCardData.plan,
            amount: CONFIG.PRICE_CENTS,
            currency: CONFIG.CURRENCY,
        }),
    });

    if (!response.ok) {
        throw new Error('Erro ao criar pedido. Tente novamente.');
    }

    const { clientSecret, giftCardCode } = await response.json();

    // 2. Confirm card payment
    const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: cardElement,
            billing_details: {
                name: giftCardData.giverName,
                email: giftCardData.giverEmail,
            },
        },
    });

    if (error) {
        throw new Error(error.message || 'Pagamento recusado. Verifique os dados do cartão.');
    }

    if (paymentIntent.status === 'succeeded') {
        giftCardData.code = giftCardCode;
        await onPaymentSuccess();
    } else {
        throw new Error('Pagamento não confirmado. Entre em contato.');
    }
}

async function handleMockPayment() {
    // Simulate network delay
    await delay(2000);

    // Simulate payment processing
    await delay(1500);

    // Generate mock gift card code
    giftCardData.code = generateGiftCode();

    // Simulate sending email if recipient email provided
    if (giftCardData.recipientEmail) {
        await delay(500);
        console.log(`[MOCK] Email sent to ${giftCardData.recipientEmail}`);
    }

    await delay(500);

    // Send email notification to giver (mock)
    console.log(`[MOCK] Confirmation email sent to ${giftCardData.giverEmail}`);

    await onPaymentSuccess();
}

async function onPaymentSuccess() {
    hideLoading();

    // Update confirmation page
    document.getElementById('gift-code').textContent = giftCardData.code;
    document.getElementById('print-code').textContent = giftCardData.code;
    document.getElementById('print-message').textContent = `"${giftCardData.message}"`;
    document.getElementById('print-giver').textContent = `— ${giftCardData.giverName}`;

    // Update email status
    const emailTitle = document.getElementById('email-status-title');
    const emailMessage = document.getElementById('email-status-message');

    if (giftCardData.recipientEmail) {
        emailTitle.textContent = 'E-mail enviado para seu amigo!';
        emailMessage.textContent = `Uma mensagem carinhosa foi enviada para ${giftCardData.recipientEmail} com o código e instruções para ativar o presente.`;
    } else {
        emailTitle.textContent = 'Presente pronto!';
        emailMessage.textContent = 'Você recebeu o código no seu e-mail. Compartilhe com seu amigo manualmente usando os botões abaixo.';
    }

    goToStep(3);

    // Save to localStorage for persistence
    saveGiftCard();
}

// ============================================================
// Gift Card Code Generation
// ============================================================

function generateGiftCode() {
    // Format: XXXX-XXXX-XXXX (alphanumeric, easy to type)
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // no I, O, 0, 1 to avoid confusion
    let code = '';
    for (let s = 0; s < 3; s++) {
        for (let i = 0; i < 4; i++) {
            code += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        if (s < 2) code += '-';
    }
    return code;
}

// ============================================================
// Share / Copy / Print
// ============================================================

function copyCode() {
    const code = giftCardData.code;
    copyToClipboard(code);
    showToast(`Código ${code} copiado!`, 'success');
}

function copyLink() {
    const link = `${window.location.origin}/gift-redeem.html?code=${giftCardData.code}`;
    copyToClipboard(link);
    showToast('Link copiado! Cole onde quiser compartilhar.', 'success');
}

function shareWhatsApp() {
    const text = encodeURIComponent(
        `Olá ${giftCardData.recipientName}! 💌\n\n` +
        `${giftCardData.giverName} preparou um presente especial para você:\n` +
        `um memorial digital para honrar a memória do seu companheiro de quatro patas.\n\n` +
        `"${giftCardData.message}"\n\n` +
        `🎁 Código do presente: ${giftCardData.code}\n` +
        `👉 Resgate em: ${window.location.origin}/gift-redeem.html?code=${giftCardData.code}\n\n` +
        `Com carinho, Notícias do Céu ☁️`
    );
    window.open(`https://wa.me/?text=${text}`, '_blank');
}

function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text);
    } else {
        // Fallback
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
    }
}

// ============================================================
// Loading Overlay
// ============================================================

function showLoading(text) {
    const overlay = document.getElementById('loading-overlay');
    const loadingText = document.getElementById('loading-text');
    if (loadingText && text) loadingText.textContent = text;
    if (overlay) overlay.classList.remove('hidden');
}

function hideLoading() {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) overlay.classList.add('hidden');
}

// ============================================================
// Toast Notifications
// ============================================================

function showToast(message, type = 'success') {
    const toast = document.getElementById('toast');
    const toastMessage = document.getElementById('toast-message');

    if (!toast || !toastMessage) return;

    toastMessage.textContent = message;
    toast.className = `toast ${type} show`;

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// ============================================================
// Persistence
// ============================================================

function saveGiftCard() {
    try {
        const saved = JSON.parse(localStorage.getItem('ndc_gift_cards') || '[]');
        saved.push({
            ...giftCardData,
            createdAt: new Date().toISOString(),
        });
        localStorage.setItem('ndc_gift_cards', JSON.stringify(saved));
    } catch (e) {
        // Silently fail (private browsing, etc.)
    }
}

// ============================================================
// Utilities
// ============================================================

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
