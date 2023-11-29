import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import { FC, HTMLAttributes } from 'react'

interface TrendingArticleItemProps extends HTMLAttributes<HTMLDivElement> {
  index: number
  title: string
  description: string
  image: string
  link: string
}

/**
 * Trending article item
 * 
 * @param index index of the article in the list
 * @param title article title
 * @param description article description
 * @param image link to image of the article
 * @param link link to the article
 * @param className optional className
 * @returns 
 */
const TrendingArticleItem: FC<TrendingArticleItemProps> = ({ index, title, description, image, link, className }) => {
  return (
    <div className={cn("h-36 grid grid-cols-[1fr_2fr] gap-8 md:gap-4 min-w-[270px] w-full max-w-[400px] md:w-2/5", className)}>
      <div className="relative">
        <Image src={image} alt={title} layout="fill" objectFit="contain" />
      </div>
      <div className="flex flex-col justify-around">
        <h3 className="text-3xl font-semibold text-tertiary">
          {`${index.toString().padStart(2, '0')}`}
        </h3>
        <Link href={link} className="w-full flex items-center hover:text-soft-red transition-colors">
          <h4>
            {title}
          </h4>
        </Link>
        <div className="w-full">
          <p className="leading-loose text-sm font-light text-secondary">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TrendingArticleItem