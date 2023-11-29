import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import MobileNavBar from './mobile/mobileNavMenu'
import DesktopNavMenu from './desktop/desktopNavMenu'

interface NavBarProps {

}

const NavBar: FC<NavBarProps> = ({ }) => {
  return (
    <nav className="z-40 fixed top-0 left-0 w-full nav-height page-gutter-l flex items-center justify-between bg-gradient-to-t from-white/20 to-white backdrop-blur-xl">
      <Link href="/">
        <h1 className="font-serif tracking-tighter">
          H.
        </h1>
      </Link>
      <div className="md:hidden">
        <MobileNavBar />
      </div>
      <div className="hidden md:block">
        <DesktopNavMenu />
      </div>
    </nav>
  )
}

export default NavBar