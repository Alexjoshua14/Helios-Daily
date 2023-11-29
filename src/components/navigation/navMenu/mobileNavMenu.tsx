'use client'

import { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import NavOption from './navOption'

interface MobileNavMenuProps {
  navOptions: { href: string, text: string }[]
}

/**
 * Mobile navigation menu
 * Displays a menu with the navigation options as a side dialog
 * 
 * @param navOptions navigation options to display with href and text
 */
const MobileNavMenu: FC<MobileNavMenuProps> = ({ navOptions }) => {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="h-full page-gutter-x">
        <Image src="/images/icon-menu.svg" alt="Menu" width="36" height="36" />
      </SheetTrigger>
      <SheetContent className="pt-40 bg-primary/20 backdrop-blur-xl" onOpenAutoFocus={e => e.preventDefault()} onCloseAutoFocus={e => e.preventDefault()}>
        <ul className="flex flex-col gap-8">
          {navOptions.map((option, index) => (
            <li key={`mobile-navigation-${option.text}`}>
              <NavOption
                href={option.href}
                text={option.text}
                onClick={() => setOpen(false)}
              />
            </li>
          ))}
        </ul>
      </SheetContent>
    </Sheet>
  )
}

export default MobileNavMenu