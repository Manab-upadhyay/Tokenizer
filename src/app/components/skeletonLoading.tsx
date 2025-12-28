export default function TokenCardSkeleton() {
  return (
    <div className="animate-pulse rounded-lg border border-white/5 bg-black/40 p-3">
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="h-12 w-12 rounded-lg bg-white/10" />

        <div className="flex-1 space-y-2">
          <div className="h-4 w-1/3 rounded bg-white/10" />
          <div className="h-3 w-1/2 rounded bg-white/10" />
        </div>

        <div className="space-y-2 text-right">
          <div className="h-3 w-14 rounded bg-white/10" />
          <div className="h-3 w-10 rounded bg-white/10" />
        </div>
      </div>

      <div className="mt-3 flex gap-2">
        <div className="h-3 w-12 rounded bg-white/10" />
        <div className="h-3 w-12 rounded bg-white/10" />
        <div className="h-3 w-12 rounded bg-white/10" />
      </div>
    </div>
  );
}
