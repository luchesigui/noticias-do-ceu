// Helper file to check feature flags

export function isPricingEnabled() {
  const envVal = 
    (typeof process !== 'undefined' && process.env ? process.env.PUBLIC_ENABLE_PRICING : null) || 
    (typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.PUBLIC_ENABLE_PRICING : null);
  
  // Flag starts disabled by default. It must be explicitly 'true' to be enabled.
  return envVal === 'true';
}
