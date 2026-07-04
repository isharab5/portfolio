import { useState, type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface Tab {
  id: string
  label: string
}

interface TabsProps {
  tabs: Tab[]
  activeTab: string
  onChange: (id: string) => void
}

export default function Tabs({ tabs, activeTab, onChange }: TabsProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-12">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onChange(tab.id)}
          className={`relative px-6 py-3 rounded-xl font-mono text-sm transition-all duration-300 ${
            activeTab === tab.id
              ? 'text-accent'
              : 'text-muted hover:text-text glass'
          }`}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 rounded-xl bg-accent/10 border border-accent/30"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
            />
          )}
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  )
}

interface TabPanelProps {
  children: ReactNode
  id: string
  activeTab: string
}

export function TabPanel({ children, id, activeTab }: TabPanelProps) {
  if (id !== activeTab) return null
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

export function useTabs(defaultTab: string) {
  const [activeTab, setActiveTab] = useState(defaultTab)
  return { activeTab, setActiveTab }
}
