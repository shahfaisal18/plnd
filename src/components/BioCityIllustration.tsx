export function BioCityVisionIllustration() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-linear-to-br from-amber-50 via-sky-50 to-cyan-100 shadow-lg border border-[#00adef]/20 aspect-[16/10]">
      <svg
        viewBox="0 0 800 500"
        className="h-full w-full"
        role="img"
        aria-label="Architectural rendering concept of bio-sustainable waterfront buildings with rooftop solar panels and urban greenery"
      >
        <defs>
          <linearGradient id="skyWarm" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde68a" stopOpacity="0.55" />
            <stop offset="45%" stopColor="#e0f2fe" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="waterCanal" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#0082b8" stopOpacity="0.75" />
          </linearGradient>
        </defs>

        <rect width="800" height="500" fill="url(#skyWarm)" />

        {/* Warm Golden Sun Glow */}
        <circle cx="190" cy="115" r="78" fill="#fde047" opacity="0.55" />
        <circle cx="190" cy="115" r="44" fill="#fef9c3" opacity="0.9" />

        {/* Distant Corporate Skyline */}
        <g opacity="0.45" fill="#0c4a6e">
          <rect x="40" y="180" width="54" height="140" rx="6" />
          <rect x="108" y="150" width="66" height="170" rx="6" />
          <rect x="190" y="195" width="48" height="125" rx="6" />
          <rect x="575" y="160" width="72" height="160" rx="6" />
          <rect x="662" y="130" width="84" height="190" rx="6" />
        </g>

        {/* Central Waterfront Canal */}
        <polygon points="295,250 505,250 610,500 190,500" fill="url(#waterCanal)" />
        <line x1="340" y1="295" x2="460" y2="295" stroke="#f0f9ff" strokeWidth="2" opacity="0.6" />
        <line x1="315" y1="360" x2="485" y2="360" stroke="#f0f9ff" strokeWidth="2.5" opacity="0.5" />
        <line x1="280" y1="435" x2="520" y2="435" stroke="#f0f9ff" strokeWidth="3" opacity="0.4" />

        {/* Left Terraced Timber & Glass Complex */}
        <g>
          <polygon points="40,260 285,220 285,460 40,480" fill="#ffffff" stroke="#0082b8" strokeOpacity="0.2" />
          <polygon points="40,260 285,220 285,246 40,286" fill="#0082b8" />
          <polygon points="55,305 270,275 270,295 55,325" fill="#00adef" opacity="0.85" />
          <polygon points="55,355 270,330 270,348 55,373" fill="#00adef" opacity="0.75" />
          <rect x="72" y="395" width="42" height="58" rx="4" fill="#0284c7" opacity="0.2" />
          <rect x="132" y="390" width="42" height="60" rx="4" fill="#0284c7" opacity="0.2" />
          <rect x="192" y="384" width="42" height="62" rx="4" fill="#0284c7" opacity="0.2" />
          <polygon points="65,242 155,226 172,240 82,256" fill="#0f172a" opacity="0.85" />
          <polygon points="178,223 258,210 272,223 192,236" fill="#0f172a" opacity="0.85" />
        </g>

        {/* Right Biophilic Pavilion & Golden Canopy */}
        <g>
          <polygon points="515,220 760,260 760,480 515,460" fill="#f8fafc" stroke="#0082b8" strokeOpacity="0.2" />
          <polygon points="515,220 760,260 760,286 515,246" fill="#0284c7" />
          <polygon points="530,275 745,305 745,325 530,295" fill="#00adef" opacity="0.85" />
          <polygon points="530,330 745,355 745,373 530,348" fill="#00adef" opacity="0.75" />
          <rect x="556" y="384" width="48" height="62" rx="4" fill="#0284c7" opacity="0.18" />
          <rect x="622" y="390" width="48" height="60" rx="4" fill="#0284c7" opacity="0.18" />
          <rect x="688" y="395" width="48" height="58" rx="4" fill="#0284c7" opacity="0.18" />
          <circle cx="565" cy="215" r="24" fill="#f59e0b" opacity="0.85" />
          <circle cx="605" cy="222" r="20" fill="#00adef" opacity="0.85" />
          <circle cx="645" cy="230" r="22" fill="#38bdf8" opacity="0.85" />
        </g>

        {/* Pedestrian Promenade & Tree Canopy */}
        <g>
          <circle cx="290" cy="390" r="22" fill="#0284c7" opacity="0.85" />
          <circle cx="272" cy="430" r="26" fill="#00adef" opacity="0.88" />
          <circle cx="510" cy="390" r="22" fill="#0284c7" opacity="0.85" />
          <circle cx="528" cy="430" r="26" fill="#00adef" opacity="0.88" />
        </g>

        <path d="M265 365 Q400 335 535 365 L535 378 Q400 348 265 378 Z" fill="#ffffff" stroke="#0082b8" strokeOpacity="0.22" />
      </svg>
    </div>
  );
}

