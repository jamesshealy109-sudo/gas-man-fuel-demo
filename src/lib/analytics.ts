export type AnalyticsEvent =
  | "membership_started" | "membership_completed" | "membership_payment_failed"
  | "service_request_started" | "service_request_submitted" | "phone_click" | "contact_form_submit";

export function track(event: AnalyticsEvent, data: Record<string, string | number | boolean> = {}) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new CustomEvent("gasman:analytics", { detail: { event, ...data } }));
  // Extension point: forward to GA4, Google Ads, and Meta Pixel when production IDs are configured.
}

