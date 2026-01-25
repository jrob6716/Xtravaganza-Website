import { motion } from 'framer-motion'

const mixes = [
  {
    title: 'Xtravaganza Mix Show 006 — Alex Gold',
    embed: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/alexgold-xtravaganza/xtravaganza-mix-show-006-alex-gold&color=%2300d6ff&inverse=false&auto_play=false&show_user=true'
  },
  {
    title: 'Xtravaganza Mix Show 005 — Guest: M3TTA',
    embed: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/alexgold-xtravaganza/xtravaganza-mix-show-005-guest-m3tta&color=%2300d6ff&inverse=false&auto_play=false&show_user=true'
  },
  {
    title: 'Xtravaganza Mix Show 004 — Alex Gold',
    embed: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/alexgold-xtravaganza/xtravaganza-mix-show-004-alex-gold&color=%2300d6ff&inverse=false&auto_play=false&show_user=true'
  },
  {
    title: 'Xtravaganza Mix Show 003 — Alex Gold',
    embed: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/alexgold-xtravaganza/xtravaganza-mix-show-003-alex-gold&color=%2300d6ff&inverse=false&auto_play=false&show_user=true'
  },
  {
    title: 'Xtravaganza Mix Show 002 — Alex Gold',
    embed: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/alexgold-xtravaganza/xtravaganza-mix-show-002-alex-gold&color=%2300d6ff&inverse=false&auto_play=false&show_user=true'
  },
  {
    title: 'Xtravaganza Mix Show 001 — Alex Gold',
    embed: 'https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/alexgold-xtravaganza/xtravaganza-mix-show-001-alex-gold&color=%2300d6ff&inverse=false&auto_play=false&show_user=true'
  }
]

export default function Mix() {
  return (
    <>
      {/* Page Header */}
      <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 pt-8 pb-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-orbitron text-3xl md:text-4xl lg:text-5xl tracking-[0.1em] font-bold text-white mb-4">
            THE XTRAVAGANZA MIX
          </h1>
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-3xl">
            Recent podcast episodes direct from our SoundCloud. Press play and stay tuned for the latest from XTRAVAGANZA.
          </p>
        </motion.div>
      </section>

      {/* Horizontal tech line divider */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 my-8">
        <div className="tech-line-h" />
      </div>

      {/* Mix Embeds */}
      <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 pb-12 max-w-6xl mx-auto space-y-6 md:space-y-8">
        {mixes.map((mix, idx) => (
          <motion.div
            key={mix.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-dark-800/40 border border-frost/20 p-4 md:p-6"
          >
            <h3 className="font-orbitron text-sm md:text-base tracking-[0.1em] font-semibold text-white mb-3">
              {mix.title}
            </h3>
            <div className="relative pb-[60%] sm:pb-[62%] md:pb-[166px] lg:pb-[140px]">
              <iframe
                title={mix.title}
                className="absolute inset-0 w-full h-full"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src={mix.embed}
              />
            </div>
          </motion.div>
        ))}
      </section>
    </>
  )
}
