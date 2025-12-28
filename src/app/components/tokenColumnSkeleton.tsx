import TokenCardSkeleton from "./skeletonLoading";

export default function TokenColumnSkeleton() {
  return (
    <div className="flex flex-col gap-2 p-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <TokenCardSkeleton key={i} />
      ))}
    </div>
  );
}
