import { FC } from 'react'

interface TrendingArticleItemProps {
  index: number
  title: string
  description: string
  image: string
  url: string
}

const TrendingArticleItem: FC<TrendingArticleItemProps> = ({ index, title, description, image, url }) => {
  return (
    <div className="w-full h-36 grid grid-cols-[1fr_2fr] gap-8">
      <div className="border-2 border-pink-700/60 bg-pink-700/20">

      </div>
      <div className="flex flex-col justify-around">
        <div className="">
          <h3 className="text-3xl font-semibold text-slate-200/80">
            {`${index.toString().padStart(2, '0')}`}
          </h3>
        </div>
        <div className=" w-full flex items-center">
          <h4 className="font-semibold">
            {title}
          </h4>
        </div>
        <div className="w-full">
          <p className="leading-loose text-sm font-light text-slate-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default TrendingArticleItem