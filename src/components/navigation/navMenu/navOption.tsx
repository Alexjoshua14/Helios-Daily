import { FC } from 'react'
import Link from 'next/link'

interface NavOptionProps {
  href: string
  text: string
  onClick?: () => void
}

/**
 * Navigation option
 * 
 * @param href link to navigate to
 * @param text text to display
 * @param onClick optional function to execute when clicked
 * @returns 
 */
const NavOption: FC<NavOptionProps> = ({ href, text, onClick }) => (
  <Link href={href} className="w-full h-full md:px-3 md:grid md:place-content-center text-2xl md:text-lg text-secondary/80 hover:text-soft-orange font-medium md:font-light antialiased transition-colors" onClick={onClick}>
    {text}
  </Link>
)

export default NavOption