import Link from 'next/link'
import { FC } from 'react'

interface ReadMoreProps {
  url: string
}

const ReadMore: FC<ReadMoreProps> = ({ url }) => {
  return (
    <Link href="/" className="px-9 py-3 tracking-[.14em] font-medium bg-orange-600/80">
      {`Read more`.toUpperCase()}
    </Link>
  )
}

export default ReadMore