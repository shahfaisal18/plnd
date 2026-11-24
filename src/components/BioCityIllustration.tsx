export function BioCityVisionIllustration() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-linear-to-br from-amber-50 via-emerald-50 to-teal-100 shadow-lg border border-emerald-900/10 aspect-[16/10]">
      <svg
        viewBox="0 0 800 500"
        className="h-full w-full"
        role="img"
        aria-label="Architectural rendering concept of bio-sustainable waterfront buildings with rooftop solar panels and urban greenery"
      >
        <defs>
          <linearGradient id="skyWarm" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fde68a" stopOpacity="0.65" />
            <stop offset="45%" stopColor="#d1fae5" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#a7f3d0" stopOpacity="0.95" />
          </linearGradient>
          <linearGradient id="waterCanal" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#34d399" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#059669" stopOpacity="0.7" />
          </linearGradient>
          <linearGradient id="buildingWarm" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="100%" stopColor="#d97706" stopOpacity="0.35" />
          </linearGradient>
        </defs>

        <rect width="800" height="500" fill="url(#skyWarm)" />

        {/* Warm Sun Glow */}
        <circle cx="190" cy="115" r="78" fill="#fef08a" opacity="0.7" />
        <circle cx="190" cy="115" r="44" fill="#fef9c3" opacity="0.9" />

        {/* Distant Eco Skyline */}
        <g opacity="0.55" fill="#065f46">
          <rect x="40" y="180" width="54" height="140" rx="6" />
          <rect x="108" y="150" width="66" height="170" rx="6" />
          <rect x="190" y="195" width="48" height="125" rx="6" />
          <rect x="575" y="160" width="72" height="160" rx="6" />
          <rect x="662" y="130" width="84" height="190" rx="6" />
        </g>

        {/* Central Waterfront Canal */}
        <polygon points="295,250 505,250 610,500 190,500" fill="url(#waterCanal)" />
        <line x1="340" y1="295" x2="460" y2="295" stroke="#ecfdf5" strokeWidth="2" opacity="0.55" />
        <line x1="315" y1="360" x2="485" y2="360" stroke="#ecfdf5" strokeWidth="2.5" opacity="0.45" />
        <line x1="280" y1="435" x2="520" y2="435" stroke="#ecfdf5" strokeWidth="3" opacity="0.35" />

        {/* Left Terraced Timber & Green Complex */}
        <g>
          <polygon points="40,260 285,220 285,460 40,480" fill="#ffffff" stroke="#065f46" strokeOpacity="0.15" />
          <polygon points="40,260 285,220 285,246 40,286" fill="#059669" />
          <polygon points="55,305 270,275 270,295 55,325" fill="#10b981" opacity="0.85" />
          <polygon points="55,355 270,330 270,348 55,373" fill="#10b981" opacity="0.8" />
          <rect x="72" y="395" width="42" height="58" rx="4" fill="#0f766e" opacity="0.22" />
          <rect x="132" y="390" width="42" height="60" rx="4" fill="#0f766e" opacity="0.22" />
          <rect x="192" y="384" width="42" height="62" rx="4" fill="#0f766e" opacity="0.22" />
          {/* Rooftop Solar Array */}
          <polygon points="65,242 155,226 172,240 82,256" fill="#0f172a" opacity="0.82" />
          <polygon points="178,223 258,210 272,223 192,236" fill="#0f172a" opacity="0.82" />
        </g>

        {/* Right Biophilic Pavilion & Solar Canopy */}
        <g>
          <polygon points="515,220 760,260 760,480 515,460" fill="#f8fafc" stroke="#065f46" strokeOpacity="0.15" />
          <polygon points="515,220 760,260 760,286 515,246" fill="#047857" />
          <polygon points="530,275 745,305 745,325 530,295" fill="#10b981" opacity="0.85" />
          <polygon points="530,330 745,355 745,373 530,348" fill="#10b981" opacity="0.8" />
          <rect x="556" y="384" width="48" height="62" rx="4" fill="#0f766e" opacity="0.2" />
          <rect x="622" y="390" width="48" height="60" rx="4" fill="#0f766e" opacity="0.2" />
          <rect x="688" y="395" width="48" height="58" rx="4" fill="#0f766e" opacity="0.2" />
          <circle cx="565" cy="215" r="24" fill="#10b981" opacity="0.9" />
          <circle cx="605" cy="222" r="20" fill="#059669" opacity="0.9" />
          <circle cx="645" cy="230" r="22" fill="#34d399" opacity="0.9" />
        </g>

        {/* Pedestrian Promenade & Tree Canopy */}
        <g fill="#065f46">
          <circle cx="290" cy="390" r="22" opacity="0.88" />
          <circle cx="272" cy="430" r="26" fill="#059669" opacity="0.92" />
          <circle cx="510" cy="390" r="22" opacity="0.88" />
          <circle cx="528" cy="430" r="26" fill="#059669" opacity="0.92" />
        </g>

        {/* Clean Pedestrian Bridge */}
        <path d="M265 365 Q400 335 535 365 L535 378 Q400 348 265 378 Z" fill="#ffffff" stroke="#065f46" strokeOpacity="0.2" />
      </svg>
    </div>
  );
}

