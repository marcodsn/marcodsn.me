"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"

import AppConfig from "@/app/config"

import { ModeToggle } from "../mode-toggle"

export default function Header() {
  const [navbar, setNavbar] = useState(false)
  const router = useRouter()

  const handleClick = async () => {
    setNavbar(false)
  }

  useEffect(() => {
    if (navbar) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [navbar])

  const isActive = (href: string) => {
    // return router.pathname === href ? "text-accent-foreground" : ""
    return router.pathname === href ? "" : ""  // Disabled
  }

  return (
    <nav className="select-none bg-background">
      <div className="flex justify-between">
        <Link href="/" onClick={handleClick} className="flex items-center focus:outline-accent-foreground">
          <h1 className="text- font-bold ">{AppConfig.brandName}</h1>
        </Link>
        <div className="flex gap-4">
          <ul className="flex items-center space-x-4 text-sm text-muted-foreground">
            <li className={`hover:underline ${isActive('/')}`}>
              <Link href="/" onClick={handleClick} className="focus:outline-accent-foreground">
                Home
              </Link>
            </li>
            <li className={`hover:underline ${isActive('/posts')}`}>
              <Link href="/posts" onClick={handleClick} className="focus:outline-accent-foreground">
                Posts
              </Link>
            </li>
          </ul>
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}