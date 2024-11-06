import * as React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const SearchFilterSkeleton: React.FC = () => {
  return (
    <div className="Head p-2 flex flex-wrap gap-4 justify-between items-center">
      {/* Name Placeholder */}
      <div className="Name flex justify-center items-center gap-2.5">
        <Skeleton className="h-6 w-40  bg-white/20" />
      </div>

      {/* Frame71 Placeholder */}
      <div className="Frame71 flex flex-wrap justify-center items-center gap-4">
        {/* ListSearch Skeleton */}
        <div className="ViewAs h-12 px-3 w-40 bg-white/10 rounded-lg flex items-center gap-3">
            <Skeleton className="h-6 w-24 bg-white/10 rounded-lg" />
        </div>
        
        {/* ListCategory Skeleton */}
        <div className="ViewAs h-12 p-2 bg-white/10 rounded-lg justify-center items-center gap-3 inline-flex">
            <Skeleton className="h-6 w-16 bg-white/10 rounded-lg" />
        </div>

        {/* ListSortBy Skeleton */}
        <div className="ViewAs h-12 p-2 bg-white/10 rounded-lg justify-center items-center gap-3 inline-flex">
            <Skeleton className="h-6 w-32 bg-white/10 rounded-lg" />
        </div>

        {/* View Mode Toggle */}
        <div className="ViewAs h-12 p-2 bg-white/10 rounded-lg justify-center items-center gap-3 inline-flex">
          <div className="Grid p-1 justify-start items-center gap-2.5 flex cursor-pointer">
            <Skeleton className="w-6 h-6 bg-white/10" />
          </div>
          <div className="List p-1 justify-start items-center gap-2.5 flex cursor-pointer">
            <Skeleton className="w-6 h-6 bg-white/10 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilterSkeleton;