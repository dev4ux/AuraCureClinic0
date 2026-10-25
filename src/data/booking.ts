import { siteConfig } from "@/lib/site-config";

export const concernOptions = [
  "Homeopathy",
  "Hair Problem",
  "Skin Problem",
  "Allergy",
  "Migraine",
  "Piles",
  "Digestion Problem",
  "Joint Pain",
  "Other",
] as const;

export type ConcernOption = (typeof concernOptions)[number];

export interface BookingDate {
  iso: string; // yyyy-mm-dd
  weekday: string; // "Thu"
  day: number; // 24
}

/** The next 7 calendar days starting today, computed from the real device clock. */
export function getNextSevenDays(from: Date = new Date()): BookingDate[] {
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(from);
    d.setDate(from.getDate() + i);
    return {
      iso: `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`,
      weekday: d.toLocaleDateString("en-US", { weekday: "short" }),
      day: d.getDate(),
    };
  });
}

/**
 * The date strip pages a week at a time. Offset 0 always starts today — the
 * strip can never reach a date already past — and paging forward is capped
 * rather than unbounded, since availability beyond a month is not something
 * the clinic publishes.
 */
export const MAX_WEEK_OFFSET = 3;

export function getWeekDays(weekOffset: number, from: Date = new Date()): BookingDate[] {
  const start = new Date(from);
  start.setDate(from.getDate() + weekOffset * 7);
  return getNextSevenDays(start);
}

/**
 * Names the month(s) the visible week falls in. A week straddling a boundary
 * says so ("Sep – Oct 2026") rather than silently claiming one of the two.
 */
export function monthLabel(days: BookingDate[]): string {
  if (days.length === 0) return "";
  const first = new Date(`${days[0].iso}T00:00:00`);
  const last = new Date(`${days[days.length - 1].iso}T00:00:00`);
  const firstMonth = first.toLocaleDateString("en-US", { month: "short" });
  const lastMonth = last.toLocaleDateString("en-US", { month: "short" });

  if (first.getFullYear() !== last.getFullYear()) {
    return `${firstMonth} ${first.getFullYear()} – ${lastMonth} ${last.getFullYear()}`;
  }
  if (firstMonth !== lastMonth) return `${firstMonth} – ${lastMonth} ${last.getFullYear()}`;
  return `${firstMonth} ${first.getFullYear()}`;
}

export function formatDateLabel(iso: string): string {
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString("en-US", { weekday: "short", day: "numeric", month: "short" });
}

export function formatSelectedSlot(iso: string, time: string): string {
  return `${formatDateLabel(iso)} · ${time}`;
}

/**
 * MOCK AVAILABILITY — there is no calendar integration yet, so this returns a
 * fixed set of times per weekday rather than the doctor's real schedule.
 * Replace with a real calendar/booking backend before launch; until then this
 * exists only to make the booking flow demonstrable end to end.
 */
export function getAvailableSlots(iso: string, now: Date = new Date()): string[] {
  const weekday = new Date(`${iso}T00:00:00`).getDay(); // 0 = Sunday
  const byWeekday: Record<number, string[]> = {
    0: [],
    1: ["4:30 PM", "5:00 PM", "6:30 PM", "7:00 PM"],
    2: ["11:00 AM", "4:30 PM", "6:30 PM"],
    3: ["4:30 PM", "5:00 PM", "6:30 PM", "7:00 PM"],
    4: ["10:30 AM", "11:00 AM", "5:00 PM", "6:30 PM"],
    5: ["4:30 PM", "5:00 PM", "6:30 PM", "7:00 PM"],
    6: ["10:30 AM", "11:00 AM", "12:00 PM"],
  };
  const times = byWeekday[weekday] ?? [];

  // Today, only times still far enough ahead for the clinic to call back and
  // confirm — a slot that has already gone (or is about to) is not offered.
  if (iso === toIso(now)) {
    const cutoff = now.getHours() * 60 + now.getMinutes() + MIN_LEAD_MINUTES;
    return times.filter((t) => minutesOfDay(t) >= cutoff);
  }
  return times;
}

