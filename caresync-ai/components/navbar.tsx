"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"  // Assuming this is a utility for classnames
import { Button } from "@/components/ui/button"

export function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Analyze Report", href: "/analyze" },
    { name: "Talk to MindMate", href: "/mindmate" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <nav className="border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo and Home Link */}
        <Link href="/" className="flex items-center gap-2">
          <div className="rounded-md bg-teal-600 p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-white"
            >
              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
            </svg>
          </div>
          <span className="text-xl font-bold text-teal-600">CareSync AI</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-teal-600",
                pathname === item.href ? "text-teal-600" : "text-muted-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="flex md:hidden">
          <Button variant="ghost" size="icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  )
}
