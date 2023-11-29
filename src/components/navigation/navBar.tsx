import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import MobileNavBar from './navMenu/mobileNavMenu'
import DesktopNavMenu from './navMenu/desktopNavMenu'

interface NavBarProps {

}

const navOptions: { href: string, text: string }[] = [
  { href: '/', text: 'Home' },
  { href: '/', text: 'New' },
  { href: '/', text: 'Popular' },
  { href: '/', text: 'Trending' },
  { href: '/', text: 'Categories' }
]

const NavBar: FC<NavBarProps> = ({ }) => {
  return (
    <nav className="z-40 fixed top-0 left-0 w-full nav-height page-gutter-l flex items-center justify-between bg-gradient-to-t from-white/20 to-white backdrop-blur-xl">
      <Link href="/">
        <h1 className="font-serif tracking-tighter">
          H.
        </h1>
      </Link>
      <div className="md:hidden">
        <MobileNavBar navOptions={navOptions} />
      </div>
      <div className="h-full hidden md:flex items-center justify-center">
        <DesktopNavMenu navOptions={navOptions} />
      </div>
    </nav>
  )
}

export default NavBar