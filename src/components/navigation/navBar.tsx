import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import MobileNavBar from './mobile/mobileNavBar'

interface NavBarProps {

}

const NavBar: FC<NavBarProps> = ({ }) => {
  return (
    <MobileNavBar />
  )
}

export default NavBar