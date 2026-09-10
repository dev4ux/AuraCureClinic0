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
export function getAvailableSlots(iso: string): string[] {
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
  return byWeekday[weekday] ?? [];
}

export type PaymentPreference = "now" | "before30";

export const paymentOptions: { id: PaymentPreference; title: string; description: string }[] = [
  { id: "now", title: "Pay Now", description: "Pay now and confirm your consultation." },
  {
    id: "before30",
    title: "Pay Within 30 Minutes",
    description: "Pay anytime up to 30 minutes before your consultation.",
  },
];
