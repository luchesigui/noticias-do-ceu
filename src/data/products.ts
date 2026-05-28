export interface Product {
  productId: string;
  name: string;
  priceCents: number;
  interval: 'year' | 'one_time';
  planTier: 'annual' | 'lifetime';
}

export const PRODUCTS: Product[] = [
  {
    productId: 'annual_plan',
    name: 'Plano Anual',
    priceCents: 990,
    interval: 'year',
    planTier: 'annual',
  },
  {
    productId: 'lifetime_plan',
    name: 'Plano Vitalício',
    priceCents: 3990,
    interval: 'one_time',
    planTier: 'lifetime',
  },
  {
    productId: 'legacy_memorial_eternal',
    name: 'Gift Card Memorial Eterno',
    priceCents: 9700,
    interval: 'one_time',
    planTier: 'lifetime',
  },
];
