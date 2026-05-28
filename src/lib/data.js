import { supabaseAdmin } from './supabase.js';

// User Helpers
function mapUserToJS(row) {
  if (!row) return null;
  return {
    id: row.id,
    name: row.name,
    email: row.email,
    passwordHash: row.password_hash,
    plan: row.plan,
    status: row.status,
    subscriptionStatus: row.subscription_status,
    subscriptionId: row.subscription_id,
    createdAt: row.created_at,
  };
}

function mapUserToDB(data) {
  if (!data) return {};
  const dbData = {};
  if (data.id !== undefined) dbData.id = data.id;
  if (data.name !== undefined) dbData.name = data.name;
  if (data.email !== undefined) dbData.email = data.email;
  if (data.passwordHash !== undefined) dbData.password_hash = data.passwordHash;
  if (data.plan !== undefined) dbData.plan = data.plan;
  if (data.status !== undefined) dbData.status = data.status;
  if (data.subscriptionStatus !== undefined) dbData.subscription_status = data.subscriptionStatus;
  if (data.subscriptionId !== undefined) dbData.subscription_id = data.subscriptionId;
  if (data.createdAt !== undefined) dbData.created_at = data.createdAt;
  return dbData;
}

// Session Helpers
function mapSessionToJS(row) {
  if (!row) return null;
  return {
    id: row.id,
    userId: row.user_id,
    expiresAt: Number(row.expires_at),
  };
}

function mapSessionToDB(data) {
  if (!data) return {};
  const dbData = {};
  if (data.id !== undefined) dbData.id = data.id;
  if (data.userId !== undefined) dbData.user_id = data.userId;
  if (data.expiresAt !== undefined) dbData.expires_at = data.expiresAt;
  return dbData;
}

// Pet Helpers
function mapPetToJS(row) {
  if (!row) return null;
  return {
    id: row.id,
    userId: row.user_id,
    name: row.name,
    breed: row.breed,
    gender: row.gender,
    nicknames: row.nicknames,
    favoritePlace: row.favorite_place,
    favoriteObject: row.favorite_object,
    personalities: row.personalities,
    photos: row.photos,
    createdAt: row.created_at,
    slug: row.slug,
  };
}

function mapPetToDB(data) {
  if (!data) return {};
  const dbData = {};
  if (data.id !== undefined) dbData.id = data.id;
  if (data.userId !== undefined) dbData.user_id = data.userId;
  if (data.name !== undefined) dbData.name = data.name;
  if (data.breed !== undefined) dbData.breed = data.breed;
  if (data.gender !== undefined) dbData.gender = data.gender;
  if (data.nicknames !== undefined) dbData.nicknames = data.nicknames;
  if (data.favoritePlace !== undefined) dbData.favorite_place = data.favoritePlace;
  if (data.favoriteObject !== undefined) dbData.favorite_object = data.favoriteObject;
  if (data.personalities !== undefined) dbData.personalities = data.personalities;
  if (data.photos !== undefined) dbData.photos = data.photos;
  if (data.createdAt !== undefined) dbData.created_at = data.createdAt;
  if (data.slug !== undefined) dbData.slug = data.slug;
  return dbData;
}

// GiftCard Helpers
function mapGiftCardToJS(row) {
  if (!row) return null;
  return {
    code: row.code,
    sender_name: row.sender_name,
    recipient_email: row.recipient_email,
    recipient_name: row.recipient_name,
    pet_name: row.pet_name,
    plan: row.plan,
    message: row.message,
    design: row.design,
    created_at: row.created_at,
    expires_at: row.expires_at,
    redeemed_at: row.redeemed_at,
    redeemed_by: row.redeemed_by,
  };
}

function mapGiftCardToDB(data) {
  if (!data) return {};
  const dbData = {};
  if (data.code !== undefined) dbData.code = data.code;
  
  const sender_name = data.senderName !== undefined ? data.senderName : data.sender_name;
  if (sender_name !== undefined) dbData.sender_name = sender_name;

  const recipient_email = data.recipientEmail !== undefined ? data.recipientEmail : data.recipient_email;
  if (recipient_email !== undefined) dbData.recipient_email = recipient_email;

  const recipient_name = data.recipientName !== undefined ? data.recipientName : data.recipient_name;
  if (recipient_name !== undefined) dbData.recipient_name = recipient_name;

  const pet_name = data.petName !== undefined ? data.petName : data.pet_name;
  if (pet_name !== undefined) dbData.pet_name = pet_name;

  if (data.plan !== undefined) dbData.plan = data.plan;
  if (data.message !== undefined) dbData.message = data.message;
  if (data.design !== undefined) dbData.design = data.design;

  const created_at = data.createdAt !== undefined ? data.createdAt : data.created_at;
  if (created_at !== undefined) dbData.created_at = created_at;

  const expires_at = data.expiresAt !== undefined ? data.expiresAt : data.expires_at;
  if (expires_at !== undefined) dbData.expires_at = expires_at;

  const redeemed_at = data.redeemedAt !== undefined ? data.redeemedAt : data.redeemed_at;
  if (redeemed_at !== undefined) dbData.redeemed_at = redeemed_at;

  const redeemed_by = data.redeemedBy !== undefined ? data.redeemedBy : data.redeemed_by;
  if (redeemed_by !== undefined) dbData.redeemed_by = redeemed_by;

  return dbData;
}

