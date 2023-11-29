import ReadMore from '@/components/buttons/readMore'
import { FC } from 'react'
import Image from 'next/image'

interface HeadlineArticleProps {

}

const HeadlineArticle: FC<HeadlineArticleProps> = ({ }) => {
  return (
    <div className="flex flex-col gap-4 md:gap-8 ">
      <div className="relative w-full aspect-[8/7] sm:aspect-[2.43] bg-teal-700/40">
        <Image src="/images/image-web-3-mobile.jpg" alt="Web 3.0" fill className="sm:hidden object-cover" />
        <Image src="/images/image-web-3-desktop.jpg" alt="Web 3.0" fill className="hidden sm:block object-cover" />
      </div>

      <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
        <div className="sm:w-2/5 pr-14 sm:pr-0 md:pr-2">
          <h1>
            The Bright Future of Web 3.0?
          </h1>
        </div>

        <div className="sm:w-3/5 flex flex-col gap-4 md:justify-between md:px-4">
          <div className="w-full text-secondary">
            <p>
              {`We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?`}
            </p>
          </div>

          <div className="flex w-full">
            <ReadMore url="/" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeadlineArticle