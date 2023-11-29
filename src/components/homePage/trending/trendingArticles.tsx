import { FC } from 'react'
import TrendingArticleItem from './trendingArticleItem'
import TrendingArticleItemSkeleton from './trendingArticleItemSkeleton'
import { resolve } from 'path'

interface TrendingArticlesProps {

}

export async function TrendingArticles() {
  const { trendingArticles } = require('@/lib/data')

  const delayLoading = () => new Promise(resolve => setTimeout(resolve, 4000))

  await delayLoading()


  return (
    <div className="flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-around gap-12 md:gap-4 md:gap-y-8">
      {trendingArticles.map((article: any, index: number) => (
        <TrendingArticleItem key={index}
          index={index}
          title={article.title}
          description={article.description}
          image={article.image}
          link={article.link}
        />
      ))}
    </div>
  )
}

export function TrendingArticlesSkeleton() {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-around gap-12 md:gap-4 md:gap-y-8">
      {Array.from({ length: 3 }).map((_, index) => (
        <TrendingArticleItemSkeleton key={index} />
      ))}
    </div>
  )
}

export default TrendingArticles