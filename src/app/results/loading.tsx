import { PlantCardSkeleton } from "~/components/PlantCard/PlantCardSkeleton";
import { PER_PAGE } from "~/lib/constants";

export default function ResultsLoading() {
  return (
    <main className="flex flex-col gap-4 px-6 pt-7 pb-20">
      <p className="text-lg font-medium">species near</p>
      <div className="flex flex-col gap-3">
        {Array.from({ length: PER_PAGE }).map((_, i) => (
          <PlantCardSkeleton key={i} />
        ))}
      </div>
      <div className="fixed bottom-0 left-0 right-0 flex items-center justify-center gap-3 px-6 py-4 text-sm text-muted bg-background border-t border-foreground/10">
        <span className="opacity-30">←</span>
        <span className="w-24 h-4 bg-foreground/10 rounded animate-pulse" />
        <span className="opacity-30">→</span>
      </div>
    </main>
  );
}
