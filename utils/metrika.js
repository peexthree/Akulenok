export const YM_COUNTER_ID = 108276956;

export const YM_GOALS = {
  PHONE: "click_phone",
  TELEGRAM: "click_telegram",
  WHATSAPP: "click_whatsapp",
  MAX: "click_max",
  APP_STORE: "click_appstore",
  GOOGLE_PLAY: "click_googleplay",
  YANDEX_MAPS: "click_yandex_maps",
  VK: "click_vk",
  OPEN_PROMO: "open_promo",
  COPY_PROMO: "copy_promo",
};

const LINK_GOAL_MATCHERS = [
  { goal: YM_GOALS.PHONE, test: (href) => href.startsWith("tel:") },
  { goal: YM_GOALS.TELEGRAM, test: (href) => href.includes("t.me/") },
  {
    goal: YM_GOALS.WHATSAPP,
    test: (href) => href.includes("wa.me/") || href.includes("whatsapp.com"),
  },
  { goal: YM_GOALS.MAX, test: (href) => href.includes("max.ru/") },
  { goal: YM_GOALS.APP_STORE, test: (href) => href.includes("apps.apple.com/") },
  { goal: YM_GOALS.GOOGLE_PLAY, test: (href) => href.includes("play.google.com/") },
  { goal: YM_GOALS.YANDEX_MAPS, test: (href) => href.includes("yandex.ru/maps") },
  { goal: YM_GOALS.VK, test: (href) => href.includes("vk.com/") },
];

/** Sends a Yandex.Metrika conversion event when analytics consent is granted. */
export function trackGoal(goal, params) {
  if (typeof window === "undefined" || !goal) return;
  if (window.localStorage?.getItem("cookieConsent") !== "true") return;

  try {
    if (typeof window.ym === "function") {
      window.ym(YM_COUNTER_ID, "reachGoal", goal, params);
    }
  } catch {
    // Ignore errors when Metrika is blocked by browser extensions
  }
}

function resolveClickSection(link) {
  const labeled = link.closest("[data-ym-section]");
  if (labeled) return labeled.getAttribute("data-ym-section");

  const landmark = link.closest("section[id], footer, nav, header");
  if (landmark) return landmark.id || landmark.tagName.toLowerCase();

  const blockWithId = link.closest("[id]:not(#__next):not(#main-content)");
  return blockWithId ? blockWithId.id : "page";
}

/** Handles delegated click tracking for phone, messenger, app store, and map links. */
export function handleTrackedLinkClick(event) {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const link = target.closest("a[href]");
  if (!link) return;

  const href = link.getAttribute("href") || "";
  const match = LINK_GOAL_MATCHERS.find((item) => item.test(href));
  if (!match) return;

  trackGoal(match.goal, { section: resolveClickSection(link) });
}
