import { PRODUCTS } from '../data/products';

export interface PlanFeatures {
  canEditMemorial: boolean;
  canViewArchive: boolean;
  canShareAdvanced: boolean;
  canDownloadPDF: boolean;
  canSendLetters: boolean;
  maxPets: number;
  maxPhotos: number;
}

export type PlanTier = 'annual' | 'lifetime';

export const FEATURES: Record<PlanTier, PlanFeatures> = {
  annual: {
    canEditMemorial: true,
    canViewArchive: false,
    canShareAdvanced: false,
    canDownloadPDF: false,
    canSendLetters: false,
    maxPets: 1,
    maxPhotos: 5,
  },
  lifetime: {
    canEditMemorial: true,
    canViewArchive: true,
    canShareAdvanced: true,
    canDownloadPDF: true,
    canSendLetters: true,
    maxPets: Infinity,
    maxPhotos: Infinity,
  },
};

export function getPlanFeatures(tier: PlanTier): PlanFeatures {
  return FEATURES[tier];
}

export function hasFeature(tier: PlanTier, feature: keyof PlanFeatures): boolean {
  const value = FEATURES[tier][feature];
  if (typeof value === 'boolean') {
    return value;
  }
  return value > 0;
}

export function canAccessFeature(userTier: PlanTier, requiredFeature: keyof PlanFeatures): boolean {
  return hasFeature(userTier, requiredFeature);
}

export function getTierByProductId(productId: string): PlanTier {
  const product = PRODUCTS.find((p) => p.productId === productId);
  if (!product) {
    // If not found, check if the productId matches a tier name or map it to a default
    if (productId === 'annual' || productId === 'lifetime') {
      return productId as PlanTier;
    }
    throw new Error(`Product with ID ${productId} not found`);
  }
  return product.planTier;
}
