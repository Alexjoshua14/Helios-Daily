import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'

interface NewArticleItemProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  image: string
  url: string
  lastArticle?: boolean
}

const NewArticleItem: FC<NewArticleItemProps> = ({ title, description, image, url, className, lastArticle = false, ...props }) => {
  return (
    <div className={cn(`w-full h-40 py-8 grid grid-rows-[1fr_2fr] gap-3 ${!lastArticle && "border-b-[1px] border-b-slate-500/50}"}`, className)}>
      <div className="text-xl font-bold tracking-wide">
        {title}
      </div>
      <div className="leading-relaxed">
        {description}
      </div>
    </div>
  )
}

export default NewArticleItem