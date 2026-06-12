"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Header() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const isArt = pathname.startsWith("/art")

  return (
    <>
      <header className="site-header">
        {/* Logo */}
        <Link href="/art" className="header-logo" aria-label="Fairfax Dorn Projects">
          <span>F</span>
          <span>D</span>
          <span>P</span>
        </Link>

        {/* Primary nav */}
        <nav className="nav-primary" aria-label="Primary navigation">
          <Link href="#">INTERIORS</Link>
          <Link href="/art" className={isArt ? "active" : ""} aria-current={isArt ? "page" : undefined}>
            ART
          </Link>
          <Link href="#">FDP X VESTALI</Link>
        </nav>

        {/* Secondary nav */}
        <nav className="nav-secondary" aria-label="Secondary navigation">
          <Link href="#">About</Link>
          <Link href="#">Press</Link>
          <Link href="#">Inquire</Link>
        </nav>

        {/* Hamburger */}
        <button
          className="hamburger-btn"
          aria-label="Open navigation menu"
          onClick={() => setMobileOpen(true)}
        >
          <span />
          <span />
        </button>
      </header>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div className="mobile-nav-overlay" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <button
            className="mobile-nav-close"
            aria-label="Close navigation menu"
            onClick={() => setMobileOpen(false)}
          >
            ×
          </button>
          <nav className="mobile-nav-links" aria-label="Mobile navigation">
            <Link href="#" onClick={() => setMobileOpen(false)}>INTERIORS</Link>
            <Link
              href="/art"
              className={isArt ? "active" : ""}
              onClick={() => setMobileOpen(false)}
            >
              ART
            </Link>
            <Link href="#" onClick={() => setMobileOpen(false)}>FDP X VESTALI</Link>
            <Link href="#" onClick={() => setMobileOpen(false)}>About</Link>
            <Link href="#" onClick={() => setMobileOpen(false)}>Press</Link>
            <Link href="#" onClick={() => setMobileOpen(false)}>Inquire</Link>
          </nav>
        </div>
      )}
    </>
  )
}
