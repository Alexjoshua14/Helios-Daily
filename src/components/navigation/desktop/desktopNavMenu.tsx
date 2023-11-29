'use client'

import { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from '@/components/ui/sheet'

interface MobileNavMenuProps {

}

interface DesktopNavOptionProps {
  href: string
  text: string
  onClick?: () => void
}

const DesktopNavOption: FC<DesktopNavOptionProps> = ({ href, text, onClick }) => (
  <Link href={href} className="w-full h-full text-lg text-secondary/80 font-light antialiased" onClick={onClick}>
    {text}
  </Link>
)

const navOptions: { href: string, text: string }[] = [
  { href: '/', text: 'Home' },
  { href: '/', text: 'New' },
  { href: '/', text: 'Popular' },
  { href: '/', text: 'Trending' },
  { href: '/', text: 'Categories' }
]

const MobileNavMenu: FC<MobileNavMenuProps> = ({ }) => {
  const [open, setOpen] = useState(false)

  return (
    <ul className="flex gap-8 page-gutter-x">
      {navOptions.map((option, index) => (
        <li key={`mobile-navigation-${option.text}`}>
          <DesktopNavOption
            href={option.href}
            text={option.text}
            onClick={() => setOpen(false)}
          />
        </li>
      ))}
    </ul>
  )
}

export default MobileNavMenu