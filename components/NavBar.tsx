import Image from 'next/image'
import Link from 'next/link'
import NavItems from './NavItems'
import {SignInButton, SignedIn, SignedOut, UserButton} from '@clerk/nextjs'

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
            <SignedOut>
            <div className='flex items-center gap-2'>
              <SignInButton>
                <button className='btn-signin'>
                Sign In
                </button>
              </SignInButton>
            </div>
            </SignedOut>
            <SignedIn>
              <UserButton/>
            </SignedIn>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
