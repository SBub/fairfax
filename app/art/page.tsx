import Link from "next/link"
import { exhibitions, type Exhibition } from "@/lib/exhibitions"

export const metadata = {
  title: "Art — Fairfax Dorn Projects",
}

function ExhibitionCard({ exhibition }: { exhibition: Exhibition }) {
  const dateDisplay = exhibition.dateEnd
    ? `${exhibition.dateStart} — ${exhibition.dateEnd}`
    : exhibition.dateStart

  return (
    <Link href={`/art/${exhibition.slug}`} className="block text-black no-underline">
      {/* Title block */}
      <p className="text-[28px] desk:text-[34px] font-bold leading-[30px] desk:leading-[32px] desk:min-h-[36px] tracking-[0.34px]">
        {exhibition.title}
      </p>
      <p className="text-[28px] desk:text-[34px] font-light leading-[30px] desk:leading-[32px] desk:min-h-[36px] tracking-[0.34px]">
        {exhibition.subtitle}
      </p>

      {/* Mobile: image then dates */}
      <div className="desk:hidden">
        <div className="h-3" />
        <div className="w-full h-[277px] bg-[#d5d0cb]" />
        <div className="h-3" />
        <div className="text-[13px] font-normal leading-[18px]">
          <p>{dateDisplay}</p>
          <p>{exhibition.location}</p>
        </div>
      </div>

      {/* Desktop: image left + content right */}
      <div className="hidden desk:block">
        <div className="h-4" />
        <div className="flex h-[419px] overflow-hidden">
          <div className="w-[335px] shrink-0 bg-[#d5d0cb]" />
          <div className="ml-5 w-[335px] text-[11px] font-normal leading-5">
            <div className="h-[40px] overflow-hidden">
              <p>{dateDisplay}</p>
              <p>{exhibition.location}</p>
            </div>
            <div className="h-4" />
            <p>{exhibition.excerpt}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default function ArtIndexPage() {
  return (
    <div className="pt-16 desk:pt-24">
      <main className="pt-10 desk:pt-14 pb-20 desk:pb-[66px] px-5">
        {/* Intro text — desktop */}
        <p className="hidden desk:block text-[34px] font-normal leading-[40px] tracking-[0.68px] max-w-[880px] mb-12">
          FDP SPECIALIZES IN CURATION AND EXHIBITION, BRINGING EXPERTISE TO A
          DIVERSE RANGE OF TALENT, AND A DEVOTION TO ART AND DESIGN ON BEHALF OF
          OUR CLIENTS. WE REPRESENT ARTIST&apos;S WORK VIA EXHIBITION AND
          COLLABORATION. PLEASE REACH OUT WITH INQUIRIES ON FDP PRACTICE AND ART
          CONSULTING SERVICES. FDP EXHIBITIONS ARE CATALOGUED BELOW.
        </p>

        {/* Intro text — mobile */}
        <p className="desk:hidden text-[26px] font-normal leading-[30px] tracking-[0.48px] mb-8">
          FDP SPECIALIZES IN CURATION AND EXHIBITION, BRINGING EXPERTISE TO A
          DIVERSE RANGE OF TALENT, AND A DEVOTION TO ART AND DESIGN ON BEHALF OF
          OUR CLIENTS.
        </p>

        {/* Section label */}
        <p className="text-[16px] desk:text-[20px] font-normal leading-5 desk:leading-6 tracking-[0.26px] mb-6 desk:mb-8">
          — Previous Exhibitions
        </p>

        {/* Cards grid */}
        <div className="grid grid-cols-1 desk:grid-cols-2 gap-[56px] desk:gap-x-5 desk:gap-y-[56px]">
          {exhibitions.map((exhibition) => (
            <ExhibitionCard key={exhibition.slug} exhibition={exhibition} />
          ))}
        </div>
      </main>
    </div>
  )
}
