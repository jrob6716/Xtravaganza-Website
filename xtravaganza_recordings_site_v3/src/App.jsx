import { motion } from 'framer-motion'
import LogoEye from './components/LogoEye.jsx'
import { artists, featuredReleases } from './data/content.js'

function SectionTitle({ children }) {
  return (
    <div className="flex items-center gap-4">
      <div className="hud-line h-[1px] flex-1 opacity-50" />
      <h3 className="text-xl tracking-[0.25em] uppercase text-white/90">{children}</h3>
      <div className="hud-line h-[1px] flex-1 opacity-50" />
    </div>
  )
}

function Button({ children }) {
  return (
    <button className="group relative inline-flex items-center gap-2 rounded-md px-5 py-3 text-xs tracking-[0.22em] uppercase text-white/90 shadow-hud">
      <span className="absolute inset-0 rounded-md border border-frost-400/25 group-hover:border-frost-400/45 transition" />
      <span className="absolute inset-0 rounded-md bg-gradient-to-b from-white/5 to-transparent opacity-60" />
      <span className="absolute -inset-px rounded-md blur-md bg-frost-500/15 opacity-0 group-hover:opacity-100 transition" />
      <span className="relative">{children}</span>
      <span className="relative text-frost-200/80">›</span>
    </button>
  )
}

