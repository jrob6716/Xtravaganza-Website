import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import eyeMark from '../assets/round-eye-logo.png'

// Circuit line decorations component
function CircuitLines({ side = 'left', className = '' }) {
  return (
    <svg
      className={`absolute ${side === 'left' ? 'left-4 md:left-8' : 'right-4 md:right-8'} ${className}`}
      width="60"
      height="300"
      viewBox="0 0 60 300"
      fill="none"
    >
      <line x1={side === 'left' ? '50' : '10'} y1="0" x2={side === 'left' ? '50' : '10'} y2="300" stroke="rgba(127,220,255,0.2)" strokeWidth="1" />
      <line x1={side === 'left' ? '20' : '10'} y1="50" x2={side === 'left' ? '50' : '40'} y2="50" stroke="rgba(127,220,255,0.2)" strokeWidth="1" />
      <line x1={side === 'left' ? '30' : '10'} y1="120" x2={side === 'left' ? '50' : '30'} y2="120" stroke="rgba(127,220,255,0.2)" strokeWidth="1" />
      <line x1={side === 'left' ? '10' : '10'} y1="200" x2={side === 'left' ? '50' : '50'} y2="200" stroke="rgba(127,220,255,0.2)" strokeWidth="1" />
      <circle cx={side === 'left' ? '20' : '40'} cy="50" r="3" fill="rgba(127,220,255,0.3)" />
      <circle cx={side === 'left' ? '30' : '30'} cy="120" r="2" fill="rgba(127,220,255,0.2)" />
      <circle cx={side === 'left' ? '10' : '50'} cy="200" r="4" fill="rgba(127,220,255,0.25)" />
      <circle cx={side === 'left' ? '50' : '10'} cy="260" r="2" fill="rgba(127,220,255,0.2)" />
    </svg>
  )
}

