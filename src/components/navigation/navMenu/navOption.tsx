import { FC } from 'react'
import Link from 'next/link'

interface NavOptionProps {
  href: string
  text: string
  onClick?: () => void
}

const NavOption: FC<NavOptionProps> = ({ href, text, onClick }) => (
  <Link href={href} className="w-full h-full md:px-3 md:grid md:place-content-center text-2xl md:text-lg text-secondary/80 font-medium md:font-light antialiased" onClick={onClick}>
    {text}
  </Link>
)

export default NavOption