/* ---------------------------------------------------------------------------
   In-clinic visits have no fixed slot: the patient picks a day and comes in
   any time during clinic hours. Hours come from siteConfig, so they can never
   disagree with what the rest of the site (and Google) says.
   --------------------------------------------------------------------------- */

const clinicHours = siteConfig.hours.structured[0];
const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

/** "10:00" → "10:00 AM", "19:00" → "7:00 PM". */
function to12h(hhmm: string): string {
  const [h, m] = hhmm.split(":").map(Number);
  return `${h % 12 || 12}:${String(m).padStart(2, "0")} ${h >= 12 ? "PM" : "AM"}`;
}

/** "10:00 AM – 7:00 PM" */
export const clinicHoursLabel = `${to12h(clinicHours.opens)} – ${to12h(clinicHours.closes)}`;

/**
 * Whether the clinic can take an in-clinic visit on this date: an open day,
 * and — if it is today — at least an hour before closing, so there is time to
 * get there and be seen.
 */
export function isClinicDayOpen(iso: string, now: Date = new Date()): boolean {
  const date = new Date(`${iso}T00:00:00`);
  if (!clinicHours.days.includes(weekdayNames[date.getDay()])) return false;
  if (iso !== toIso(now)) return true;
  const [ch, cm] = clinicHours.closes.split(":").map(Number);
  return now.getHours() * 60 + now.getMinutes() + MIN_LEAD_MINUTES <= ch * 60 + cm;
}

/** How soon a same-day slot may start, counting from now. */
const MIN_LEAD_MINUTES = 60;

function toIso(d: Date): string {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

/** "4:30 PM" → 990. */
function minutesOfDay(time: string): number {
  const [, h, m, ampm] = time.match(/^(\d{1,2}):(\d{2}) (AM|PM)$/) ?? [];
  if (!h) return 0;
  return ((Number(h) % 12) + (ampm === "PM" ? 12 : 0)) * 60 + Number(m);
}

/** Which page of the week strip a date sits on (0 = the week starting today). */
export function weekOffsetOf(iso: string, from: Date = new Date()): number {
  const start = new Date(`${toIso(from)}T00:00:00`);
  const target = new Date(`${iso}T00:00:00`);
  const days = Math.round((target.getTime() - start.getTime()) / 86_400_000);
  return Math.min(MAX_WEEK_OFFSET, Math.max(0, Math.floor(days / 7)));
}

/**
 * Offline (in-clinic) or online. Chosen first, because it decides what the rest
 * of the booking needs to say: where to go, or how the call will reach you,
 * and which ways of paying make sense.
 */
export type VisitType = "clinic" | "online";

export const visitTypes: { id: VisitType; tag: string; title: string; description: string }[] = [
  {
    id: "clinic",
    tag: "Offline",
    title: "In-clinic visit",
    description: "Meet the doctor in person at the clinic in Sikar.",
  },
  {
    id: "online",
    tag: "Online",
    title: "Online consultation",
    description: "Video consultation from anywhere in India.",
  },
];

export function visitTypeLabel(id: VisitType): string {
  return visitTypes.find((v) => v.id === id)?.title ?? "";
}

export type PaymentPreference = "atClinic" | "now" | "before30";

const allPaymentOptions: Record<PaymentPreference, { id: PaymentPreference; title: string; description: string }> = {
  atClinic: { id: "atClinic", title: "Pay at the clinic", description: "Pay at reception on the day of your visit." },
  now: { id: "now", title: "Pay now", description: "Pay now and confirm your consultation." },
  before30: {
    id: "before30",
    title: "Pay before the call",
    description: "Pay anytime up to 30 minutes before your consultation.",
  },
};

/** Paying at reception only exists for a visit that happens at reception. */
export function paymentOptionsFor(visit: VisitType) {
  return visit === "clinic"
    ? [allPaymentOptions.atClinic, allPaymentOptions.now]
    : [allPaymentOptions.now, allPaymentOptions.before30];
}

export function paymentLabel(id: PaymentPreference): string {
  return allPaymentOptions[id].title;
}
