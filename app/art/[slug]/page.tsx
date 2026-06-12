import { notFound } from "next/navigation"
import { exhibitions, getExhibition } from "@/lib/exhibitions"
import type { Metadata } from "next"

type Props = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return exhibitions.map((e) => ({ slug: e.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const exhibition = getExhibition(slug)
  if (!exhibition) return { title: "Not Found" }
  return {
    title: `${exhibition.title} — ${exhibition.subtitle} — Fairfax Dorn Projects`,
  }
}

export default async function ArtDetailPage({ params }: Props) {
  const { slug } = await params
  const exhibition = getExhibition(slug)

  if (!exhibition) {
    notFound()
  }

  return (
    <div className="page-wrap">
      <main className="detail-section">
        {/* Sticky title block */}
        <div className="detail-title-block">
          <h1 className="detail-h1">{exhibition.title}</h1>
          <p className="detail-h2">{exhibition.subtitle}</p>
        </div>

        {/* Detail grid */}
        <div className="detail-grid">
          {/* Meta column */}
          <div className="detail-col-meta">
            {exhibition.dates.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
            {exhibition.time && <p>{exhibition.time}</p>}
          </div>

          {/* Description column — desktop shows here, mobile shows below images */}
          <div className="detail-col-desc detail-desc-desktop">
            {exhibition.description.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Images column */}
          <div className="detail-col-images">
            {/* Mobile: horizontal scroll slider */}
            <div className="detail-image-slider">
              {exhibition.images.length > 0 ? (
                exhibition.images.map((src, i) => (
                  <div className="detail-image-wrap" key={i}>
                    <img
                      src={src}
                      alt={`${exhibition.title} — ${exhibition.subtitle}, image ${i + 1}`}
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                  </div>
                ))
              ) : (
                <>
                  <div className="detail-image-wrap" style={{ height: "640px" }} />
                  <div className="detail-image-wrap" style={{ height: "640px" }} />
                </>
              )}
            </div>
          </div>
        </div>

        {/* Description — mobile only, shown below images */}
        <div className="detail-col-desc detail-desc-mobile" style={{ marginTop: "32px" }}>
          {exhibition.description.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </main>
    </div>
  )
}
