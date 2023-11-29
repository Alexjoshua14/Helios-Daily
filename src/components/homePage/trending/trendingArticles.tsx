import { FC } from 'react'
import TrendingArticleItem from './trendingArticleItem'

interface TrendingArticlesProps {

}

const TrendingArticles: FC<TrendingArticlesProps> = ({ }) => {
  return (
    <div className="flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-around gap-12 md:gap-4 md:gap-y-8">
      <TrendingArticleItem
        index={1}
        title="Reviving Retro PCs"
        description="What happens when old PCs are given modern upgrades?"
        image=""
        url="/"
      />
      <TrendingArticleItem
        index={2}
        title="Reviving Retro PCs"
        description="What happens when old PCs are given modern upgrades?"
        image=""
        url="/"
        className="justify-self-end self-end place-self-end"
      />
      <TrendingArticleItem
        index={3}
        title="Reviving Retro PCs"
        description="What happens when old PCs are given modern upgrades?"
        image=""
        url="/"
      />
    </div>
  )
}

export default TrendingArticles