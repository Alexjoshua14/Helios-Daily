import ReadMore from '@/components/buttons/readMore'
import { FC } from 'react'

interface HeadlineArticleProps {

}

const HeadlineArticle: FC<HeadlineArticleProps> = ({ }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="w-full aspect-square bg-teal-700/40">

      </div>
      <div className="pr-14">
        <h1>
          The Bright Future of Web 3.0?
        </h1>
      </div>

      <div className="w-full text-secondary">
        <p>
          {`We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?`}
        </p>
      </div>

      <div className="flex w-full">
        <ReadMore url="/" />
      </div>
    </div>
  )
}

export default HeadlineArticle