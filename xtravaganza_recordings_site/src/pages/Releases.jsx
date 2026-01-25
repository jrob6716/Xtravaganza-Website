import { motion } from 'framer-motion'

// Xtravaganza catalog highlights with external cover art
const allReleases = [
  {
    artist: 'CHICANE',
    title: 'SALTWATER',
    year: '1999',
    image: 'https://i.scdn.co/image/ab67616d0000b2739e96c7e0c89eacdd5bdf4b77',
    tag: 'CLASSIC'
  },
  {
    artist: 'VERACOCHA',
    title: 'CARTE BLANCHE',
    year: '1999',
    image: 'https://i.scdn.co/image/ab67616d0000b2739c6c226ae43ee2b8f2b57502',
    tag: 'CLASSIC'
  },
  {
    artist: 'BINARY FINARY',
    title: '1999',
    year: '1998',
    image: 'https://i.scdn.co/image/ab67616d0000b273a2d0bbd10b191ed257a7b82d',
    tag: 'CLASSIC'
  },
  {
    artist: 'AGNELLI & NELSON',
    title: 'EL NIÑO',
    year: '1998',
    image: 'https://i.scdn.co/image/ab67616d0000b273f5cb9184160a95c31a01d10b',
    tag: 'CLASSIC'
  },
  {
    artist: 'PAUL VAN DYK',
    title: 'ANOTHER WAY',
    year: '1998',
    image: 'https://i.scdn.co/image/ab67616d0000b273a25dd1d75bd9050bc0f25bf3',
    tag: 'CLASSIC'
  },
  {
    artist: 'SOLAR STONE',
    title: 'SEVEN CITIES',
    year: '1999',
    image: 'https://i.scdn.co/image/ab67616d0000b273d9b318626a9e3b71c0086511',
    tag: 'CLASSIC'
  },
  {
    artist: 'YORK',
    title: 'ON THE BEACH',
    year: '1999',
    image: 'https://i.scdn.co/image/ab67616d0000b2731b3b7084ff57c4b6213b5636',
    tag: 'CLASSIC'
  },
  {
    artist: 'SIGNUM',
    title: 'WHAT YA GOT 4 ME',
    year: '1997',
    image: 'https://i.scdn.co/image/ab67616d0000b273adb4e49c9fca4814426f05c5',
    tag: 'CLASSIC'
  },
  {
    artist: 'ART OF TRANCE',
    title: 'MADAGASCAR (FERRY CORSTEN REMIX)',
    year: '1999',
    image: 'https://i.scdn.co/image/ab67616d0000b2730b6626900b8f58bd2d96ff47',
    tag: 'REMIX'
  },
  {
    artist: 'MATT DAREY',
    title: 'LIBERATION (FLY LIKE AN ANGEL)',
    year: '1999',
    image: 'https://i.scdn.co/image/ab67616d0000b273c9e7ae3d70e9d68e0cd5a2dd',
    tag: 'CLASSIC'
  },
  {
    artist: 'THREE DRIVES',
    title: 'GREECE 2000',
    year: '1997',
    image: 'https://i.scdn.co/image/ab67616d0000b273f45810cf5ba2d08fa6e200f4',
    tag: 'CLASSIC'
  },
  {
    artist: 'AGNELLI & NELSON',
    title: 'EVERYDAY',
    year: '2000',
    image: 'https://i.scdn.co/image/ab67616d0000b2734d7514514a1cb43f8e81273f',
    tag: 'CLASSIC'
  }
]

// Filter tabs
const filterTabs = ['ALL', 'NEW', 'CLASSIC', 'REMIX', 'REMASTER']

export default function Releases() {
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
            RELEASES
          </h1>
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-3xl">
            Explore our complete catalog of electronic dance music releases. From new singles to timeless classics, discover the sound of XTRAVAGANZA.
          </p>
        </motion.div>
      </section>

      {/* Filter Tabs */}
      <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-wrap gap-2 md:gap-4"
        >
          {filterTabs.map((tab, idx) => (
            <button
              key={tab}
              className={`px-4 py-2 text-[10px] md:text-xs tracking-[0.15em] font-orbitron transition-all duration-300 border ${
                idx === 0
                  ? 'border-frost/50 bg-frost/10 text-frost'
                  : 'border-frost/20 bg-transparent text-white/60 hover:border-frost/40 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </motion.div>
      </section>

      {/* Horizontal tech line divider */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 my-6">
        <div className="tech-line-h" />
      </div>

      {/* Releases Grid */}
      <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {allReleases.map((release, idx) => (
            <motion.div
              key={`${release.artist}-${release.title}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="album-card bg-dark-800/50 overflow-hidden group cursor-pointer"
            >
              {/* Cover Image */}
              <div className="relative aspect-square bg-gradient-to-br from-dark-700 to-dark-900 overflow-hidden">
                <img
                  src={release.image}
                  alt={`${release.artist} - ${release.title}`}
                  className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                />
                
                {/* Tag Badge */}
                {release.tag && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 text-[9px] tracking-[0.1em] font-orbitron bg-frost/20 border border-frost/40 text-frost">
                      {release.tag}
                    </span>
                  </div>
                )}
                
                {/* Play overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 rounded-full bg-frost/20 border border-frost/40 flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-6 h-6 text-frost ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Release Info */}
               <div className="p-4 md:p-5">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-orbitron text-sm md:text-base tracking-[0.1em] font-bold text-white group-hover:text-frost transition-colors">
                      {release.artist}
                    </h3>
                    <p className="font-orbitron text-xs md:text-sm tracking-[0.05em] text-white/60 mt-1">
                      {release.title}
                    </p>
                  </div>
                  <span className="font-orbitron text-xs text-white/40">
                    {release.year}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Load More */}
      <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-8 max-w-6xl mx-auto">
        <div className="flex justify-center">
          <button className="inline-flex items-center gap-2 px-8 py-3 text-xs tracking-[0.2em] uppercase font-orbitron transition-all duration-300 btn-cyber border border-frost/30 bg-transparent text-white/90 hover:border-frost/50 hover:bg-frost/5">
            Load More Releases
            <span>↓</span>
          </button>
        </div>
      </section>

      {/* Newsletter CTA */}
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
