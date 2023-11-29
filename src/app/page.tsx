import HeadlineArticle from '@/components/homePage/headline/headlineArticle'
import NewArticles from '@/components/homePage/new/newArticles'
import TrendingArticles, { TrendingArticlesSkeleton } from '@/components/homePage/trending/trendingArticles'
import Image from 'next/image'
import Link from 'next/link'
import { Suspense } from 'react'

/**
 * Home page
 * Displays the headline article, new articles and trending articles
 * 
 */
export default function Home() {
  return (
    <main className="min-h-screen max-w-7xlxl flex flex-col items-center justify-center page-gutter">
      <div className="max-w-[500px] sm:max-w-none flex flex-col justify-center gap-24 sm:gap-14 md:gap-8">
        <div className="z-10 w-full flex flex-col gap-24 sm:gap-14 md:grid md:grid-cols-[2fr_1fr] md:gap-6">
          <HeadlineArticle />
          <NewArticles />
        </div>
        <Suspense fallback={<TrendingArticlesSkeleton />}>
          <TrendingArticles />
        </Suspense>
      </div>
    </main>
  )
}