export function MobilityInitiativeIllustration() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl bg-linear-to-br from-emerald-50 via-teal-50 to-amber-50 shadow-lg border border-emerald-900/10 aspect-[16/10]">
      <svg
        viewBox="0 0 800 500"
        className="h-full w-full"
        role="img"
        aria-label="Zero-emission mobility corridor featuring electric light transit, dedicated cycling lanes, and tree-lined walkways"
      >
        <defs>
          <linearGradient id="mobilitySky" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="55%" stopColor="#d1fae5" />
            <stop offset="100%" stopColor="#99f6e4" />
          </linearGradient>
        </defs>

        <rect width="800" height="500" fill="url(#mobilitySky)" />
        <circle cx="400" cy="150" r="95" fill="#fef08a" opacity="0.55" />

        {/* Vertical Garden Towers */}
        <g>
          <rect x="48" y="80" width="128" height="330" rx="14" fill="#ffffff" stroke="#0f766e" strokeOpacity="0.18" />
          <rect x="64" y="110" width="96" height="22" rx="4" fill="#10b981" opacity="0.75" />
          <rect x="64" y="155" width="96" height="22" rx="4" fill="#059669" opacity="0.75" />
          <rect x="64" y="200" width="96" height="22" rx="4" fill="#10b981" opacity="0.75" />
          <rect x="64" y="245" width="96" height="22" rx="4" fill="#059669" opacity="0.75" />

          <rect x="624" y="65" width="128" height="345" rx="14" fill="#ffffff" stroke="#0f766e" strokeOpacity="0.18" />
          <rect x="640" y="95" width="96" height="22" rx="4" fill="#10b981" opacity="0.75" />
          <rect x="640" y="140" width="96" height="22" rx="4" fill="#059669" opacity="0.75" />
          <rect x="640" y="185" width="96" height="22" rx="4" fill="#10b981" opacity="0.75" />
          <rect x="640" y="230" width="96" height="22" rx="4" fill="#059669" opacity="0.75" />
        </g>

        {/* Green Boulevard & Electric Transit Corridor */}
        <polygon points="315,250 485,250 740,500 60,500" fill="#ecfdf5" />
        <polygon points="348,250 452,250 560,500 240,500" fill="#0f766e" opacity="0.14" />

        {/* Dedicated Cycle Track */}
        <polygon points="275,250 322,250 185,500 100,500" fill="#10b981" opacity="0.32" />
        <polygon points="478,250 525,250 700,500 615,500" fill="#10b981" opacity="0.32" />

        {/* Sleek Electric Light Tram */}
        <g>
          <rect x="342" y="275" width="116" height="92" rx="18" fill="#0f172a" />
          <rect x="354" y="289" width="92" height="40" rx="8" fill="#34d399" opacity="0.88" />
          <circle cx="366" cy="347" r="7" fill="#fef08a" />
          <circle cx="434" cy="347" r="7" fill="#fef08a" />
          <rect x="386" y="343" width="28" height="8" rx="4" fill="#10b981" />
        </g>

        {/* Boulevard Canopy Trees */}
        <g fill="#059669">
          <circle cx="220" cy="325" r="34" opacity="0.88" />
          <circle cx="170" cy="385" r="42" fill="#047857" opacity="0.9" />
          <circle cx="580" cy="325" r="34" opacity="0.88" />
          <circle cx="630" cy="385" r="42" fill="#047857" opacity="0.9" />
        </g>
      </svg>
    </div>
  );
}
