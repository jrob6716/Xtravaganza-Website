import { motion } from 'framer-motion'
import { useState } from 'react'

// Contact info
const contactInfo = [
  {
    icon: '📍',
    title: 'ADDRESS',
    lines: ['123 Electronic Ave', 'London, EC1A 1BB', 'United Kingdom']
  },
  {
    icon: '📧',
    title: 'EMAIL',
    lines: ['info@xtravaganza.com', 'demos@xtravaganza.com']
  },
  {
    icon: '📱',
    title: 'PHONE',
    lines: ['+44 (0) 20 1234 5678']
  },
]

// Social links
const socialLinks = [
  { name: 'INSTAGRAM', url: 'https://www.instagram.com/xtravaganza_recordings/' },
  { name: 'SPOTIFY', url: 'https://open.spotify.com/user/pe9h8m660h6z7wy76yw8580jf?si=fb3db787ae7f42a6' },
  { name: 'YOUTUBE', url: 'https://www.youtube.com/@xtravaganzatv' },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you soon.')
  }
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

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
            CONTACT
          </h1>
          <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-3xl">
            Get in touch with XTRAVAGANZA Recordings. Whether you're an artist looking to submit demos, a business inquiry, or just want to say hello, we'd love to hear from you.
          </p>
        </motion.div>
      </section>

      {/* Horizontal tech line divider */}
      <div className="relative max-w-6xl mx-auto px-6 md:px-12 lg:px-20 my-8">
        <div className="tech-line-h" />
      </div>

      {/* Main Content Grid */}
      <section className="relative px-6 md:px-12 lg:px-20 py-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-orbitron text-lg md:text-xl tracking-[0.1em] font-semibold text-white mb-6">
              SEND A MESSAGE
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block font-orbitron text-[10px] tracking-[0.15em] text-white/60 mb-2">
                  NAME *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-800/50 border border-frost/20 text-white text-sm font-orbitron tracking-[0.05em] placeholder:text-white/30 focus:border-frost/50 focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block font-orbitron text-[10px] tracking-[0.15em] text-white/60 mb-2">
                  EMAIL *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-800/50 border border-frost/20 text-white text-sm font-orbitron tracking-[0.05em] placeholder:text-white/30 focus:border-frost/50 focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block font-orbitron text-[10px] tracking-[0.15em] text-white/60 mb-2">
                  SUBJECT *
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-dark-800/50 border border-frost/20 text-white text-sm font-orbitron tracking-[0.05em] focus:border-frost/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="" className="bg-dark-900">Select a subject</option>
                  <option value="demo" className="bg-dark-900">Demo Submission</option>
                  <option value="licensing" className="bg-dark-900">Licensing Inquiry</option>
                  <option value="press" className="bg-dark-900">Press / Media</option>
                  <option value="booking" className="bg-dark-900">Booking</option>
                  <option value="general" className="bg-dark-900">General Inquiry</option>
                </select>
              </div>
              
              <div>
                <label className="block font-orbitron text-[10px] tracking-[0.15em] text-white/60 mb-2">
                  MESSAGE *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-dark-800/50 border border-frost/20 text-white text-sm font-orbitron tracking-[0.05em] placeholder:text-white/30 focus:border-frost/50 focus:outline-none transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full px-6 py-4 text-xs tracking-[0.2em] uppercase font-orbitron bg-frost/20 border border-frost/40 text-frost hover:bg-frost/30 transition-all duration-300 btn-cyber"
              >
                Send Message
                <span className="ml-2">→</span>
              </button>
            </form>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-orbitron text-lg md:text-xl tracking-[0.1em] font-semibold text-white mb-6">
              CONTACT INFO
            </h2>
            
            <div className="space-y-6">
              {contactInfo.map((info, idx) => (
                <div key={info.title} className="p-5 bg-dark-800/30 border border-frost/20">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{info.icon}</span>
                    <div>
                      <h3 className="font-orbitron text-xs tracking-[0.15em] font-bold text-frost mb-2">
                        {info.title}
                      </h3>
                      {info.lines.map((line, i) => (
                        <p key={i} className="text-white/60 text-sm">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Social Links */}
            <div className="mt-8">
              <h3 className="font-orbitron text-xs tracking-[0.15em] font-bold text-white mb-4">
                FOLLOW US
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className="px-4 py-2 text-[10px] tracking-[0.15em] font-orbitron border border-frost/20 text-white/60 hover:border-frost/40 hover:text-frost transition-all duration-300"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Demo Submission Info */}
            <div className="mt-8 p-5 bg-frost/5 border border-frost/30">
              <h3 className="font-orbitron text-xs tracking-[0.15em] font-bold text-frost mb-3">
                DEMO SUBMISSIONS
              </h3>
              <p className="text-white/60 text-sm leading-relaxed mb-3">
                Interested in releasing with XTRAVAGANZA? We accept demo submissions via email. Please include:
              </p>
              <ul className="text-white/60 text-sm space-y-1">
                <li>• Private streaming links (SoundCloud, etc.)</li>
                <li>• Brief artist bio</li>
                <li>• Links to previous releases</li>
                <li>• Social media profiles</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="relative px-6 md:px-12 lg:px-20 py-12 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="tech-line-h mb-8" />
          
          {/* Map placeholder */}
          <div className="relative aspect-[21/9] bg-dark-800/50 border border-frost/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-dark-700/50 to-dark-900/50" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="font-orbitron text-xl md:text-2xl tracking-[0.2em] text-frost/40 mb-2">
                  LONDON, UK
                </div>
                <div className="font-orbitron text-xs tracking-[0.15em] text-white/40">
                  51.5074° N, 0.1278° W
                </div>
              </div>
            </div>
            
            {/* Decorative grid */}
            <div className="absolute inset-0 circuit-grid opacity-50" />
            
            {/* Pulse marker */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-4 rounded-full bg-frost/60 animate-ping" />
              <div className="absolute top-0 left-0 w-4 h-4 rounded-full bg-frost" />
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}
