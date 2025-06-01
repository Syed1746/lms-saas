import Image from 'next/image'
import Link from 'next/link'
import NavItems from './NavItems'

const NavBar = () => {
  return (
    <div className='flex justify-between'>
      <nav className='navBar'>
        <Link href="/">
            <div className='flex gap-2.5 items-center cursor-pointer'>
                <Image src="/images/logo.svg" alt='logo' height={46} width={47}/>
            </div>
        </Link>
        <div className='flex items-center gap-8'>
            <NavItems />
            <p>Sign In</p>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
