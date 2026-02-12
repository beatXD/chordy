import { Skeleton } from "@/components/ui/skeleton";

export default function SongsLoading() {
  return (
    <div className="container mx-auto space-y-6 px-4 py-8">
      <div>
        <Skeleton className="h-8 w-32" />
        <Skeleton className="mt-2 h-5 w-56" />
      </div>
      <Skeleton className="h-10 w-full" />
      <div className="grid gap-3 md:grid-cols-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <Skeleton key={i} className="h-[72px] rounded-lg" />
        ))}
      </div>
    </div>
  );
}
