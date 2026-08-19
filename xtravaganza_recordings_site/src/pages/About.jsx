import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import eyeMark from '../assets/round-eye-logo.png'

// Timeline events
const timeline = [
  { year: '1997', event: 'XTRAVAGANZA Recordings founded in London' },
  { year: '1999', event: 'Released Binary Finary "1999" - a trance anthem' },
  { year: '2001', event: 'Signed Paul Van Dyk to the label' },
  { year: '2005', event: 'Expanded to international distribution' },
  { year: '2010', event: 'Launched digital-first release strategy' },
  { year: '2020', event: 'Celebrated 100+ chart-topping releases' },
  { year: '2024', event: 'Rebranded with new vision for the future' },
]

// Stats
const stats = [
  { number: '100+', label: 'RELEASES' },
  { number: '50+', label: 'ARTISTS' },
  { number: '25+', label: 'YEARS' },
  { number: '1M+', label: 'STREAMS' },
]

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative px-6 md:px-12 lg:px-20 pt-8 pb-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h1 className="font-orbitron text-3xl md:text-4xl lg:text-5xl tracking-[0.1em] font-bold text-white mb-6">
              ABOUT US
            </h1>
            <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
              XTRAVAGANZA Recordings has been at the forefront of electronic dance music for over two decades. Founded with a vision to push the boundaries of sound and culture, we've become a home for visionary artists and timeless releases.
            </p>
            <p className="text-white/60 text-sm md:text-base leading-relaxed">
              Our mission is simple: discover, nurture, and promote the most innovative electronic music from around the world. From underground gems to chart-topping anthems, XTRAVAGANZA represents the past, present, and future of electronic dance music.
            </p>
          </div>
          
          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <img
                src={eyeMark}
                alt="XTRAVAGANZA Eye"
                className="w-64 md:w-80 eye-glow"
              />
              {/* Decorative circles */}
              <div className="absolute inset-0 border border-frost/20 rounded-full scale-125" />
              <div className="absolute inset-0 border border-frost/10 rounded-full scale-150" />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="relative px-6 md:px-12 lg:px-20 py-12 max-w-6xl mx-auto">
        <div className="tech-line-h mb-12" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="text-center p-6 border border-frost/20 bg-dark-800/30"
            >
              <div className="font-orbitron text-3xl md:text-4xl font-bold text-frost mb-2">
                {stat.number}
              </div>
              <div className="font-orbitron text-[10px] md:text-xs tracking-[0.15em] text-white/60">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="tech-line-h mt-12" />
      </section>

      {/* Our Story / Timeline */}
      <section className="relative px-6 md:px-12 lg:px-20 py-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-orbitron text-xl md:text-2xl tracking-[0.1em] font-semibold text-white mb-8 text-center">
            OUR JOURNEY
          </h2>
          
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-frost/20 transform md:-translate-x-1/2" />
            
            {/* Timeline items */}
            <div className="space-y-8">
              {timeline.map((item, idx) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`relative flex items-center gap-6 ${
                    idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Node */}
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-frost/40 border-2 border-frost transform -translate-x-1/2 z-10" />
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div className="p-4 bg-dark-800/50 border border-frost/20 inline-block">
                      <span className="font-orbitron text-frost text-sm tracking-[0.1em] font-bold">
                        {item.year}
                      </span>
                      <p className="text-white/70 text-sm mt-1">
                        {item.event}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Values Section */}
      <section className="relative px-6 md:px-12 lg:px-20 py-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="tech-line-h mb-12" />
          
          <h2 className="font-orbitron text-xl md:text-2xl tracking-[0.1em] font-semibold text-white mb-8 text-center">
            OUR VALUES
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'INNOVATION',
                description: 'Pushing the boundaries of electronic music, always exploring new sounds and technologies.'
              },
              {
                title: 'AUTHENTICITY',
                description: 'Supporting artists who bring genuine passion and originality to their craft.'
              },
              {
                title: 'COMMUNITY',
                description: 'Building connections between artists, fans, and the global dance music culture.'
              }
            ].map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 bg-dark-800/30 border border-frost/20 text-center"
              >
                <h3 className="font-orbitron text-sm tracking-[0.15em] font-bold text-frost mb-3">
                  {value.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="relative px-6 md:px-12 lg:px-20 py-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="tech-line-h mb-8" />
          <h2 className="font-orbitron text-xl md:text-2xl tracking-[0.1em] font-semibold text-white mb-4">
            JOIN THE MOVEMENT
          </h2>
          <p className="text-white/60 text-sm md:text-base mb-6 max-w-xl mx-auto">
            Whether you're an artist, a fan, or a potential partner, we'd love to hear from you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-xs tracking-[0.2em] uppercase font-orbitron transition-all duration-300 btn-cyber border border-frost/30 bg-transparent text-white/90 hover:border-frost/50 hover:bg-frost/5"
          >
            Contact Us
            <span>→</span>
          </Link>
        </motion.div>
      </section>
    </>
  )
}
