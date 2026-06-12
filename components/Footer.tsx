export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", height: "100%" }}>
          {/* Left: logo + contact */}
          <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
            <p className="footer-logo">FAIRFAX DORN PROJECTS</p>
            <div className="footer-contact">
              <a
                href="https://www.instagram.com/fairfaxdornprojects"
                target="_blank"
                rel="noopener noreferrer"
                className="instagram"
              >
                @fairfaxdornprojects
              </a>
              <a href="mailto:info@fairfaxdornprojects.com" className="email">
                info@fairfaxdornprojects.com
              </a>
            </div>
          </div>

          {/* Right: legal */}
          <div className="footer-legal" style={{ textAlign: "right" }}>
            <p>PHOTOS CAN BE SHARED WITH CREDIT</p>
            <p>COPYRIGHT 2026 FAIRFAX DORN PROJECTS, LLC</p>
            <p>MADE BY SEA</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
