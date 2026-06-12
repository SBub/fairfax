export default function Footer() {
  return (
    <footer className="bg-white px-5 pt-[10px] pb-5 desk:h-[370px]">
      {/* Mobile layout */}
      <div className="flex flex-col gap-10 desk:hidden">
        <p className="text-[10px] font-bold leading-[13px] tracking-[1.2px] uppercase">
          FAIRFAX DORN PROJECTS
        </p>
        <div className="flex flex-col gap-[2px] text-[11px] leading-[16px] tracking-[0.55px] uppercase">
          <a
            href="https://www.instagram.com/fairfaxdornprojects"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-black no-underline"
          >
            @fairfaxdornprojects
          </a>
          <a
            href="mailto:info@fairfaxdornprojects.com"
            className="font-normal text-black no-underline"
          >
            info@fairfaxdornprojects.com
          </a>
        </div>
        <div className="flex flex-col text-[11px] leading-[16px] tracking-[0.55px] uppercase font-normal">
          <p>PHOTOS CAN BE SHARED WITH CREDIT</p>
          <p>COPYRIGHT 2026 FAIRFAX DORN PROJECTS, LLC</p>
          <p>MADE BY SEA</p>
        </div>
      </div>

      {/* Desktop layout */}
      <div className="hidden desk:flex desk:justify-between desk:items-start desk:h-full">
        <div className="flex flex-col justify-end gap-12 h-[340px]">
          <p className="text-[10px] font-bold leading-[13px] tracking-[1.2px] uppercase whitespace-nowrap">
            FAIRFAX DORN PROJECTS
          </p>
          <div className="flex flex-col gap-[2px] text-[11px] leading-[16px] tracking-[0.55px] uppercase whitespace-nowrap">
            <a
              href="https://www.instagram.com/fairfaxdornprojects"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-black no-underline"
            >
              @fairfaxdornprojects
            </a>
            <a
              href="mailto:info@fairfaxdornprojects.com"
              className="font-normal text-black no-underline"
            >
              info@fairfaxdornprojects.com
            </a>
          </div>
        </div>
        <div className="flex flex-col items-end justify-end h-[340px] text-[11px] leading-[16px] tracking-[0.55px] uppercase font-normal text-right whitespace-nowrap">
          <p>PHOTOS CAN BE SHARED WITH CREDIT</p>
          <p>COPYRIGHT 2026 FAIRFAX DORN PROJECTS, LLC</p>
          <p>MADE BY SEA</p>
        </div>
      </div>
    </footer>
  )
}
