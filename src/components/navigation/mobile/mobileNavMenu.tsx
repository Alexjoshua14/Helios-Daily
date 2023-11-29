'use client'

import { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from '@/components/ui/sheet'

interface MobileNavMenuProps {

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

const MobileNavMenu: FC<MobileNavMenuProps> = ({ }) => {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="h-full page-gutter-x">
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
  )
}

export default MobileNavMenu