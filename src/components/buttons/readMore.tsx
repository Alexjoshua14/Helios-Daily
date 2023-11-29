import Link from 'next/link'
import { FC } from 'react'

interface ReadMoreProps {
  url: string
}

/**
 * Read more button for articles
 * 
 * @param url link to the article that this button corresponds to
 * @returns 
 */
const ReadMore: FC<ReadMoreProps> = ({ url }) => {
  return (
    <Link href="/" className="px-9 py-3 tracking-[.14em] font-medium bg-soft-red hover:bg-dark-blue text-white transition-colors">
      {`Read more`.toUpperCase()}
    </Link>
  )
}

export default ReadMore