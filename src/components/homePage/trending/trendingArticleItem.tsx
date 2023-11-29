import { cn } from '@/lib/utils'
import { FC, HTMLAttributes } from 'react'

interface TrendingArticleItemProps extends HTMLAttributes<HTMLDivElement> {
  index: number
  title: string
  description: string
  image: string
  url: string
}

const TrendingArticleItem: FC<TrendingArticleItemProps> = ({ index, title, description, image, url, className }) => {
  return (
    <div className={cn("h-36 grid grid-cols-[1fr_2fr] gap-8 md:gap-4 min-w-[270px] w-full max-w-[400px] md:w-2/5", className)}>
      <div className="border-2 border-pink-700/60 bg-pink-700/20">

      </div>
      <div className="flex flex-col justify-around">
        <div className="">
          <h3 className="text-3xl font-semibold text-tertiary">
            {`${index.toString().padStart(2, '0')}`}
          </h3>
        </div>
        <div className="w-full flex items-center">
          <h4>
            {title}
          </h4>
        </div>
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