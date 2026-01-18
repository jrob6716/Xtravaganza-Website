import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Artists from './pages/Artists'
import Releases from './pages/Releases'
import About from './pages/About'
import Contact from './pages/Contact'
import Merch from './pages/Merch'
import Mix from './pages/Mix'

export default function App() {
  return (
    // Basename matches GitHub Pages repo for client-side routing
    <Router basename="/Xtravaganza-Website">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/releases" element={<Releases />} />
          <Route path="/merch" element={<Merch />} />
          <Route path="/mix" element={<Mix />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  )
}
