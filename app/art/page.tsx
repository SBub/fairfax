import Link from "next/link"
import { exhibitions } from "@/lib/exhibitions"

export const metadata = {
  title: "Art — Fairfax Dorn Projects",
}

export default function ArtIndexPage() {
  // Group exhibitions into rows of 2
  const rows: (typeof exhibitions)[] = []
  for (let i = 0; i < exhibitions.length; i += 2) {
    rows.push(exhibitions.slice(i, i + 2))
  }

  return (
    <div className="page-wrap">
      <main className="art-index-main">
        {/* Intro text */}
        <p className="intro-text">
          FDP SPECIALIZES IN CURATION AND EXHIBITION, BRINGING EXPERTISE TO A DIVERSE RANGE OF TALENT,
          AND A DEVOTION TO ART AND DESIGN ON BEHALF OF OUR CLIENTS. WE REPRESENT ARTIST&apos;S WORK VIA
          EXHIBITION AND COLLABORATION. PLEASE REACH OUT WITH INQUIRIES ON FDP PRACTICE AND ART
          CONSULTING SERVICES. FDP EXHIBITIONS ARE CATALOGUED BELOW.
        </p>

        {/* Section label */}
        <p className="section-label">— Previous Exhibitions</p>

        {/* Cards */}
        <div className="cards-grid">
          {rows.map((row, rowIndex) => (
            <div className="cards-row" key={rowIndex}>
              {row.map((exhibition) => (
                <article className="card" key={exhibition.slug}>
                  <Link href={`/art/${exhibition.slug}`}>
                    {/* Title / subtitle */}
                    <div className="card-header">
                      <h2 className="card-title">{exhibition.title}</h2>
                      <p className="card-subtitle">{exhibition.subtitle}</p>
                    </div>

                    {/* Image */}
                    <div className={`card-img-wrap${exhibition.images.length > 0 ? " has-image" : ""}`}>
                      {exhibition.images.length > 0 && (
                        <img
                          src={exhibition.images[0]}
                          alt={`${exhibition.title} — ${exhibition.subtitle}`}
                          loading="lazy"
                        />
                      )}
                    </div>

                    {/* Schedule */}
                    <div className="card-schedule">
                      {exhibition.dates.map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
