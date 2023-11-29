import ReadMore from '@/components/buttons/readMore'
import { FC, Suspense } from 'react'
import Image from 'next/image'
import { headline } from '@/lib/data'
import { Skeleton } from '@/components/ui/skeleton'

/**
 * Headline article
 * Displays the headline article
 * 
 */
export function HeadlineArticle() {
  return (
    <div className="flex flex-col gap-4 md:gap-8 ">
      <div className="relative w-full lg:h-1/2 aspect-[8/7] sm:aspect-[2.43]">
        <Suspense fallback={<Skeleton className="w-full h-full" />} >
          <Image src={headline.imageMobile} alt={headline.imageAlt} fill className="sm:hidden object-cover" />
          <Image src={headline.imageDesktop} alt={headline.imageAlt} fill className="hidden sm:block object-cover" />
        </Suspense>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
        <div className="sm:w-2/5 pr-14 sm:pr-2 lg:pr-8">
          <h1>
            {headline.title}
          </h1>
        </div>

        <div className="sm:w-3/5 flex flex-col gap-4 md:justify-between md:px-4">
          <div className="w-full text-secondary">
            <p>
              {headline.description}
            </p>
          </div>

          <div className="flex w-full">
            <ReadMore url={headline.link} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeadlineArticle