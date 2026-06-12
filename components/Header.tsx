"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)
  const isArt = pathname.startsWith("/art")

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white h-16 desk:h-24 flex items-center desk:items-start px-5 pt-5 desk:pt-6 pb-[10px] desk:pb-2 overflow-hidden">
        {/* Logo */}
        <Link
          href="/art"
          className="flex flex-col text-[11px] font-bold leading-[14px] shrink-0 text-black no-underline"
          aria-label="Fairfax Dorn Projects"
        >
          <span>F</span>
          <span>D</span>
          <span>P</span>
        </Link>

        {/* Primary nav — desktop only */}
        <nav
          className="hidden desk:flex flex-1 gap-12 items-center pl-[60px] text-[11px] tracking-[0.55px] uppercase min-w-0"
          aria-label="Primary navigation"
        >
          <Link href="#" className="font-normal text-black no-underline shrink-0">
            INTERIORS
          </Link>
          <Link
            href="/art"
            className={`text-black no-underline shrink-0 ${isArt ? "font-bold" : "font-normal"}`}
          >
            ART
          </Link>
          <Link href="#" className="font-normal text-black no-underline shrink-0">
            FDP X VESTALI
          </Link>
        </nav>

        {/* Secondary nav — desktop only */}
        <nav
          className="hidden desk:flex gap-10 items-center text-[11px] tracking-[0.55px] uppercase font-normal shrink-0"
          aria-label="Secondary navigation"
        >
          <Link href="#" className="text-black no-underline">About</Link>
          <Link href="#" className="text-black no-underline">Press</Link>
          <Link href="#" className="text-black no-underline">Inquire</Link>
        </nav>

        {/* Hamburger — mobile only */}
        <button
          className="desk:hidden ml-auto flex flex-col gap-[5px] bg-transparent border-0 p-0 cursor-pointer"
          aria-label="Open navigation"
          onClick={() => setOpen(true)}
        >
          <span className="block w-5 h-[2px] bg-black" />
          <span className="block w-5 h-[2px] bg-black" />
        </button>
      </header>

      {/* Mobile nav overlay */}
      {open && (
        <div
          className="fixed inset-0 z-[200] bg-white flex flex-col px-5 pt-5 pb-5"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          <button
            className="absolute top-5 right-5 text-2xl leading-none bg-transparent border-0 cursor-pointer text-black"
            aria-label="Close navigation"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
          <nav className="flex flex-col mt-10" aria-label="Mobile navigation">
            {(
              [
                { href: "#", label: "INTERIORS" },
                { href: "/art", label: "ART" },
                { href: "#", label: "FDP X VESTALI" },
                { href: "#", label: "ABOUT" },
                { href: "#", label: "PRESS" },
                { href: "#", label: "INQUIRE" },
              ] as const
            ).map(({ href, label }) => (
              <Link
                key={label}
                href={href}
                className="text-[30px] leading-[45px] font-normal uppercase tracking-[0.55px] text-black no-underline"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
