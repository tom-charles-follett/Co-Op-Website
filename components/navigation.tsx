"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/who-we-are", label: "Who We Are" }, // replaced Products & Services with Who We Are
    { href: "/about-hemp", label: "About Hemp" }, // added About Hemp section
    { href: "/farm-bills", label: "USDA Farm Bills" },
    { href: "/funding-aid", label: "Funding & Aid" },
    { href: "/meetings", label: "Monthly Meetings" },
    { href: "/blog", label: "Resources" },
    { href: "/enotrium", label: "Enotrium" },
    { href: "/members", label: "Members" },
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2" onClick={handleLinkClick}>
            <div className="text-xl font-bold text-primary">Industrial Hemp Co-op</div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
            <Link href="/signup" onClick={handleLinkClick}>
              <Button size="sm" className="ml-4">
                Join Us
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-border py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                  onClick={handleLinkClick}
                >
                  {link.label}
                </Link>
              ))}
              <Link href="/signup" onClick={handleLinkClick}>
                <Button size="sm" className="w-full">
                  Join Us
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
