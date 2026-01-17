import { motion } from 'framer-motion'

export default function LogoEye() {
  return (
    <div className="relative mx-auto w-[min(520px,92vw)]">
      {/* Eye mark: stylized vector-ish */}
      <motion.svg
        className="w-full h-auto drop-shadow-[0_0_40px_rgba(44,200,255,.10)]"
        viewBox="0 0 900 420"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <defs>
          <linearGradient id="g" x1="0" x2="1">
            <stop offset="0" stopColor="#ffffff" stopOpacity="0.65" />
            <stop offset="0.5" stopColor="#82ebff" stopOpacity="0.18" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0.65" />
          </linearGradient>
          <mask id="bars">
            <rect width="900" height="420" fill="black" />
            {Array.from({ length: 34 }).map((_, i) => (
              <rect
                key={i}
                x={Math.max(0, 40 + (i * 10) + (i % 6) * 3)}
                y={30 + i * 10}
                width={780 - (i % 7) * 22}
                height={4}
                fill="white"
                opacity={i % 5 === 0 ? 0.85 : 0.55}
              />
            ))}
          </mask>
        </defs>

        {/* Glitch bars */}
        <g mask="url(#bars)">
          <path
            d="M60 150c120-110 660-110 780 0"
            fill="none"
            stroke="url(#g)"
            strokeWidth="18"
            strokeLinecap="round"
          />
          <path
            d="M70 280c140 120 620 120 760 0"
            fill="none"
            stroke="url(#g)"
            strokeWidth="18"
            strokeLinecap="round"
            opacity="0.95"
          />
        </g>

        {/* Eye body */}
        <path
          d="M120 210c90-90 570-90 660 0-90 90-570 90-660 0Z"
          fill="#0b1726"
          stroke="rgba(130,235,255,.20)"
          strokeWidth="2"
        />

        {/* Iris */}
        <circle cx="450" cy="210" r="120" fill="#05090f" stroke="rgba(130,235,255,.18)" strokeWidth="2" />
        <circle cx="450" cy="210" r="74" fill="#05090f" stroke="rgba(255,255,255,.25)" strokeWidth="1" />
        {Array.from({ length: 36 }).map((_, i) => {
          const a = (i / 36) * Math.PI * 2
          const r1 = 82
          const r2 = 110
          const x1 = 450 + Math.cos(a) * r1
          const y1 = 210 + Math.sin(a) * r1
          const x2 = 450 + Math.cos(a) * r2
          const y2 = 210 + Math.sin(a) * r2
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(255,255,255,.22)"
              strokeWidth="2"
            />
          )
        })}
        <circle cx="450" cy="210" r="44" fill="#05090f" />
        <path d="M425 185c18-18 50-18 68 0" stroke="rgba(255,255,255,.35)" strokeWidth="10" strokeLinecap="round" />
      </motion.svg>

      {/* Moving shimmer */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.18] animate-shimmer bg-scanlines" />
    </div>
  )
}
