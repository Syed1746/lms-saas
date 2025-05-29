'use client'

import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navLink = [
    {
        label:"Home",
        href:"/"
    },
    {
        label:"Learning Companions",
        href:"/companions"
    },
    {
        label:"My Journey",
        href:"/my-journey"
    }
]
const NavItems = () => {
    const pathname = usePathname()
  return (
    <div>
      <nav className="flex items-center gap-4">
        {navLink.map(({label,href})=>(
            <Link 
            href={href}
            key={label} 
            className={cn(pathname === href && 'text-primary font-semibold')}
            >
                {label}
            </Link>
        
        ))}
      </nav>
    </div>
  )
}

export default NavItems
