import { useState, useRef, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { ChevronDown } from 'lucide-react'
import type { NavItem } from '../data/projects'

function hasChildren(item: NavItem): item is NavItem & { children: { label: string; path: string }[] } {
  return 'children' in item && Array.isArray(item.children)
}

function NavDropdown({ item }: { item: NavItem & { children: { label: string; path: string }[] } }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const location = useLocation()
  const isActive = location.pathname.startsWith(item.path)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    if (!open) return

    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false)
      }
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [open])

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-haspopup="true"
        onClick={(e) => {
          e.stopPropagation()
          setOpen((prev) => !prev)
        }}
        className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-mono transition-all duration-300 cursor-pointer ${
          isActive
            ? 'bg-accent/10 text-accent border border-accent/30'
            : 'text-muted hover:text-accent hover:bg-accent/5'
        }`}
      >
        {item.label}
        <ChevronDown size={14} className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="absolute top-full left-0 pt-1 min-w-[280px] z-[100]">
          <div className="py-2 rounded-xl glass border border-border/50 shadow-xl shadow-accent/5 bg-panel/95 backdrop-blur-xl">
            {item.children.map((child) => (
              <NavLink
                key={child.path}
                to={child.path}
                onClick={() => setOpen(false)}
                className={({ isActive: childActive }) =>
                  `block px-4 py-2.5 text-sm font-mono transition-colors cursor-pointer ${
                    childActive
                      ? 'text-accent bg-accent/10'
                      : 'text-muted hover:text-accent hover:bg-accent/5'
                  }`
                }
              >
                {child.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export function DesktopNav({ items }: { items: NavItem[] }) {
  return (
    <div className="hidden md:flex items-center gap-1 relative z-[60]">
      {items.map((item) =>
        hasChildren(item) ? (
          <NavDropdown key={item.path} item={item} />
        ) : (
          <NavLink
            key={item.path}
            to={item.path}
            end
            className={({ isActive }) =>
              `px-4 py-2 rounded-lg text-sm font-mono transition-all duration-300 ${
                isActive
                  ? 'bg-accent/10 text-accent border border-accent/30'
                  : 'text-muted hover:text-accent hover:bg-accent/5'
              }`
            }
          >
            {item.label}
          </NavLink>
        ),
      )}
    </div>
  )
}

export function MobileNav({
  items,
  onNavigate,
}: {
  items: NavItem[]
  onNavigate: () => void
}) {
  const [expanded, setExpanded] = useState<string | null>(null)

  return (
    <div className="flex flex-col gap-1">
      {items.map((item) =>
        hasChildren(item) ? (
          <div key={item.path}>
            <button
              type="button"
              onClick={() => setExpanded(expanded === item.path ? null : item.path)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-mono text-muted hover:text-accent transition-colors cursor-pointer"
            >
              {item.label}
              <ChevronDown
                size={14}
                className={`transition-transform ${expanded === item.path ? 'rotate-180' : ''}`}
              />
            </button>
            {expanded === item.path && (
              <div className="ml-4 flex flex-col gap-1 mb-2">
                {item.children.map((child) => (
                  <NavLink
                    key={child.path}
                    to={child.path}
                    onClick={onNavigate}
                    className={({ isActive }) =>
                      `px-4 py-2.5 rounded-lg text-sm font-mono transition-colors ${
                        isActive ? 'bg-accent/10 text-accent' : 'text-muted hover:text-accent'
                      }`
                    }
                  >
                    {child.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ) : (
          <NavLink
            key={item.path}
            to={item.path}
            end
            onClick={onNavigate}
            className={({ isActive }) =>
              `px-4 py-3 rounded-lg text-sm font-mono transition-colors ${
                isActive ? 'bg-accent/10 text-accent' : 'text-muted hover:text-accent'
              }`
            }
          >
            {item.label}
          </NavLink>
        ),
      )}
    </div>
  )
}
