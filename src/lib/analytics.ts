export type ViewSection = "hero" | "demo" | "pricing";
export type PlanId = "anual" | "vitalicio";
export type Billing = "annual" | "lifetime";
export type CtaLocation = "hero_primary" | "hero_secondary" | "post_demo" | "sticky";

export type AnalyticsEvent =
  | { event: "view_section"; section_id: ViewSection }
  | { event: "cta_click"; cta_location: CtaLocation; cta_label: string }
  | { event: "demo_advance"; demo_day: number }
  | { event: "demo_reset" }
  | { event: "select_plan"; plan_id: PlanId; plan_name: string; price: number; billing: Billing }
  | { event: "join_waitlist"; plan_id: PlanId; billing: Billing }
  | { event: "waitlist_dismiss"; plan_id: PlanId };

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    track?: typeof track;
  }
}

export function track(payload: AnalyticsEvent) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(payload);
  }
}

// Expõe no escopo global para que scripts inlines/is:inline possam chamá-lo
if (typeof window !== "undefined") {
  window.track = track;
}

/**
 * Registra o aparecimento de seções usando IntersectionObserver de forma vanilla.
 */
export function observeSectionView(element: HTMLElement | null, section_id: ViewSection, threshold = 0.4) {
  if (!element) return;

  let fired = false;
  const obs = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting && !fired) {
        fired = true;
        track({ event: "view_section", section_id });
        obs.disconnect();
      }
    },
    { threshold },
  );

  obs.observe(element);
  return () => obs.disconnect();
}
