import HeadlineArticle from '@/components/homePage/headline/headlineArticle'
import NewArticles from '@/components/homePage/new/newArticles'
import TrendingArticles from '@/components/homePage/trending/trendingArticles'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-20 page-gutter">
      <div className="z-10 max-w-5xl w-full flex flex-col gap-24">
        <HeadlineArticle />
        <NewArticles />
        <TrendingArticles />
      </div>
    </main>
  )
}
