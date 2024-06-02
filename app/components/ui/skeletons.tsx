// Loading animation
const shimmer =
  "before:absolute before:inset-0 before:animate-shimmer before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function CardSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-2xl bg-gray-100 p-2 min-h-[130px] max-h-[130px] shadow-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,1) animate-fade`}
    >
      <div className="flex p-2 sm:p-4">
        <div className="ml-2 h-6 w-full animate-pulse rounded-full bg-slate-200  text-sm font-medium" />
      </div>
      <div className="flex items-center justify-between truncate rounded-xl p-2 sm:px-4">
        <div className="ml-2 h-6 w-16 animate-pulse rounded-full bg-slate-200 text-sm font-medium" />
        <div className="h-12 w-12 animate-pulse rounded-full bg-white" />
      </div>
    </div>
  );
}

export function AbilitiesSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-2xl bg-gray-100 p-2 min-h-[130px] max-h-[130px] shadow-lg shadow-[0_35px_60px_-15px_rgba(0,0,0,1) animate-fade`}
    >
      <div className="flex p-2 sm:p-4">
        <div className="ml-2 h-6 w-full animate-pulse rounded-full bg-slate-200  text-sm font-medium" />
      </div>
      <div className="flex p-2 sm:p-4">
        <div className="ml-2 h-6 w-full animate-pulse rounded-full bg-slate-200  text-sm font-medium" />
      </div>
    </div>
  );
}
