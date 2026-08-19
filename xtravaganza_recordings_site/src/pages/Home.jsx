import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import eyeMark from '../assets/round-eye-logo.png'

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
      <section className="relative pt-6 pb-6 sm:pt-8 sm:pb-8 md:pt-16 md:pb-12 px-4">
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
              className="w-64 sm:w-80 md:w-[32rem] lg:w-[40rem] eye-glow"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Horizontal tech line divider */}
      <div className="relative max-w-4xl mx-auto px-6 sm:px-8 my-8">
        <div className="tech-line-h" />
      </div>

      {/* The Future of Electronic Music Section */}
      <section className="relative px-4 sm:px-6 md:px-12 lg:px-20 py-10 md:py-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-6">
            <h2 className="font-orbitron text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-[0.1em] font-semibold text-white text-center">
              THE PAST, PRESENT AND FUTURE OF ELECTRONIC DANCE MUSIC
            </h2>
          </div>
          
          <div className="text-white/60 text-sm md:text-base leading-relaxed max-w-4xl mb-8 space-y-4 text-center sm:text-left">
            <p>
              Xtravaganza Recordings is a European Electronic Music label founded in 1996 by legendary music producer and entrepreneur Alex Gold.
            </p>
            <p>
              At one time or another in the past 30 years Xtravaganza signings have included some of the greatest names in Dance music today including the likes of Tiësto, Paul Van Dyk, Above &amp; Beyond, Adam K, Chicane, Andy C (Big C) of Groove Armada, David Tort, Chris Lake, Dehasse and Armin Van Buren who started his celebrated career with Xtravaganza in 1997 with a track entitled Blue Fear.
            </p>
            <p>
              Xtravaganza has sold over 15 million units since inception and been involved in 2 UK No 1 hit records. One rather famously with Chicane featuring Bryan Adams in March 2000.
            </p>
            <p>
              Alex Gold and Xtravaganza were instrumental in creating the Ibiza Scene we know today and both Gold and Xtravaganza have held residency at premier world-renowned clubs Privilege and Space In Ibiza.
            </p>
            <p>
              Xtravaganza is famed with a melodic uplifting cosmopolitan sound always accessible and never to distant.
            </p>
          </div>
          
          <CyberButton to="/releases">
            View All Releases
          </CyberButton>
        </motion.div>
      </section>

    </>
  )
}
