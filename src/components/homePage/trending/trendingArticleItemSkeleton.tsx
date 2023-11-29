import { Skeleton } from '@/components/ui/skeleton'
import { FC } from 'react'

const TrendingArticleItemSkeleton = ({ }) => {
  return (
    <div className={"h-36 grid grid-cols-[1fr_2fr] gap-8 md:gap-4 min-w-[270px] w-full max-w-[400px] md:w-2/5"}>

      <Skeleton className="w-fukk h-full" />

      <div className="flex flex-col justify-around">
        {/* Index */}
        <Skeleton className="w-10 h-[1.875rem] py-[.1875rem] " />

        <div className="w-full flex items-center">
          {/* Title */}
          <Skeleton className="h-[.9375rem] w-full py-[.2rem]" />
        </div>
        <div className="w-full flex flex-col gap-[.4375rem]">
          {/* Description */}
          <Skeleton className="h-[.875rem] w-4/5" />
          <Skeleton className="h-[.875rem] w-full" />
          <Skeleton className="h-[.875rem] w-2/5" />

        </div>
      </div>
    </div>
  )
}

export default TrendingArticleItemSkeleton