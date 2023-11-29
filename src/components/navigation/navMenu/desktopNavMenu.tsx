'use client'

import { FC, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetHeader, SheetTrigger } from '@/components/ui/sheet'
import NavOption from './navOption'

interface DesktopNavMenuProps {
  navOptions: { href: string, text: string }[]
}

/**
 * Desktop navigation menu
 * Displays the navigation options as a horizontal list
 * 
 * @param navOptions navigation options to display with href and text
 */
const DesktopNavMenu: FC<DesktopNavMenuProps> = ({ navOptions }) => {
  const [open, setOpen] = useState(false)

  return (
    <ul className="h-full flex items-center justify-center gap-3 page-gutter-x">
      {navOptions.map((option, index) => (
        <li key={`mobile-navigation-${option.text}`} className="h-full ">
          <NavOption
            href={option.href}
            text={option.text}
            onClick={() => setOpen(false)}
          />
        </li>
      ))}
    </ul>
  )
}

export default DesktopNavMenu