import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Search, X, ArrowRight, Command } from 'lucide-react'
import { searchIndex } from '../data/searchIndex'
import { searchDocuments, type SearchResult } from '../lib/search'

function navigateToResult(path: string, navigate: ReturnType<typeof useNavigate>) {
  const hashIndex = path.indexOf('#')

  if (hashIndex === -1) {
    navigate(path)
    return
  }

  const pathname = path.slice(0, hashIndex) || '/'
  const hash = path.slice(hashIndex + 1)

  navigate(pathname)
  requestAnimationFrame(() => {
    const target = document.getElementById(hash)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  })
}

export default function GlobalSearch() {
  const navigate = useNavigate()
  const inputRef = useRef<HTMLInputElement>(null)
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState(0)

  const results = useMemo(
    () => searchDocuments(searchIndex, query),
    [query],
  )

  const close = useCallback(() => {
    setOpen(false)
    setQuery('')
    setActiveIndex(0)
  }, [])

  const selectResult = useCallback(
    (result: SearchResult) => {
      close()
      navigateToResult(result.path, navigate)
    },
    [close, navigate],
  )

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setOpen(true)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus())
    }
  }, [open])

  useEffect(() => {
    setActiveIndex(0)
  }, [query])

  useEffect(() => {
    if (!open) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        close()
        return
      }

      if (results.length === 0) return

      if (event.key === 'ArrowDown') {
        event.preventDefault()
        setActiveIndex((index) => (index + 1) % results.length)
      }

      if (event.key === 'ArrowUp') {
        event.preventDefault()
        setActiveIndex((index) => (index - 1 + results.length) % results.length)
      }

      if (event.key === 'Enter') {
        event.preventDefault()
        const result = results[activeIndex]
        if (result) selectResult(result)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, results, activeIndex, close, selectResult])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg glass border border-border/50
          text-muted hover:text-accent hover:border-accent/30 transition-all font-mono text-xs"
        aria-label="Search portfolio"
      >
        <Search size={14} />
        <span>Search</span>
        <span className="hidden lg:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded border border-border/60 text-muted/70">
          <Command size={10} />
          K
        </span>
      </button>

      <button
        type="button"
        onClick={() => setOpen(true)}
        className="md:hidden p-2 text-muted hover:text-accent transition-colors"
        aria-label="Search portfolio"
      >
        <Search size={20} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-start justify-center p-4 pt-[12vh] bg-void/80 backdrop-blur-sm"
            onClick={close}
          >
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              className="w-full max-w-2xl glass rounded-2xl border border-border/60 shadow-2xl shadow-accent/10 overflow-hidden"
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label="Search portfolio"
            >
              <div className="flex items-center gap-3 px-4 py-3 border-b border-border/50">
                <Search size={18} className="text-accent shrink-0" />
                <input
                  ref={inputRef}
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search projects, skills, experience, research…"
                  className="flex-1 bg-transparent outline-none text-sm text-text placeholder:text-muted/60 font-mono"
                  aria-label="Search query"
                />
                <button
                  type="button"
                  onClick={close}
                  className="p-1.5 rounded-lg text-muted hover:text-accent transition-colors"
                  aria-label="Close search"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="max-h-[50vh] overflow-y-auto">
                {query.trim().length < 2 ? (
                  <div className="px-4 py-8 text-center text-sm text-muted font-mono">
                    Type at least 2 characters to search across profile, projects, skills, and research.
                  </div>
                ) : results.length === 0 ? (
                  <div className="px-4 py-8 text-center text-sm text-muted font-mono">
                    No results for &ldquo;{query}&rdquo;
                  </div>
                ) : (
                  <ul className="py-2">
                    {results.map((result, index) => (
                      <li key={result.id}>
                        <button
                          type="button"
                          onClick={() => selectResult(result)}
                          onMouseEnter={() => setActiveIndex(index)}
                          className={`w-full text-left px-4 py-3 flex items-start gap-3 transition-colors ${
                            index === activeIndex
                              ? 'bg-accent/10 border-l-2 border-accent'
                              : 'border-l-2 border-transparent hover:bg-accent/5'
                          }`}
                        >
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-xs font-mono text-accent shrink-0">
                                {result.category}
                              </span>
                              {result.subtitle && (
                                <span className="text-xs text-muted truncate">{result.subtitle}</span>
                              )}
                            </div>
                            <p className="text-sm font-medium text-text truncate">{result.title}</p>
                            <p className="text-xs text-muted/80 mt-1 line-clamp-2">{result.snippet}</p>
                          </div>
                          <ArrowRight
                            size={14}
                            className={`shrink-0 mt-1 transition-opacity ${
                              index === activeIndex ? 'text-accent opacity-100' : 'text-muted opacity-0'
                            }`}
                          />
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {results.length > 0 && (
                <div className="px-4 py-2 border-t border-border/50 flex items-center gap-4 text-[11px] font-mono text-muted/70">
                  <span>↑↓ navigate</span>
                  <span>↵ open</span>
                  <span>esc close</span>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
