import { formatDateLabel, visitTypes, type VisitType } from "@/data/booking";
import { ChevronLeftIcon } from "@/components/ui/icons";
import { FOCUS_RING } from "./parts";

/**
 * What has been chosen so far, kept on screen on the later steps with a way
 * back to change it — so a patient never has to remember whether they picked
 * in-clinic or online while choosing a time.
 */
export function BookingSummary({
  visitType,
  concern,
  dateIso,
  time,
  onBack,
}: {
  visitType: VisitType;
  concern: string;
  dateIso?: string;
  time?: string;
  onBack: () => void;
}) {
  const visit = visitTypes.find((v) => v.id === visitType);

  return (
    <div className="mb-6 flex items-center gap-3 rounded-xl bg-ivory-muted/70 px-3.5 py-2.5">
      <div className="min-w-0 flex-1 text-[13px] text-charcoal">
        <p className="flex items-center gap-2">
          <VisitTag visitType={visitType} />
          <span className="truncate font-medium">{visit?.title}</span>
        </p>
        <p className="mt-1 text-charcoal-soft">
          {concern}
          {dateIso && time && (
            <span className="tabular-nums">
              {" · "}
              {formatDateLabel(dateIso)}, {visitType === "clinic" ? `clinic hours ${time}` : time}
            </span>
          )}
        </p>
      </div>
      <button
        type="button"
        onClick={onBack}
        className={`flex min-h-10 shrink-0 items-center gap-1 rounded-lg px-2 text-[13px] font-semibold text-forest-700 hover:underline hover:underline-offset-4 ${FOCUS_RING}`}
      >
        <ChevronLeftIcon className="h-3.5 w-3.5" />
        Change
      </button>
    </div>
  );
}

/** The Offline / Online tag, the same everywhere it appears. */
export function VisitTag({ visitType }: { visitType: VisitType }) {
  const tag = visitTypes.find((v) => v.id === visitType)?.tag;
  return (
    <span className="inline-block shrink-0 rounded-full bg-accent-500 px-2 py-0.5 text-[10.5px] font-semibold uppercase tracking-[0.08em] text-forest-950">
      {tag}
    </span>
  );
}
