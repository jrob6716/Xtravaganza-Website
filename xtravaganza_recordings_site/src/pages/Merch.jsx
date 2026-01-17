import { motion } from 'framer-motion'
import eyeMark from '../assets/eye-mark.png'
import alexGoldCover from '../assets/paul-van-dyk-another-way.png'
import m3ttaCover from '../assets/m3tta-cover.png'
import hoodieImage from '../assets/hoodie.png'
import tshirtImage from '../assets/tshirt.png'

const merchItems = [
  {
    name: 'XTRAVAGANZA HOODIE',
    price: '$65',
    tag: 'NEW',
    description: 'Midnight black hoodie with cyan glow print.',
    image: hoodieImage
  },
  {
    name: 'LIMITED VINYL PRESSING',
    price: '$40',
    tag: 'LIMITED',
    description: '180g vinyl featuring classic XTRAVAGANZA cuts.',
    image: m3ttaCover
  },
  {
    name: 'LOGO TEE',
    price: '$30',
    tag: 'RESTOCKED',
    description: 'Soft cotton tee with front eye-mark and backwordmark.',
    image: tshirtImage
  },
  {
    name: 'GLOW BEANIE',
    price: '$25',
    tag: null,
    description: 'Cuffed beanie with subtle frost embroidery.'
  },
  {
    name: 'POSTER PACK',
    price: '$22',
    tag: null,
    description: 'Set of 3 A2 art prints inspired by our releases.'
  },
  {
    name: 'STICKER SHEET',
    price: '$8',
    tag: null,
    description: 'Holographic stickers with circuit and eye motifs.'
  }
]

export default function Merch() {
  return (
    <>
      {/* Page Header */}
      <section className="relative px-6 md:px-12 lg:px-20 pt-8 pb-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-orbitron text-3xl md:text-4xl lg:text-5xl tracking-[0.1em] font-bold text-white mb-4">
            MERCH STORE
          </h1>
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-3xl">
            Official XTRAVAGANZA apparel, vinyl, and accessories. Crafted with the same attention to detail as our music.
          </p>
        </motion.div>
      </section>

      {/* Horizontal tech line divider */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-12 lg:px-20 my-8">
        <div className="tech-line-h" />
      </div>

      {/* Merch Grid */}
      <section className="relative px-6 md:px-12 lg:px-20 py-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {merchItems.map((item, idx) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="album-card bg-dark-800/50 overflow-hidden group"
            >
              {/* Image or placeholder */}
              <div className="relative aspect-square bg-gradient-to-br from-dark-700 via-dark-800 to-dark-900 overflow-hidden">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 circuit-grid opacity-40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-20 h-20 rounded-full border border-frost/30 flex items-center justify-center text-frost/60 font-orbitron text-[10px] tracking-[0.15em]">
                        PREVIEW
                      </div>
                    </div>
                  </>
                )}
                {item.tag && (
                  <div className="absolute top-3 right-3">
                    <span className="px-2 py-1 text-[9px] tracking-[0.1em] font-orbitron bg-frost/20 border border-frost/40 text-frost">
                      {item.tag}
                    </span>
                  </div>
                )}
              </div>

              {/* Details */}
              <div className="p-4 md:p-5 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-orbitron text-sm md:text-base tracking-[0.1em] font-bold text-white group-hover:text-frost transition-colors">
                    {item.name}
                  </h3>
                  <span className="font-orbitron text-xs text-frost">{item.price}</span>
                </div>
                <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                  {item.description}
                </p>
                <button className="mt-2 inline-flex items-center gap-2 px-4 py-2 text-[10px] tracking-[0.15em] uppercase font-orbitron border border-frost/30 text-white/90 bg-transparent hover:border-frost/50 hover:bg-frost/5 transition-all duration-300">
                  Add to Cart
                  <span>→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
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
            LIMITED RUNS. WORLDWIDE SHIPPING.
          </h2>
          <p className="text-white/60 text-sm md:text-base mb-6 max-w-xl mx-auto">
            Sign up to get notified about drops, restocks, and exclusive bundles.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-dark-800/50 border border-frost/20 text-white text-sm font-orbitron tracking-[0.05em] placeholder:text-white/30 focus:border-frost/50 focus:outline-none transition-colors"
            />
            <button className="px-6 py-3 text-xs tracking-[0.2em] uppercase font-orbitron bg-frost/20 border border-frost/40 text-frost hover:bg-frost/30 transition-all duration-300">
              Notify Me
            </button>
          </div>
        </motion.div>
      </section>
    </>
  )
}
