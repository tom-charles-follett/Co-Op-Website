"use client"

import Link from "next/link"
import { Facebook, Instagram, Mail } from "lucide-react"

export function Footer() {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* About */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-card-foreground">Industrial Hemp Co-op</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Supporting hemp farmers with resources, funding, and community for sustainable industrial hemp
              cultivation.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-card-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/farm-bills"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={handleLinkClick}
                >
                  USDA Farm Bills
                </Link>
              </li>
              <li>
                <Link
                  href="/products-services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={handleLinkClick}
                >
                  Products & Services
                </Link>
              </li>
              <li>
                <Link
                  href="/meetings"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={handleLinkClick}
                >
                  Monthly Meetings
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-card-foreground">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/blog/phyto-remediation"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={handleLinkClick}
                >
                  Phyto-remediation
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/suppliers"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={handleLinkClick}
                >
                  Seed & Equipment
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/education"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  onClick={handleLinkClick}
                >
                  Education
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-card-foreground">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:info@industrialhempcoop.org"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Industrial Hemp Co-op. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
