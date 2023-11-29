import { FC } from 'react'
import NewArticleItem from './newArticleItem'

/**
 * New articles section
 */
export function NewArticles() {
  const { newArticles } = require('@/lib/data')

  return (
    <div className="h-fit p-4 flex flex-col gap-4 bg-dark-blue">
      <h2 className="text-4xl font-semibold text-soft-orange">New</h2>
      <div className="flex flex-col gap-3">
        {newArticles.map((article: any, index: number) => (
          <NewArticleItem key={index} title={article.title} description={article.description} image={article.image} link={article.link} lastArticle={index === newArticles.length - 1} />
        ))}
      </div>
    </div>
  )
}

export default NewArticles