// Order Helpers
function mapOrderToJS(row) {
  if (!row) return null;
  return {
    id: row.id,
    userId: row.user_id,
    mpPaymentId: row.mp_payment_id,
    amount: row.amount,
    status: row.status,
    paymentMethod: row.payment_method,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function mapOrderToDB(data) {
  if (!data) return {};
  const dbData = {};
  if (data.id !== undefined) dbData.id = data.id;
  
  const user_id = data.userId !== undefined ? data.userId : data.user_id;
  if (user_id !== undefined) dbData.user_id = user_id;

  const mp_payment_id = data.mpPaymentId !== undefined ? data.mpPaymentId : data.mp_payment_id;
  if (mp_payment_id !== undefined) dbData.mp_payment_id = mp_payment_id;

  if (data.amount !== undefined) dbData.amount = data.amount;
  if (data.status !== undefined) dbData.status = data.status;

  const payment_method = data.paymentMethod !== undefined ? data.paymentMethod : data.payment_method;
  if (payment_method !== undefined) dbData.payment_method = payment_method;

  const created_at = data.createdAt !== undefined ? data.createdAt : data.created_at;
  if (created_at !== undefined) dbData.created_at = created_at;

  const updated_at = data.updatedAt !== undefined ? data.updatedAt : data.updated_at;
  if (updated_at !== undefined) dbData.updated_at = updated_at;

  return dbData;
}

// Subscription Helpers
function mapSubscriptionToJS(row) {
  if (!row) return null;
  return {
    id: row.id,
    userId: row.user_id,
    preapprovalId: row.preapproval_id,
    status: row.status,
    plan: row.plan,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function mapSubscriptionToDB(data) {
  if (!data) return {};
  const dbData = {};
  if (data.id !== undefined) dbData.id = data.id;

  const user_id = data.userId !== undefined ? data.userId : data.user_id;
  if (user_id !== undefined) dbData.user_id = user_id;

  const preapproval_id = data.preapprovalId !== undefined ? data.preapprovalId : data.preapproval_id;
  if (preapproval_id !== undefined) dbData.preapproval_id = preapproval_id;

  if (data.status !== undefined) dbData.status = data.status;
  if (data.plan !== undefined) dbData.plan = data.plan;

  const created_at = data.createdAt !== undefined ? data.createdAt : data.created_at;
  if (created_at !== undefined) dbData.created_at = created_at;

  const updated_at = data.updatedAt !== undefined ? data.updatedAt : data.updated_at;
  if (updated_at !== undefined) dbData.updated_at = updated_at;

  return dbData;
}

// Letter Helpers
function mapLetterToJS(row) {
  if (!row) return null;
  return {
    id: row.id,
    userId: row.user_id,
    petId: row.pet_id,
    petName: row.pet_name,
    tutorName: row.tutor_name,
    body: row.body,
    privacy: row.privacy,
    isPrivate: row.is_private,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  };
}

function mapLetterToDB(data) {
  if (!data) return {};
  const dbData = {};
  if (data.id !== undefined) dbData.id = data.id;

  const user_id = data.userId !== undefined ? data.userId : data.user_id;
  if (user_id !== undefined) dbData.user_id = user_id;

  const pet_id = data.petId !== undefined ? data.petId : data.pet_id;
  if (pet_id !== undefined) dbData.pet_id = pet_id;

  const pet_name = data.petName !== undefined ? data.petName : data.pet_name;
  if (pet_name !== undefined) dbData.pet_name = pet_name;

  const tutor_name = data.tutorName !== undefined ? data.tutorName : data.tutor_name;
  if (tutor_name !== undefined) dbData.tutor_name = tutor_name;

  if (data.body !== undefined) dbData.body = data.body;
  if (data.privacy !== undefined) dbData.privacy = data.privacy;

  const is_private = data.isPrivate !== undefined ? data.isPrivate : data.is_private;
  if (is_private !== undefined) dbData.is_private = is_private;

  const created_at = data.createdAt !== undefined ? data.createdAt : data.created_at;
  if (created_at !== undefined) dbData.created_at = created_at;

  const updated_at = data.updatedAt !== undefined ? data.updatedAt : data.updated_at;
  if (updated_at !== undefined) dbData.updated_at = updated_at;

  return dbData;
}

// API Export
export const users = {
  async create(data) {
    const dbData = mapUserToDB(data);
    const { data: insertedData, error } = await supabaseAdmin
      .from('users')
      .insert(dbData)
      .select();
    return { data: insertedData ? mapUserToJS(insertedData[0]) : null, error };
  },
  async findByEmail(email) {
    const { data, error } = await supabaseAdmin
      .from('users')
      .select('*')
      .eq('email', email.toLowerCase())
      .limit(1);
    return { data: data && data.length > 0 ? mapUserToJS(data[0]) : null, error };
  },
  async findById(id) {
    const { data, error } = await supabaseAdmin
      .from('users')
      .select('*')
      .eq('id', id)
      .limit(1);
    return { data: data && data.length > 0 ? mapUserToJS(data[0]) : null, error };
  },
  async update(id, updateData) {
    const dbData = mapUserToDB(updateData);
    const { data, error } = await supabaseAdmin
      .from('users')
      .update(dbData)
      .eq('id', id)
      .select();
    return { data: data && data.length > 0 ? mapUserToJS(data[0]) : null, error };
  }
};

export const sessions = {
  async create(data) {
    const dbData = mapSessionToDB(data);
    const { data: insertedData, error } = await supabaseAdmin
      .from('sessions')
      .insert(dbData)
      .select();
    return { data: insertedData ? mapSessionToJS(insertedData[0]) : null, error };
  },
  async findById(id) {
    const { data, error } = await supabaseAdmin
      .from('sessions')
      .select('*')
      .eq('id', id)
      .limit(1);
    return { data: data && data.length > 0 ? mapSessionToJS(data[0]) : null, error };
  },
  async delete(id) {
    const { data, error } = await supabaseAdmin
      .from('sessions')
      .delete()
      .eq('id', id)
      .select();
    return { data: data && data.length > 0 ? mapSessionToJS(data[0]) : null, error };
  }
};

export const pets = {
  async create(data) {
    const dbData = mapPetToDB(data);
    const { data: insertedData, error } = await supabaseAdmin
      .from('pets')
      .insert(dbData)
      .select();
    return { data: insertedData ? mapPetToJS(insertedData[0]) : null, error };
  },
  async findByOwner(userId) {
    const { data, error } = await supabaseAdmin
      .from('pets')
      .select('*')
      .eq('user_id', userId)
      .limit(1);
    return { data: data && data.length > 0 ? mapPetToJS(data[0]) : null, error };
  },
  async findBySlug(slug) {
    const { data, error } = await supabaseAdmin
      .from('pets')
      .select('*')
      .eq('slug', slug)
      .limit(1);
    return { data: data && data.length > 0 ? mapPetToJS(data[0]) : null, error };
  },
  async update(userId, updateData) {
    const dbData = mapPetToDB(updateData);
    const { data, error } = await supabaseAdmin
      .from('pets')
      .update(dbData)
      .eq('user_id', userId)
      .select();
    return { data: data && data.length > 0 ? mapPetToJS(data[0]) : null, error };
  }
};

export const giftCards = {
  async create(data) {
    const dbData = mapGiftCardToDB(data);
    const { data: insertedData, error } = await supabaseAdmin
      .from('gift_cards')
      .insert(dbData)
      .select();
    return { data: insertedData ? mapGiftCardToJS(insertedData[0]) : null, error };
  },
  async findByCode(code) {
    const { data, error } = await supabaseAdmin
      .from('gift_cards')
      .select('*')
      .eq('code', code.toUpperCase())
      .limit(1);
    return { data: data && data.length > 0 ? mapGiftCardToJS(data[0]) : null, error };
  },
  async redeem(code, userId) {
    const { data, error } = await supabaseAdmin
      .from('gift_cards')
      .update({
        redeemed_at: new Date().toISOString(),
        redeemed_by: userId
      })
      .eq('code', code)
      .select();
    return { data: data && data.length > 0 ? mapGiftCardToJS(data[0]) : null, error };
  },
  async list({ page = 1, limit = 10 } = {}) {
    const fromRange = (page - 1) * limit;
    const toRange = fromRange + limit - 1;

    const { count, error: countError } = await supabaseAdmin
      .from('gift_cards')
      .select('*', { count: 'exact', head: true });

    const { data, error } = await supabaseAdmin
      .from('gift_cards')
      .select('*')
      .order('created_at', { ascending: false })
      .range(fromRange, toRange);

    return {
      data: {
        cards: data ? data.map(mapGiftCardToJS) : [],
        pagination: {
          total: count || 0,
          page,
          limit,
          pages: count ? Math.ceil(count / limit) : 0
        }
      },
      error: error || countError
    };
  }
};

export const orders = {
  async create(data) {
    const dbData = mapOrderToDB(data);
    const { data: insertedData, error } = await supabaseAdmin
      .from('orders')
      .insert(dbData)
      .select();
    return { data: insertedData ? mapOrderToJS(insertedData[0]) : null, error };
  },
  async findById(id) {
    const { data, error } = await supabaseAdmin
      .from('orders')
      .select('*')
      .eq('id', id)
      .limit(1);
    return { data: data && data.length > 0 ? mapOrderToJS(data[0]) : null, error };
  },
  async findByUser(userId) {
    const { data, error } = await supabaseAdmin
      .from('orders')
      .select('*')
      .eq('user_id', userId);
    return { data: data ? data.map(mapOrderToJS) : [], error };
  },
  async update(id, updateData) {
    const dbData = mapOrderToDB(updateData);
    const { data, error } = await supabaseAdmin
      .from('orders')
      .update(dbData)
      .eq('id', id)
      .select();
    return { data: data && data.length > 0 ? mapOrderToJS(data[0]) : null, error };
  },
  async findByPaymentId(mpPaymentId) {
    const { data, error } = await supabaseAdmin
      .from('orders')
      .select('*')
      .eq('mp_payment_id', mpPaymentId)
      .limit(1);
    return { data: data && data.length > 0 ? mapOrderToJS(data[0]) : null, error };
  }
};

export const subscriptions = {
  async create(data) {
    const dbData = mapSubscriptionToDB(data);
    const { data: insertedData, error } = await supabaseAdmin
      .from('subscriptions')
      .insert(dbData)
      .select();
    return { data: insertedData ? mapSubscriptionToJS(insertedData[0]) : null, error };
  },
  async findByUser(userId) {
    const { data, error } = await supabaseAdmin
      .from('subscriptions')
      .select('*')
      .eq('user_id', userId);
    return { data: data ? data.map(mapSubscriptionToJS) : [], error };
  },
  async findByPreapprovalId(id) {
    const { data, error } = await supabaseAdmin
      .from('subscriptions')
      .select('*')
      .eq('preapproval_id', id)
      .limit(1);
    return { data: data && data.length > 0 ? mapSubscriptionToJS(data[0]) : null, error };
  },
  async update(id, updateData) {
    const dbData = mapSubscriptionToDB(updateData);
    const { data, error } = await supabaseAdmin
      .from('subscriptions')
      .update(dbData)
      .eq('id', id)
      .select();
    return { data: data && data.length > 0 ? mapSubscriptionToJS(data[0]) : null, error };
  }
};

export const letters = {
  async create(data) {
    const dbData = mapLetterToDB(data);
    const { data: insertedData, error } = await supabaseAdmin
      .from('letters')
      .insert(dbData)
      .select();
    return { data: insertedData ? mapLetterToJS(insertedData[0]) : null, error };
  },
  async findByPet(petId) {
    const { data, error } = await supabaseAdmin
      .from('letters')
      .select('*')
      .eq('pet_id', petId);
    return { data: data ? data.map(mapLetterToJS) : [], error };
  },
  async findByUser(userId) {
    const { data, error } = await supabaseAdmin
      .from('letters')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });
    return { data: data ? data.map(mapLetterToJS) : [], error };
  },
  async findById(id) {
    const { data, error } = await supabaseAdmin
      .from('letters')
      .select('*')
      .eq('id', id)
      .limit(1);
    return { data: data && data.length > 0 ? mapLetterToJS(data[0]) : null, error };
  },
  async update(id, updateData) {
    const dbData = mapLetterToDB(updateData);
    const { data, error } = await supabaseAdmin
      .from('letters')
      .update(dbData)
      .eq('id', id)
      .select();
    return { data: data && data.length > 0 ? mapLetterToJS(data[0]) : null, error };
  }
};
