import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import releases from '../data/discogsReleases.json'
import fallbackArtwork from '../assets/round-eye-logo.png'

const PAGE_SIZE = 20
const formatTabs = ['ALL', 'DIGITAL', 'VINYL', 'CD', 'OTHER']
const localArtworkBase = `${import.meta.env.BASE_URL}release-artwork/`
const localArtworkRules = [
  ['everyday 2002', 'everyday-2002.jpg'],
  ['amazon chant', 'amazon-chant.jpg'],
  ['blood is pumpin', 'blood-is-pumpin.jpg'],
  ['destination sunshine', 'destination-sunshine.jpg'],
  ['dream universe', 'dream-universe.jpg'],
  ['discobug', 'discobug-97.jpg'],
  ['el nino', 'el-nino.jpg'],
  ['epic monolith', 'epic-monolith.jpg'],
  ['for a lifetime', 'for-a-lifetime.jpg'],
  ['hard hop superstars', 'hard-hop-superstars.jpg'],
  ['holding on to nothing', 'holding-onto-nothing.jpg'],
  ['hudson street', 'hudson-street.jpg'],
  ['just cant get enough', 'just-cant-get-enough.jpg'],
  ['keep doin it', 'keep-doin-it.jpg'],
  ['lesperanza', 'lesperanza.jpg'],
  ['love will come', 'love-will-come.jpg'],
  ['operation blade', 'operation-blade.jpg'],
  ['rock da funky beats', 'rock-da-funky-beats.jpg'],
  ['too many mcs', 'too-many-mcs.jpg'],
  ['you put me in heaven with your touch', 'you-put-me-in-heaven-with-your-touch.jpg'],
  ['calinda', 'calinda.jpg'],
  ['embrace', 'embrace.jpg'],
  ['everyday', 'everyday.jpg']
]

function normalizeTitle(title = '') {
  return title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/gi, ' ')
    .trim()
    .toLowerCase()
}

function getReleaseArtwork(release) {
  const title = normalizeTitle(release.title)
  const localMatch = localArtworkRules.find(([phrase]) => title.includes(phrase))
  return localMatch ? `${localArtworkBase}${localMatch[1]}` : release.image || fallbackArtwork
}

