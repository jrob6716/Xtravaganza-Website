import { motion, useReducedMotion } from 'framer-motion'
import eyeMark from './assets/eye-mark.png'
import { releases, artists } from './data/content'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
}

function GlitchRule({ className = '' }) {
  return (
    <div className={`relative h-px w-full overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-white/10" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(127,220,255,0.8)_50%,transparent_100%)] animate-pulse" />
    </div>
  )
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] tracking-[0.22em] uppercase text-white/80 shadow-[0_0_0_1px_rgba(127,220,255,0.10)]">
      {children}
    </span>
  )
}

function HudCorner({ className = '' }) {
  return (
    <div
      className={
        `pointer-events-none absolute h-10 w-10 border border-white/10 ` +
        `shadow-[0_0_0_1px_rgba(127,220,255,0.10)] ${className}`
      }
    />
  )
}

function GhostButton({ children, href = '#' }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/5 px-4 py-2 text-[12px] tracking-[0.22em] uppercase text-white/80 shadow-[0_0_0_1px_rgba(127,220,255,0.10)] hover:border-white/25 hover:bg-white/10"
    >
      {children}
    </a>
  )
}

export default function App() {
  const reduce = useReducedMotion()

  return (
    <div className="min-h-screen bg-black text-white hud-bg">
      {/* Background overlays */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 hud-traces hud-drift" />
        <div className="absolute inset-0 scanlines grain" />
        <div className="absolute -top-40 left-1/2 h-72 w-[1200px] -translate-x-1/2 rounded-full bg-frost/10 blur-3xl" />
      </div>

      {/* HERO — centered logo like the mock */}
      <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-10 md:px-10 md:pt-12">
        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.03] px-6 py-10 shadow-glow md:px-10 md:py-12">
          {/* HUD frame corners */}
          <HudCorner className="left-6 top-6 border-r-0 border-b-0" />
          <HudCorner className="right-6 top-6 border-l-0 border-b-0" />
          <HudCorner className="left-6 bottom-6 border-r-0 border-t-0" />
          <HudCorner className="right-6 bottom-6 border-l-0 border-t-0" />

          {/* thin top bars */}
          <div className="absolute left-0 top-0 h-px w-full bg-white/10" />
          <div className="absolute left-0 top-12 h-px w-full bg-white/5" />
          <div className="absolute right-10 top-7 h-2 w-40 rounded-sm bg-frost/20 blur-[0.5px]" />

          <motion.div variants={container} initial="hidden" animate="show" className="relative">
            <motion.div variants={item} className="mx-auto flex max-w-3xl flex-col items-center text-center">
              <motion.div
                aria-hidden
                animate={reduce ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="mt-2"
              >
                <img
                  src={eyeMark}
                  alt="XTRAVAGANZA eye mark"
                  className="w-[520px] max-w-full opacity-95 drop-shadow-[0_0_28px_rgba(127,220,255,0.22)]"
                />
              </motion.div>

              <div className="mt-6">
                <div className="text-3xl font-semibold tracking-[0.32em] md:text-5xl">XTRAVAGANZA</div>
                <div className="mt-2 text-[12px] tracking-[0.40em] uppercase text-white/75 md:text-sm">
                  RECORDINGS
                </div>
              </div>

              <div className="mt-10 w-full">
                <GlitchRule className="opacity-60" />
              </div>
            </motion.div>

            {/* Text block like the mock (left aligned) */}
            <motion.div variants={item} className="mt-12 grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:gap-10">
              <div>
                <div className="text-[13px] tracking-[0.22em] uppercase text-white/80">THE FUTURE OF ELECTRONIC MUSIC</div>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/60 md:text-base">
                  A forward-facing imprint for high-definition club music — precision grooves, bold sound design,
                  and visual systems that feel like a signal. (Copy is placeholder; swap with your real label bio.)
                </p>

                <div className="mt-7">
                  <GhostButton href="#releases">VIEW ALL RELEASES</GhostButton>
                </div>
              </div>

              <div className="md:pt-1">
                <div className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3">
                  <div className="text-[11px] tracking-[0.28em] uppercase text-white/55">Signal</div>
                  <div className="mt-3 flex items-center justify-between text-[11px] tracking-[0.26em] uppercase text-white/55">
                    <span>v1.0</span>
                    <span className="text-frost/80">online</span>
                  </div>
                </div>
                <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex flex-wrap gap-3 text-[11px] tracking-[0.22em] uppercase text-white/55">
                    <span>Techno</span>
                    <span>Trance</span>
                    <span>Progressive</span>
                    <span>Minimal</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Releases */}
      <section id="releases" className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="flex items-end justify-between gap-6">
          <div>
            <div className="text-[12px] tracking-[0.34em] uppercase text-white/70">NEW RELEASES</div>
          </div>
          <GhostButton href="#">VIEW ALL RELEASES →</GhostButton>
        </div>

        <GlitchRule className="mt-8" />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {releases.slice(0, 2).map((r, idx) => (
            <motion.div
              key={`${r.title}-${idx}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20% 0px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] p-5 shadow-glow"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(127,220,255,0.18),transparent_45%,rgba(255,255,255,0.06))] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="text-[11px] tracking-[0.28em] uppercase text-white/60">{r.year}</div>
                  <div className="text-[11px] tracking-[0.26em] uppercase text-white/55">{r.tag}</div>
                </div>

                {/* Artwork area (widescreen like the mock) */}
                <div className="relative mt-4 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-white/10">
                  <div
                    className={
                      idx === 0
                        ? "h-full w-full bg-[radial-gradient(circle_at_30%_30%,rgba(127,220,255,0.22),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(0,0,0,0.0))]"
                        : "h-full w-full bg-[radial-gradient(circle_at_55%_30%,rgba(127,220,255,0.28),transparent_50%),radial-gradient(circle_at_60%_65%,rgba(255,255,255,0.12),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0.0))]"
                    }
                  />
                  {idx === 0 && (
                    <img
                      src={eyeMark}
                      alt=""
                      className="pointer-events-none absolute left-[-40px] top-[-40px] w-[520px] opacity-35"
                    />
                  )}
                </div>

                <div className="mt-5">
                  <div className="text-[12px] tracking-[0.26em] uppercase text-white/75">{r.artist}</div>
                  <div className="mt-2 text-lg font-semibold leading-snug text-white">{r.title}</div>
                  <div className="mt-2 text-sm text-white/55">{r.subtitle}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Artists */}
      <section id="artists" className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div>
          <Pill>Artists</Pill>
          <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">Roster</h2>
          <p className="mt-3 text-white/65">Real names can go here — imagery is placeholder for now.</p>
        </div>

        <GlitchRule className="mt-8" />

        <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {artists.slice(0, 4).map((name, idx) => (
            <motion.div
              key={`${name}-${idx}`}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20% 0px' }}
              transition={{ duration: 0.5, delay: idx * 0.04 }}
              className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.04] p-4 shadow-glow"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(127,220,255,0.18),transparent_50%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="aspect-[4/5] w-full overflow-hidden rounded-2xl border border-white/10 bg-black/40">
                  {/* pseudo "portrait" lighting */}
                  <div className="h-full w-full bg-[radial-gradient(circle_at_30%_35%,rgba(255,255,255,0.14),transparent_55%),radial-gradient(circle_at_70%_25%,rgba(127,220,255,0.18),transparent_55%),linear-gradient(180deg,rgba(255,255,255,0.06),rgba(0,0,0,0.0))]" />
                  <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:8px_8px]" />
                </div>
                <div className="mt-4 text-center">
                  <div className="text-[12px] tracking-[0.28em] uppercase text-white/80">{name}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative z-10 mx-auto w-full max-w-6xl px-6 py-16 md:px-10 md:py-20">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12">
          <div>
            <Pill>About</Pill>
            <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">A signal-forward imprint</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              This layout is designed to match the futuristic reference style you approved: minimal typography, high-contrast
              surfaces, scanline texture, and a restrained icy accent.
            </p>
            <p className="mt-4 text-white/70 leading-relaxed">
              Swap in real artist photos, release artwork, and links — everything is wired to stay clean and consistent.
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow">
            <div className="text-[11px] tracking-[0.28em] uppercase text-white/55">Design Notes</div>
            <GlitchRule className="mt-4" />
            <ul className="mt-6 space-y-3 text-sm text-white/70">
              <li>• HUD grid + scanlines + grain (subtle)</li>
              <li>• Frost accent used sparingly for glow states</li>
              <li>• Framer Motion for smooth, modern motion</li>
              <li>• Single-page anchor navigation (GitHub Pages friendly)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-24 pt-6 md:px-10">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow md:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <Pill>Contact</Pill>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-4xl">Let’s build the roster</h2>
              <p className="mt-3 text-white/70">Replace these placeholders with your real submission + social links.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:demo@xtravaganzarecordings.com"
                className="inline-flex items-center rounded-full bg-frost/20 px-5 py-2.5 text-[12px] tracking-[0.22em] uppercase text-white shadow-glow hover:bg-frost/25"
              >
                Email
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-[12px] tracking-[0.22em] uppercase text-white/80 hover:border-white/25 hover:bg-white/10"
              >
                Instagram
              </a>
              <a
                href="#"
                className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-[12px] tracking-[0.22em] uppercase text-white/80 hover:border-white/25 hover:bg-white/10"
              >
                SoundCloud
              </a>
            </div>
          </div>
        </div>

        <footer className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-[11px] tracking-[0.22em] uppercase text-white/50 md:flex-row md:items-center">
          <div>© {new Date().getFullYear()} XTRAVAGANZA Recordings</div>
          <div className="flex gap-6">
            <span className="text-white/40">Built for GitHub Pages</span>
            <span className="text-white/40">v1.0</span>
          </div>
        </footer>
      </section>
    </div>
  )
}
