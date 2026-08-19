import { lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Artists from './pages/Artists'
import About from './pages/About'
import Contact from './pages/Contact'
import Merch from './pages/Merch'

const Releases = lazy(() => import('./pages/Releases'))

export default function App() {
  return (
    // Basename matches GitHub Pages repo for client-side routing
    <Router basename="/Xtravaganza-Website">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/artists" element={<Artists />} />
          <Route
            path="/releases"
            element={
              <Suspense
                fallback={
                  <div className="min-h-[45vh] flex items-center justify-center font-orbitron text-xs tracking-[0.2em] text-frost/70">
                    LOADING CATALOG…
                  </div>
                }
              >
                <Releases />
              </Suspense>
            }
          />
          <Route path="/merch" element={<Merch />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  )
}
