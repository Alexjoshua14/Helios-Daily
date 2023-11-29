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
    <div className={cn(`w-full py-3 flex flex-col gap-2 ${!lastArticle && "border-b-[1px] border-b-light-grey-blue/50"}`, className)}>
      <div className="text-light-primary">
        <h3>
          {title}
        </h3>
      </div>
      <div className="text-light-secondary">
        <p>
          {description}
        </p>
      </div>
    </div>
  )
}

export default NewArticleItem