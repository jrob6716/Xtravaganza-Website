import { motion } from 'framer-motion'
import { useState } from 'react'

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
          
          {/* Social and Demo Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Social Links */}
            <div>
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

    </>
  )
}
