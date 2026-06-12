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

  if (!exhibition) notFound()

  const imageCount = exhibition.description.length > 0 ? 3 : 2

  return (
    <div className="pt-16 desk:pt-24">
      {/* Detail section */}
      <main className="pb-20 px-5">
        {/* Title block */}
        <div className="pt-6 desk:pt-5">
          <p className="text-[38px] desk:text-[57px] font-bold leading-[40px] desk:leading-[58px] tracking-[0.57px]">
            {exhibition.title}
          </p>
          <p className="text-[38px] desk:text-[57px] font-normal leading-[40px] desk:leading-[58px] tracking-[0.57px]">
            {exhibition.subtitle}
          </p>
          <div className="h-8 desk:h-[50px]" />
        </div>

        {/* Mobile layout */}
        <div className="desk:hidden">
          {/* Meta */}
          <div className="flex flex-col gap-4 text-[13px] font-normal leading-[16px] tracking-[0.32px]">
            <div>
              <p>{exhibition.dateStart}</p>
              {exhibition.dateEnd && <p>– {exhibition.dateEnd}</p>}
            </div>
            <p>{exhibition.location}</p>
            {exhibition.time && <p>{exhibition.time}</p>}
          </div>

          <div className="h-8" />

          {/* Image slider */}
          <div
            className="flex overflow-x-auto gap-2 h-[350px]"
            style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
          >
            {Array.from({ length: imageCount }).map((_, i) => (
              <div
                key={i}
                className="w-[350px] h-[350px] shrink-0 bg-[#d5d0cb]"
                style={{ scrollSnapAlign: "start" }}
              />
            ))}
          </div>

          <div className="h-8" />

          {/* Description */}
          {exhibition.description.length > 0 && (
            <div className="flex flex-col gap-6 text-[13px] font-normal leading-[16px] tracking-[0.32px]">
              {exhibition.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}
        </div>

        {/* Desktop layout */}
        <div className="hidden desk:flex desk:gap-5 desk:items-start">
          {/* Meta column */}
          <div className="w-[216px] shrink-0 flex flex-col gap-4 text-[13px] font-normal leading-[16px] tracking-[0.32px]">
            <div>
              <p>{exhibition.dateStart}</p>
              {exhibition.dateEnd && <p>– {exhibition.dateEnd}</p>}
            </div>
            <p>{exhibition.location}</p>
            {exhibition.time && <p>{exhibition.time}</p>}
          </div>

          {/* Description column */}
          {exhibition.description.length > 0 && (
            <div className="w-[334px] shrink-0 flex flex-col gap-6 text-[13px] font-normal leading-[16px] tracking-[0.32px]">
              {exhibition.description.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          )}

          {/* Images column */}
          <div className="flex-1 flex flex-col gap-5">
            {Array.from({ length: imageCount }).map((_, i) => (
              <div key={i} className="w-full h-[640px] bg-[#d5d0cb]" />
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
