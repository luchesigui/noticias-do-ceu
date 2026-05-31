/**
 * Custom application error class for expected/operational business logic errors.
 */
export class AppError extends Error {
  constructor(message, statusCode = 400) {
    super(message);
    this.name = 'AppError';
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

/**
 * Format any thrown error into a clean user-facing message and status code.
 * Unexpected system or database errors are logged internally but returning a generic message to the client.
 *
 * @param {Error|any} error
 * @returns {{ message: string, status: number }}
 */
export function formatApiError(error) {
  if (!error) {
    return {
      message: 'Ocorreu um erro inesperado.',
      status: 500,
    };
  }

  // If it's an operational/expected application error
  if (error instanceof AppError || error.isOperational) {
    return {
      message: error.message,
      status: error.statusCode || 400,
    };
  }

  // If it's a Yup validation error
  if (error.name === 'ValidationError') {
    return {
      message: error.message,
      status: 400,
    };
  }

  // Check for known friendly user-facing messages
  const commonUserErrors = [
    'Este e-mail já está cadastrado.',
    'E-mail ou senha incorretos.',
    'Código de presente não encontrado.',
    'O pagamento deste cartão de presente ainda não foi confirmado.',
    'Este código de presente já foi utilizado.',
    'Este código de presente expirou.',
    'O código de presente informado é inválido ou não existe.',
    'Este cartão de presente está expirado.',
    'Pet não encontrado.',
    'Nenhum arquivo enviado ou arquivo está vazio.',
    'Credenciais do Cloudflare R2 não estão completamente configuradas.',
  ];

  if (commonUserErrors.includes(error.message)) {
    return {
      message: error.message,
      status: 400,
    };
  }

  // Log unexpected errors (database connection/query errors, syntax errors, etc.) to the console
  console.error('[Internal Server Error Details]:', error);

  return {
    message: 'Ocorreu um erro interno no servidor. Por favor, tente novamente mais tarde.',
    status: 500,
  };
}

/**
 * Convenience helper to format and construct a Response object for Astro API routes.
 *
 * @param {Error|any} error
 * @returns {Response}
 */
export function apiErrorResponse(error) {
  const { message, status } = formatApiError(error);
  return new Response(JSON.stringify({ error: message }), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
