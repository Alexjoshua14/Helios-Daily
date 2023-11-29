import { cn } from '@/lib/utils'
import Link from 'next/link'
import { FC, HTMLAttributes } from 'react'

interface NewArticleItemProps extends HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  image: string
  link: string
  lastArticle?: boolean
}

/**
 * New article item
 * 
 * @param title article title
 * @param description article description
 * @param image link to image of the article
 * @param link link to the article
 * @param className optional className
 * @param lastArticle optional boolean to determine if the article is the last one in the list 
 */
const NewArticleItem: FC<NewArticleItemProps> = ({ title, description, image, link, className, lastArticle = false, ...props }) => {
  return (
    <div className={cn(`w-full py-3 flex flex-col gap-2 ${!lastArticle && "border-b-[1px] border-b-light-grey-blue/50"}`, className)}>
      <Link href={link} className="text-light-primary hover:text-soft-orange transition-colors">
        <h3>
          {title}
        </h3>
      </Link>
      <div className="text-light-secondary">
        <p>
          {description}
        </p>
      </div>
    </div>
  )
}

export default NewArticleItem