export function MobilityInitiativeIllustration() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-linear-to-br from-sky-50 via-cyan-50 to-amber-50 shadow-lg border border-[#00adef]/20 aspect-[16/10]">
      <svg
        viewBox="0 0 800 500"
        className="h-full w-full"
        role="img"
        aria-label="Zero-emission mobility corridor featuring electric light transit, dedicated cycling lanes, and tree-lined walkways"
      >
        <defs>
          <linearGradient id="mobilitySky" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="55%" stopColor="#e0f2fe" />
            <stop offset="100%" stopColor="#bae6fd" />
          </linearGradient>
        </defs>

        <rect width="800" height="500" fill="url(#mobilitySky)" />
        <circle cx="400" cy="150" r="95" fill="#fde047" opacity="0.5" />

        {/* Architectural Towers */}
        <g>
          <rect x="48" y="80" width="128" height="330" rx="14" fill="#ffffff" stroke="#0082b8" strokeOpacity="0.2" />
          <rect x="64" y="110" width="96" height="22" rx="4" fill="#00adef" opacity="0.75" />
          <rect x="64" y="155" width="96" height="22" rx="4" fill="#0284c7" opacity="0.75" />
          <rect x="64" y="200" width="96" height="22" rx="4" fill="#f59e0b" opacity="0.75" />
          <rect x="64" y="245" width="96" height="22" rx="4" fill="#0284c7" opacity="0.75" />

          <rect x="624" y="65" width="128" height="345" rx="14" fill="#ffffff" stroke="#0082b8" strokeOpacity="0.2" />
          <rect x="640" y="95" width="96" height="22" rx="4" fill="#00adef" opacity="0.75" />
          <rect x="640" y="140" width="96" height="22" rx="4" fill="#0284c7" opacity="0.75" />
          <rect x="640" y="185" width="96" height="22" rx="4" fill="#f59e0b" opacity="0.75" />
          <rect x="640" y="230" width="96" height="22" rx="4" fill="#0284c7" opacity="0.75" />
        </g>

        <polygon points="315,250 485,250 740,500 60,500" fill="#f0f9ff" />
        <polygon points="348,250 452,250 560,500 240,500" fill="#0f172a" opacity="0.12" />

        <polygon points="275,250 322,250 185,500 100,500" fill="#00adef" opacity="0.28" />
        <polygon points="478,250 525,250 700,500 615,500" fill="#f59e0b" opacity="0.26" />

        {/* Sleek Electric Light Tram */}
        <g>
          <rect x="342" y="275" width="116" height="92" rx="18" fill="#0f172a" />
          <rect x="354" y="289" width="92" height="40" rx="8" fill="#38bdf8" opacity="0.9" />
          <circle cx="366" cy="347" r="7" fill="#fde047" />
          <circle cx="434" cy="347" r="7" fill="#fde047" />
          <rect x="386" y="343" width="28" height="8" rx="4" fill="#00adef" />
        </g>

        <g>
          <circle cx="220" cy="325" r="34" fill="#00adef" opacity="0.82" />
          <circle cx="170" cy="385" r="42" fill="#0284c7" opacity="0.88" />
          <circle cx="580" cy="325" r="34" fill="#00adef" opacity="0.82" />
          <circle cx="630" cy="385" r="42" fill="#0284c7" opacity="0.88" />
        </g>
      </svg>
    </div>
  );
}