function getFormatGroup(format = '') {
  const normalized = (format || '').toLowerCase()

  if (normalized.includes('file')) return 'DIGITAL'
  if (/12"|10"|7"|\blp\b|vinyl/.test(normalized)) return 'VINYL'
  if (normalized.includes('cd')) return 'CD'
  return 'OTHER'
}

function displayYear(year) {
  return year > 0 ? year : '—'
}

export default function Releases() {
  const [activeFormat, setActiveFormat] = useState('ALL')
  const [query, setQuery] = useState('')
  const [sortOrder, setSortOrder] = useState('newest')
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)

  const filteredReleases = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase()
    const matches = releases.filter((release) => {
      const matchesFormat = activeFormat === 'ALL' || getFormatGroup(release.format) === activeFormat
      const searchable = `${release.artist} ${release.title} ${release.catno} ${release.year}`.toLowerCase()
      return matchesFormat && (!normalizedQuery || searchable.includes(normalizedQuery))
    })

    return [...matches].sort((a, b) => {
      const aYear = a.year || (sortOrder === 'newest' ? -1 : 9999)
      const bYear = b.year || (sortOrder === 'newest' ? -1 : 9999)
      return sortOrder === 'newest' ? bYear - aYear || b.id - a.id : aYear - bYear || a.id - b.id
    })
  }, [activeFormat, query, sortOrder])

  useEffect(() => {
    setVisibleCount(PAGE_SIZE)
  }, [activeFormat, query, sortOrder])

  const visibleReleases = filteredReleases.slice(0, visibleCount)
  const remainingCount = filteredReleases.length - visibleReleases.length

  return (
    <>
      <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 pt-8 pb-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-orbitron text-3xl md:text-4xl lg:text-5xl tracking-[0.1em] font-bold text-white mb-4">
            RELEASES
          </h1>
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-3xl">
            Explore the Xtravaganza Recordings catalog, from landmark trance releases to the label&apos;s latest electronic music.
          </p>
          <a
            href="https://www.discogs.com/label/2299-Xtravaganza-Recordings"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-3 font-orbitron text-[10px] tracking-[0.12em] text-frost/70 underline underline-offset-4 hover:text-frost transition-colors"
          >
            {releases.length} RELEASES · VIEW COMPLETE CATALOG ↗
          </a>
        </motion.div>
      </section>

      <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-5 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="space-y-4"
        >
          <div className="flex flex-wrap gap-2 md:gap-3" aria-label="Filter releases by format">
            {formatTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveFormat(tab)}
                aria-pressed={activeFormat === tab}
                className={`px-4 py-2 text-[10px] md:text-xs tracking-[0.15em] font-orbitron transition-all duration-300 border ${
                  activeFormat === tab
                    ? 'border-frost/50 bg-frost/10 text-frost'
                    : 'border-frost/20 bg-transparent text-white/60 hover:border-frost/40 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto] gap-3">
            <label className="relative">
              <span className="sr-only">Search the release catalog</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-frost/60"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>
              <input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Search artist, title, year or catalog number"
                className="w-full pl-11 pr-4 py-3 bg-dark-800/50 border border-frost/20 text-white text-xs font-orbitron tracking-[0.04em] placeholder:text-white/30 focus:border-frost/50 focus:outline-none transition-colors"
              />
            </label>

            <label>
              <span className="sr-only">Sort releases</span>
              <select
                value={sortOrder}
                onChange={(event) => setSortOrder(event.target.value)}
                className="w-full sm:w-auto px-4 py-3 bg-dark-800 border border-frost/20 text-white/70 text-xs font-orbitron tracking-[0.08em] focus:border-frost/50 focus:outline-none transition-colors"
              >
                <option value="newest">NEWEST FIRST</option>
                <option value="oldest">OLDEST FIRST</option>
              </select>
            </label>
          </div>

          <p className="font-orbitron text-[10px] tracking-[0.12em] text-white/40" aria-live="polite">
            SHOWING {visibleReleases.length} OF {filteredReleases.length}
          </p>
        </motion.div>
      </section>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 my-4">
        <div className="tech-line-h" />
      </div>

      <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-8 max-w-6xl mx-auto">
        {visibleReleases.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 md:gap-4">
            {visibleReleases.map((release, idx) => (
              <motion.div
                key={release.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '80px' }}
                transition={{ duration: 0.45, delay: Math.min(idx, 8) * 0.035 }}
                className="album-card bg-dark-800/50 overflow-hidden group block"
              >
                <div className="relative aspect-square bg-gradient-to-br from-dark-700 to-dark-900 overflow-hidden">
                  <img
                    src={getReleaseArtwork(release)}
                    alt={`${release.artist} – ${release.title} cover artwork`}
                    loading="lazy"
                    onError={(event) => {
                      event.currentTarget.onerror = null
                      event.currentTarget.src = fallbackArtwork
                    }}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />

                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 text-[9px] tracking-[0.1em] font-orbitron bg-dark-900/80 border border-frost/40 text-frost backdrop-blur-sm">
                      {getFormatGroup(release.format)}
                    </span>
                  </div>

                </div>

                <div className="p-3 md:p-4">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h2 className="font-orbitron text-xs md:text-sm tracking-[0.06em] font-bold text-white group-hover:text-frost transition-colors">
                        {release.artist}
                      </h2>
                      <p className="text-xs text-white/65 mt-1 leading-snug">
                        {release.title}
                      </p>
                    </div>
                    <span className="font-orbitron text-[10px] text-white/40 shrink-0">
                      {displayYear(release.year)}
                    </span>
                  </div>

                  <div className="mt-3 pt-3 border-t border-frost/10 flex flex-col items-start gap-1 text-[9px] text-white/35">
                    <span className="font-orbitron tracking-[0.08em] truncate" title={release.catno}>
                      {release.catno && release.catno !== 'none' ? release.catno : 'CATALOG NO. N/A'}
                    </span>
                    <span className="truncate w-full" title={release.format}>
                      {release.format}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="py-16 text-center border border-frost/15 bg-dark-800/30">
            <p className="font-orbitron text-sm tracking-[0.12em] text-white/60">NO RELEASES FOUND</p>
            <button
              type="button"
              onClick={() => {
                setQuery('')
                setActiveFormat('ALL')
              }}
              className="mt-5 px-5 py-2 text-[10px] tracking-[0.15em] font-orbitron border border-frost/30 text-frost hover:bg-frost/10 transition-colors"
            >
              CLEAR FILTERS
            </button>
          </div>
        )}
      </section>

      {remainingCount > 0 && (
        <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-8 max-w-6xl mx-auto">
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => count + PAGE_SIZE)}
              className="inline-flex items-center gap-2 px-8 py-3 text-xs tracking-[0.2em] uppercase font-orbitron transition-all duration-300 btn-cyber border border-frost/30 bg-transparent text-white/90 hover:border-frost/50 hover:bg-frost/5"
            >
              {remainingCount <= PAGE_SIZE
                ? `Load Final ${remainingCount} Releases`
                : `Load ${PAGE_SIZE} More Releases`}
            </button>
          </div>
        </section>
      )}

      <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="tech-line-h mb-8" />
          <h2 className="font-orbitron text-xl md:text-2xl tracking-[0.1em] font-semibold text-white mb-4">
            STAY UPDATED
          </h2>
          <p className="text-white/60 text-sm md:text-base mb-6 max-w-xl mx-auto">
            Subscribe to be the first to know about new releases, exclusive content, and upcoming events.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-dark-800/50 border border-frost/20 text-white text-sm font-orbitron tracking-[0.05em] placeholder:text-white/30 focus:border-frost/50 focus:outline-none transition-colors"
            />
            <button className="px-6 py-3 text-xs tracking-[0.2em] uppercase font-orbitron bg-frost/20 border border-frost/40 text-frost hover:bg-frost/30 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </motion.div>
      </section>
    </>
  )
}
