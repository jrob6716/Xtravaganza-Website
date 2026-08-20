import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { artists } from '../data/content'

export default function Artists() {
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
            ARTISTS
          </h1>
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-3xl">
            Discover the visionary artists behind XTRAVAGANZA Recordings. From legendary pioneers to emerging talents, our roster represents the finest in electronic dance music.
          </p>
        </motion.div>
      </section>

      {/* Horizontal tech line divider */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 my-8">
        <div className="tech-line-h" />
      </div>

      {/* Roster Status */}
      <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
        <div className="border border-frost/30 bg-frost/5 px-6 py-5 text-center">
          <p className="font-orbitron text-sm md:text-base tracking-[0.25em] text-frost">
            COMING SOON
          </p>
          <p className="mt-2 text-xs md:text-sm text-white/50">
            New artist profiles, releases, and roster announcements are on the way.
          </p>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {artists.map((artist, idx) => (
            <motion.div
              key={artist.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="artist-card bg-dark-800/30 overflow-hidden group aspect-square cursor-pointer"
            >
              {/* Artist portrait / placeholder - Full square */}
              <div className="relative w-full h-full bg-gradient-to-b from-dark-700 to-dark-900 overflow-hidden">
                {artist.image ? (
                  <img
                    src={artist.image}
                    alt={`${artist.name} portrait`}
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-90 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-br from-frost/5 to-transparent" />
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(255,255,255,0.1),transparent_60%)]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-3/4 h-3/4 bg-gradient-to-b from-white/10 to-transparent rounded-t-full group-hover:from-white/15 transition-all" />
                    </div>
                  </>
                )}
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-frost/0 group-hover:bg-frost/5 transition-all duration-300" />
                
                {/* Artist Name - Overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-5 text-center bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="font-orbitron text-[11px] sm:text-xs md:text-sm tracking-[0.1em] font-medium text-white group-hover:text-frost transition-colors">
                      {artist.name}
                    </h3>
                  </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
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
            WANT TO JOIN THE ROSTER?
          </h2>
          <p className="text-white/60 text-sm md:text-base mb-6 max-w-xl mx-auto">
            We're always looking for innovative artists pushing the boundaries of electronic music.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs tracking-[0.2em] uppercase font-orbitron transition-all duration-300 btn-cyber border border-frost/30 bg-transparent text-white/90 hover:border-frost/50 hover:bg-frost/5"
          >
            Get In Touch
            <span>→</span>
          </Link>
        </motion.div>
      </section>
    </>
  )
}
