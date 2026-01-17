import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import eyeMark from '../assets/eye-mark.png'
import alexGoldCover from '../assets/paul-van-dyk-another-way.png'
import m3ttaCover from '../assets/m3tta-cover.png'
import { artists } from '../data/content'

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 }
  }
}

// Button component
function CyberButton({ children, variant = 'outline', href = '#', to, className = '' }) {
  const baseStyles = 'inline-flex items-center gap-2 px-6 py-3 text-xs tracking-[0.2em] uppercase font-orbitron transition-all duration-300 btn-cyber'
  
  const variants = {
    outline: 'border border-frost/30 bg-transparent text-white/90 hover:border-frost/50 hover:bg-frost/5',
    filled: 'bg-frost/20 border border-frost/30 text-white hover:bg-frost/30'
  }
  
  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {children}
      </Link>
    )
  }
  
  return (
    <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </a>
  )
}

export default function Home() {
  return (
    <>
      {/* Hero Section with Eye Logo */}
      <section className="relative pt-8 pb-8 md:pt-16 md:pb-12">
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="flex flex-col items-center"
        >
          {/* Eye Logo with glitch lines */}
          <motion.div variants={fadeIn} className="relative mb-8">
            {/* Left glitch lines */}
            <div className="hidden md:block absolute right-full top-1/2 -translate-y-1/2 mr-6">
              <div className="flex items-center gap-2">
                <div className="w-16 h-px bg-gradient-to-r from-transparent to-frost/30" />
                <div className="w-1.5 h-1.5 rounded-full bg-frost/40" />
                <div className="w-24 h-px bg-frost/20" />
                <div className="w-8 h-px bg-frost/30" />
              </div>
            </div>
            
            {/* Right glitch lines */}
            <div className="hidden md:block absolute left-full top-1/2 -translate-y-1/2 ml-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-px bg-frost/30" />
                <div className="w-24 h-px bg-frost/20" />
                <div className="w-1.5 h-1.5 rounded-full bg-frost/40" />
                <div className="w-16 h-px bg-gradient-to-l from-transparent to-frost/30" />
              </div>
            </div>

            <img
              src={eyeMark}
              alt="XTRAVAGANZA Eye"
              className="w-96 md:w-[32rem] lg:w-[40rem] eye-glow"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Horizontal tech line divider */}
      <div className="relative max-w-4xl mx-auto px-8 my-8">
        <div className="tech-line-h" />
      </div>

      {/* The Future of Electronic Music Section */}
      <section className="relative px-6 md:px-12 lg:px-20 py-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <h2 className="font-orbitron text-xl md:text-2xl lg:text-3xl tracking-[0.1em] font-semibold text-white whitespace-nowrap">
              THE PAST, PRESENT AND FUTURE OF ELECTRONIC DANCE MUSIC
            </h2>
          </div>
          
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-4xl mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exercitation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.
          </p>
          
          <CyberButton to="/releases">
            View All Releases
          </CyberButton>
        </motion.div>
      </section>

      {/* New Releases Section */}
      <section id="releases" className="relative px-6 md:px-12 lg:px-20 py-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-orbitron text-xl md:text-2xl tracking-[0.1em] font-semibold text-white mb-8">
            NEW RELEASES
          </h2>
          
          {/* Release Cards Grid */}
          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mb-8">
            {/* Alex Gold - Baleric Infinity */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="album-card bg-dark-800/50 overflow-hidden group"
            >
              <div className="relative aspect-[4/3] bg-gradient-to-br from-dark-700 to-dark-900 flex items-center justify-center overflow-hidden">
                <img
                  src={alexGoldCover}
                  alt="ALEX GOLD - BALERIC INFINITY"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="font-orbitron text-sm md:text-base tracking-[0.1em] font-bold text-white">
                  ALEX GOLD
                </h3>
                <p className="font-orbitron text-xs md:text-sm tracking-[0.05em] text-white/60 mt-1">
                  BALERIC INFINITY
                </p>
              </div>
            </motion.div>

            {/* M3TTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="album-card bg-dark-800/50 overflow-hidden group"
            >
              <div className="relative aspect-[4/3] bg-gradient-to-b from-dark-700 via-dark-800 to-dark-900 flex items-center justify-center overflow-hidden">
                <img
                  src={m3ttaCover}
                  alt="M3TTA - A BEAUTIFUL LIFE"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="font-orbitron text-sm md:text-base tracking-[0.1em] font-bold text-white">
                  M3TTA
                </h3>
                <p className="font-orbitron text-xs md:text-sm tracking-[0.05em] text-white/60 mt-1">
                  A BEAUTIFUL LIFE
                </p>
              </div>
            </motion.div>
          </div>

          {/* View All Releases Button */}
          <CyberButton to="/releases" className="group">
            View All Releases
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </CyberButton>

          {/* Decorative numbers */}
          <div className="hidden md:block absolute right-12 lg:right-20 top-1/2 font-orbitron text-3xl tracking-[0.2em] text-frost/20">
            2-351
          </div>
        </motion.div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="relative px-6 md:px-12 lg:px-20 py-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-orbitron text-xl md:text-2xl tracking-[0.1em] font-semibold text-white mb-8">
            ARTISTS
          </h2>
          
          {/* Artists Grid - 4 columns */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
            {artists.map((artist, idx) => (
              <motion.div
                key={artist.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="artist-card bg-dark-800/30 overflow-hidden group aspect-square"
              >
                {/* Artist Photo Placeholder - Full square */}
                <div className="relative w-full h-full bg-gradient-to-b from-dark-700 to-dark-900 overflow-hidden">
                  {/* Placeholder gradient pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-frost/5 to-transparent" />
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(255,255,255,0.1),transparent_60%)]" />
                  
                  {/* Silhouette placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 bg-gradient-to-b from-white/10 to-transparent rounded-t-full" />
                  </div>
                  
                  {/* Artist Name - Overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-center bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="font-orbitron text-xs md:text-sm tracking-[0.1em] font-medium text-white">
                      {artist.name}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* View All Artists Button */}
          <div className="flex justify-center">
            <CyberButton to="/artists">
              View All Artists
            </CyberButton>
          </div>
        </motion.div>
      </section>
    </>
  )
}
