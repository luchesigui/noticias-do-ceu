export function validateGiftCardCreation(req, res, next) {
  const { sender_name, recipient_email, recipient_name, pet_name, plan, message, design } = req.body;

  if (!sender_name || typeof sender_name !== 'string' || sender_name.trim() === '') {
    return res.status(400).json({ error: 'sender_name is required and must be a non-empty string' });
  }

  if (!recipient_email || typeof recipient_email !== 'string' || !/^\S+@\S+\.\S+$/.test(recipient_email)) {
    return res.status(400).json({ error: 'recipient_email is required and must be a valid email address' });
  }

  if (!recipient_name || typeof recipient_name !== 'string' || recipient_name.trim() === '') {
    return res.status(400).json({ error: 'recipient_name is required and must be a non-empty string' });
  }

  if (pet_name !== undefined && pet_name !== null && (typeof pet_name !== 'string' || pet_name.trim() === '')) {
    return res.status(400).json({ error: 'pet_name must be a non-empty string' });
  }

  if (plan !== 'annual' && plan !== 'lifetime') {
    return res.status(400).json({ error: 'plan must be either "annual" or "lifetime"' });
  }

  if (message !== undefined && message !== null && typeof message !== 'string') {
    return res.status(400).json({ error: 'message must be a string' });
  }

  const validDesigns = ['nuvens', 'patinhas', 'estrelas', 'pomba'];
  if (!validDesigns.includes(design)) {
    return res.status(400).json({ error: 'design must be one of: nuvens, patinhas, estrelas, pomba' });
  }

  next();
}

export function validateRedeem(req, res, next) {
  const { user_id } = req.body;
  const { code } = req.params;

  // Validate code format
  if (!code || !/^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(code)) {
    return res.status(400).json({ error: 'Invalid code format. Expected XXXX-XXXX-XXXX' });
  }

  // Validate user_id
  if (!user_id || typeof user_id !== 'string' || !/^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/.test(user_id)) {
    return res.status(400).json({ error: 'user_id is required and must be a valid UUID' });
  }

  next();
}

export function validateCodeParam(req, res, next) {
  const { code } = req.params;
  if (!code || !/^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/.test(code)) {
    return res.status(400).json({ error: 'Invalid code format. Expected XXXX-XXXX-XXXX' });
  }
  next();
}
