import { NavLink, Outlet } from 'react-router-dom'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import NeuralBackground from './NeuralBackground'
import GlobalSearch from './GlobalSearch'
import { DesktopNav, MobileNav } from './NavDropdown'
import { mainNav } from '../data/projects'

export default function Layout() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="relative min-h-screen">
      <NeuralBackground />

      <nav className="fixed top-0 left-0 right-0 z-50 glass shadow-lg shadow-accent/5 overflow-visible">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <NavLink to="/" className="font-mono text-sm font-semibold tracking-wider shrink-0">
            <span className="text-accent">&lt;</span>
            <span className="gradient-text">AI/ML</span>
            <span className="text-accent">/&gt;</span>
          </NavLink>

          <div className="hidden md:flex items-center gap-3 flex-1 justify-end min-w-0">
            <DesktopNav items={mainNav} />
            <GlobalSearch />
          </div>

          <div className="flex md:hidden items-center gap-1">
            <GlobalSearch />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-text p-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border/50"
            >
              <div className="px-6 py-4">
                <MobileNav items={mainNav} onNavigate={() => setMobileOpen(false)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10 pt-20">
        <Outlet />
      </main>
    </div>
  )
}