function ReleaseCard({ item, variant }) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-ink-900/65 shadow-card">
      <div className="absolute inset-0 opacity-70 bg-[radial-gradient(600px_320px_at_60%_35%,rgba(44,200,255,.20),transparent_60%)]" />
      <div className="absolute inset-0 opacity-20 bg-hud-grid [background-size:42px_42px]" />
      <div className="absolute inset-0 opacity-[0.12] bg-scanlines" />

      {/* Artwork placeholder */}
      <div className="relative aspect-[16/9]">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
        <div className="absolute inset-0 glitch-bars mix-blend-overlay" />
        <div className="absolute inset-0">
          {variant === 'eye' ? (
            <div className="h-full w-full flex items-center justify-center opacity-90">
              <div className="w-[72%] h-[72%] rounded-full border border-white/10 shadow-hud bg-[radial-gradient(circle_at_50%_45%,rgba(255,255,255,.18),rgba(0,0,0,0)_55%)]" />
            </div>
          ) : (
            <div className="h-full w-full">
              <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-frost-200/0 via-frost-200/70 to-frost-200/0 blur-[0.2px]" />
              <div className="absolute left-1/2 top-[18%] h-[64%] w-[1px] -translate-x-1/2 bg-frost-50/55" />
              <div className="absolute inset-0 bg-[radial-gradient(500px_220px_at_50%_55%,rgba(44,200,255,.18),transparent_60%)]" />
            </div>
          )}
        </div>
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-950/95 to-transparent" />
      </div>

      <div className="relative p-6">
        <div className="flex items-baseline justify-between gap-4">
          <div>
            <div className="text-sm font-semibold tracking-[0.18em] uppercase text-white/90">{item.artist}</div>
            <div className="mt-1 text-xs tracking-[0.22em] uppercase text-white/60">{item.title}</div>
          </div>
          <div className="text-xs tracking-[0.35em] text-frost-200/70">{item.year}</div>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen text-white">
      {/* Background like the mock: deep navy + circuit + HUD */}
      <div className="fixed inset-0 -z-10 circuit">
        <div className="absolute inset-0 bg-vignette opacity-80" />
        <div className="absolute inset-0 bg-hud-grid opacity-[0.10] [background-size:44px_44px]" />
        <div className="absolute inset-0 bg-scanlines opacity-[0.12]" />
        <div className="absolute inset-0 animate-drift opacity-[0.06] bg-[linear-gradient(90deg,transparent,rgba(130,235,255,.8),transparent)]" />
      </div>

      {/* Top navigation (minimal) */}
      <header className="mx-auto max-w-6xl px-6 pt-8">
        <div className="flex items-center justify-between">
          <div className="text-xs tracking-[0.35em] text-white/75">XTRAVAGANZA</div>
          <nav className="hidden md:flex items-center gap-10 text-xs tracking-[0.28em] text-white/60">
            <a className="hover:text-white/90 transition" href="#releases">RELEASES</a>
            <a className="hover:text-white/90 transition" href="#artists">ARTISTS</a>
            <a className="hover:text-white/90 transition" href="#about">ABOUT</a>
            <a className="hover:text-white/90 transition" href="#contact">CONTACT</a>
          </nav>
        </div>
      </header>

      {/* HERO panel (matches mock layout) */}
      <main className="mx-auto max-w-6xl px-6">
        <section className="mt-10 rounded-2xl border border-frost-400/15 bg-ink-950/55 shadow-hud overflow-hidden">
          <div className="relative px-6 py-14 md:px-12 md:py-16">
            <div className="absolute inset-0 opacity-25 bg-hud-grid [background-size:52px_52px]" />
            <div className="absolute inset-0 opacity-[0.08] bg-scanlines" />
            <div className="absolute inset-x-0 top-0 h-[1px] hud-line" />
            <div className="absolute inset-x-0 bottom-0 h-[1px] hud-line" />

            <div className="relative text-center">
              <div className="mx-auto">
                <LogoEye />
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="mt-6"
              >
                <div className="text-4xl md:text-5xl font-semibold tracking-[0.22em] text-crt">XTRAVAGANZA</div>
                <div className="mt-2 text-sm tracking-[0.50em] text-white/70">RECORDINGS</div>
              </motion.div>

              <div className="mt-10 mx-auto max-w-2xl">
                <div className="text-lg md:text-xl tracking-[0.25em] uppercase text-white/90">
                  THE FUTURE OF ELECTRONIC MUSIC
                </div>
                <p className="mt-4 text-sm leading-7 text-white/60">
                  Electronic music built for tomorrow — crisp, minimal, and relentlessly forward.
                  A home for progressive sounds, precision engineering, and late-night energy.
                </p>

                <div className="mt-8 flex items-center justify-center">
                  <Button>VIEW ALL RELEASES</Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* NEW RELEASES */}
        <section id="releases" className="mt-14">
          <SectionTitle>NEW RELEASES</SectionTitle>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {featuredReleases.map((r) => (
              <ReleaseCard key={r.artist + r.title} item={r} variant={r.accent} />
            ))}
          </div>
          <div className="mt-8">
            <Button>VIEW ALL RELEASES</Button>
          </div>
        </section>

        {/* ARTISTS */}
        <section id="artists" className="mt-14 pb-20">
          <SectionTitle>ARTISTS</SectionTitle>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {artists.map((a) => (
              <div key={a.name} className="relative overflow-hidden rounded-xl bg-ink-900/60 shadow-card">
                <div className="absolute inset-0 opacity-20 bg-hud-grid [background-size:44px_44px]" />
                <div className="absolute inset-0 opacity-[0.10] bg-scanlines" />
                <div className="aspect-[3/4]">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent" />
                  <div className="absolute inset-0 bg-[radial-gradient(520px_320px_at_30%_40%,rgba(44,200,255,.14),transparent_60%)]" />
                  {/* Portrait placeholder */}
                  <div className="absolute inset-6 rounded-xl border border-white/10 bg-gradient-to-br from-white/8 to-transparent" />
                </div>
                <div className="relative px-5 py-4">
                  <div className="text-xs tracking-[0.26em] uppercase text-white/85">{a.name}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Button>VIEW ALL ARTISTS</Button>
          </div>
        </section>

        {/* Minimal footer sections (kept for completeness) */}
        <section id="about" className="pb-16">
          <SectionTitle>ABOUT</SectionTitle>
          <div className="mt-6 text-sm text-white/60 leading-7 max-w-3xl">
            XTRAVAGANZA Recordings is a forward-facing electronic label focused on precision sound design, clean aesthetics,
            and late-night energy. Replace this copy with your story.
          </div>
        </section>

        <section id="contact" className="pb-24">
          <SectionTitle>CONTACT</SectionTitle>
          <div className="mt-6 text-sm text-white/60 leading-7">
            Booking / demos: <span className="text-frost-200/80">info@xtravaganzarecordings.com</span>
          </div>
        </section>
      </main>
    </div>
  )
}
