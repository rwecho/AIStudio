'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

interface Website {
  id: number
  name: string
  description: string
  url: string
  tags: string[]
  enabled: boolean
  created_at: string
}

interface SitesContextType {
  sites: Website[]
  setSites: (sites: Website[]) => void
}

const SitesContext = createContext<SitesContextType | undefined>(undefined)

export function SitesProvider({
  children,
  defaultSites,
}: {
  children: ReactNode
  defaultSites: Website[]
}) {
  const [sites, setSites] = useState<Website[]>(defaultSites)

  return <SitesContext.Provider value={{ sites, setSites }}>{children}</SitesContext.Provider>
}

export function useSites() {
  const context = useContext(SitesContext)
  if (context === undefined) {
    throw new Error('useSites must be used within a SitesProvider')
  }
  return context
}
