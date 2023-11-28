'use client'

import { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from '@/components/ui/sheet'

interface MobileNavBarProps {

}

interface MobileNavOptionProps {
  href: string
  text: string
  onClick?: () => void
}

const MobileNavOption: FC<MobileNavOptionProps> = ({ href, text, onClick }) => (
  <Link href={href} className="w-full h-full text-2xl text-primary font-medium antialiased" onClick={onClick}>
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

const MobileNavBar: FC<MobileNavBarProps> = ({ }) => {
  const [open, setOpen] = useState(false)

  return (
    <nav className="z-40 fixed top-0 left-0 w-full h-16 page-gutter flex items-center justify-between bg-primary/20 backdrop-blur-xl">
      <Link href="/">
        <h1 className="font-serif tracking-tighter">
          H.
        </h1>
      </Link>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger className="h-full pl-4">
          <Image src="/images/icon-menu.svg" alt="Menu" width="36" height="36" />
        </SheetTrigger>
        <SheetContent className="pt-40 bg-primary/20 backdrop-blur-xl">
          <SheetDescription>
            <ul className="flex flex-col gap-8">
              {navOptions.map((option, index) => (
                <li key={`mobile-navigation-${option.text}`}>
                  <MobileNavOption
                    href={option.href}
                    text={option.text}
                    onClick={() => setOpen(false)}
                  />
                </li>
              ))}
            </ul>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </nav>
  )
}

export default MobileNavBar