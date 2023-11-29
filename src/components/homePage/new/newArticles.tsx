import { FC } from 'react'
import NewArticleItem from './newArticleItem'

interface NewArticlesProps {

}

const NewArticles: FC<NewArticlesProps> = ({ }) => {
  return (
    <div className="p-4 flex flex-col gap-4 bg-dark-blue">
      <h2 className="text-4xl font-semibold text-soft-orange">New</h2>
      <div className="flex flex-col gap-3">
        <NewArticleItem title="Hydrogen VS Electric Cars" description="Will hydrogen-fueled cars ever catch up to EVs?" image="" url="/" />
        <NewArticleItem title="Hydrogen VS Electric Cars" description="What are the possible adverse effects of on-demand Al image generation?" image="" url="/" />
        <NewArticleItem title="Hydrogen VS Electric Cars" description="Will hydrogen-fueled cars ever catch up to EVs?" image="" url="/" lastArticle />
      </div>
    </div>
  )
}

export default NewArticles