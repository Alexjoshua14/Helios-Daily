import { FC } from 'react'
import NewArticleItem from './newArticleItem'

interface NewArticlesProps {

}

const NewArticles: FC<NewArticlesProps> = ({ }) => {
  return (
    <div className="h-auto p-4 flex flex-col bg-slate-900/80">
      <h2 className="text-4xl leading-none font-semibold text-orange-300">New</h2>
      <div className="grid grid-rows-[1fr_1fr_1fr]">
        <NewArticleItem title="Hydrogen VS Electric Cars" description="Will hydrogen-fueled cars ever catch up to EVs?" image="" url="/" />
        <NewArticleItem title="Hydrogen VS Electric Cars" description="Will hydrogen-fueled cars ever catch up to EVs?" image="" url="/" />
        <NewArticleItem title="Hydrogen VS Electric Cars" description="Will hydrogen-fueled cars ever catch up to EVs?" image="" url="/" lastArticle />
      </div>
    </div>
  )
}

export default NewArticles