// Navigation component
function Navigation() {
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  
  const navItems = [
    { path: '/', label: 'HOME' },
    { path: '/releases', label: 'RELEASES' },
    { path: '/artists', label: 'ARTISTS' },
    { path: '/merch', label: 'MERCH STORE' },
    { path: '/mix', label: 'THE XTRAVAGANZA MIX' },
    { path: '/about', label: 'ABOUT' },
    { path: '/contact', label: 'CONTACT' },
  ]
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-900/90 backdrop-blur-sm border-b border-frost/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="flex items-center justify-between gap-3 h-14 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <img src={eyeMark} alt="XTRAVAGANZA" className="h-8 md:h-10 eye-glow" />
            <span className="font-orbitron text-[11px] sm:text-xs md:text-sm tracking-[0.08em] font-bold text-white hidden sm:block">
              XTRAVAGANZA
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex flex-wrap items-center justify-end gap-4 md:gap-6 lg:gap-8 text-right">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-orbitron text-[10px] md:text-xs tracking-[0.12em] transition-colors whitespace-nowrap ${
                  location.pathname === item.path
                    ? 'text-frost'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden inline-flex items-center justify-center w-10 h-10 border border-frost/30 text-white/80 hover:border-frost/50 hover:text-white transition-colors"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle navigation"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 bg-current transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-5 bg-current transition-opacity ${menuOpen ? 'opacity-0' : 'opacity-80'}`} />
              <span className={`block h-0.5 w-5 bg-current transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="md:hidden bg-dark-900/95 backdrop-blur-sm border-t border-frost/10">
          <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`font-orbitron text-xs tracking-[0.14em] py-2 border-b border-white/5 ${
                  location.pathname === item.path
                    ? 'text-frost'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

// Footer component
function Footer() {
  return (
    <footer className="relative px-6 md:px-12 lg:px-20 py-12 mt-12">
      <div className="max-w-6xl mx-auto">
        <div className="tech-line-h mb-8" />
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs tracking-[0.15em] text-white/40 font-orbitron">
          <div>© {new Date().getFullYear()} XTRAVAGANZA RECORDINGS</div>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-white/70 transition-colors">ABOUT</Link>
            <Link to="/contact" className="hover:text-white/70 transition-colors">CONTACT</Link>
            <a href="#" className="hover:text-white/70 transition-colors">PRIVACY</a>
            <a href="#" className="hover:text-white/70 transition-colors">TERMS</a>
          </div>
        </div>

        <div className="mt-6 text-center font-orbitron text-[9px] tracking-[0.12em] text-white/25">
          Website design exclusively by{' '}
          <a
            href="https://dirtyfreqs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/40 hover:text-frost transition-colors"
          >
            Dirtyfreqs Media
          </a>
        </div>
      </div>
    </footer>
  )
}

export default function Layout({ children }) {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <div className="min-h-screen bg-dark-900 text-white font-body overflow-hidden">
      {/* Background layers */}
      <div
        className={`pointer-events-none fixed inset-0 circuit-atmosphere ${
          isHome ? 'circuit-atmosphere-home' : 'circuit-atmosphere-interior'
        }`}
      >
        {/* Dark gradient base */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-black" />
        
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(127,220,255,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(127,220,255,0.05),transparent_40%)]" />
        
        {/* Circuit grid pattern */}
        <div className="absolute inset-0 circuit-grid" />
        
        {/* Dynamic circuit lines - Horizontal (mixed sizes) */}
        <div className="circuit-h-line-lg" style={{ top: '15%', left: '0', width: '40%' }} />
        <div className="circuit-h-line-dotted" style={{ top: '15%', right: '0', width: '35%', animationDelay: '1s' }} />
        <div className="circuit-h-line-md" style={{ top: '35%', left: '5%', width: '25%', animationDelay: '0.5s' }} />
        <div className="circuit-h-line-dotted-sm" style={{ top: '35%', right: '10%', width: '30%', animationDelay: '2s' }} />
        <div className="circuit-h-line" style={{ top: '55%', left: '0', width: '20%', animationDelay: '1.5s' }} />
        <div className="circuit-h-line-lg" style={{ top: '55%', right: '0', width: '45%', animationDelay: '0.8s' }} />
        <div className="circuit-h-line-dotted" style={{ top: '75%', left: '10%', width: '35%', animationDelay: '2.5s' }} />
        <div className="circuit-h-line-md" style={{ top: '75%', right: '5%', width: '25%', animationDelay: '1.2s' }} />
        <div className="circuit-h-line-md" style={{ top: '90%', left: '0', width: '50%', animationDelay: '3s' }} />
        <div className="circuit-h-line-dotted-sm" style={{ top: '90%', right: '0', width: '40%', animationDelay: '0.3s' }} />
        <div className="circuit-h-line-lg" style={{ top: '45%', left: '15%', width: '20%', animationDelay: '1.8s' }} />
        <div className="circuit-h-line-dotted" style={{ top: '65%', right: '15%', width: '15%', animationDelay: '2.2s' }} />
        
        {/* Dynamic circuit lines - Vertical (mixed sizes) */}
        <div className="circuit-v-line-lg" style={{ left: '10%', top: '0', height: '30%' }} />
        <div className="circuit-v-line-dotted" style={{ left: '10%', bottom: '0', height: '40%', animationDelay: '2s' }} />
        <div className="circuit-v-line-md" style={{ left: '25%', top: '20%', height: '35%', animationDelay: '1s' }} />
        <div className="circuit-v-line-dotted-sm" style={{ left: '25%', bottom: '10%', height: '25%', animationDelay: '3s' }} />
        <div className="circuit-v-line-dotted" style={{ right: '25%', top: '0', height: '45%', animationDelay: '0.5s' }} />
        <div className="circuit-v-line-lg" style={{ right: '25%', bottom: '0', height: '30%', animationDelay: '2.5s' }} />
        <div className="circuit-v-line-md" style={{ right: '10%', top: '15%', height: '40%', animationDelay: '1.5s' }} />
        <div className="circuit-v-line-dotted-sm" style={{ right: '10%', bottom: '5%', height: '35%', animationDelay: '0.8s' }} />
        <div className="circuit-v-line-lg" style={{ left: '40%', top: '10%', height: '25%', animationDelay: '1.3s' }} />
        <div className="circuit-v-line-dotted" style={{ right: '40%', bottom: '15%', height: '20%', animationDelay: '2.8s' }} />
        
        {/* Circuit nodes with pulse animation */}
        <div className="circuit-node circuit-node-pulse" style={{ left: '10%', top: '15%' }} />
        <div className="circuit-node circuit-node-pulse" style={{ left: '10%', top: '30%', animationDelay: '0.5s' }} />
        <div className="circuit-node circuit-node-pulse" style={{ left: '25%', top: '35%', animationDelay: '1s' }} />
        <div className="circuit-node circuit-node-pulse" style={{ right: '25%', top: '35%', animationDelay: '0.8s' }} />
        <div className="circuit-node circuit-node-pulse" style={{ right: '10%', top: '15%', animationDelay: '0.3s' }} />
        <div className="circuit-node circuit-node-pulse" style={{ left: '40%', top: '75%', animationDelay: '2.5s' }} />
        
        {/* Corner circuit decorations */}
        <div className="circuit-corner circuit-corner-tl" style={{ top: '5%', left: '5%' }} />
        <div className="circuit-corner circuit-corner-tr" style={{ top: '5%', right: '5%' }} />
        <div className="circuit-corner circuit-corner-bl" style={{ bottom: '5%', left: '5%' }} />
        <div className="circuit-corner circuit-corner-br" style={{ bottom: '5%', right: '5%' }} />
        
        {/* Scanlines + grain */}
        <div className="absolute inset-0 scanlines grain" />
        
        {/* Floating particles/stars effect */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-px bg-frost/60 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: '0 0 3px rgba(127,220,255,0.5)'
              }}
            />
          ))}
        </div>
      </div>

      {/* Side circuit decorations */}
      <CircuitLines side="left" className="top-1/4 hidden lg:block" />
      <CircuitLines side="right" className="top-1/3 hidden lg:block" />

      {/* Navigation */}
      <Navigation />

      {/* Main content */}
      <div className="relative z-10 pt-16 md:pt-20">
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {children}
        </motion.main>
        
        <Footer />
      </div>
    </div>
  )
}
