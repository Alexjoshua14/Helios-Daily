import { FC } from 'react'
import TrendingArticleItem from './trendingArticleItem'

interface TrendingArticlesProps {

}

const TrendingArticles: FC<TrendingArticlesProps> = ({ }) => {
  return (
    <div className="grid grid-rows-[1fr_1fr_1fr] gap-12">
      <TrendingArticleItem index={1} title="Reviving Retro PCs" description="What happens when old PCs are given modern upgrades?" image="" url="/" />
      <TrendingArticleItem index={2} title="Reviving Retro PCs" description="What happens when old PCs are given modern upgrades?" image="" url="/" />
      <TrendingArticleItem index={3} title="Reviving Retro PCs" description="What happens when old PCs are given modern upgrades?" image="" url="/" />
    </div>
  )
}

export default TrendingArticles