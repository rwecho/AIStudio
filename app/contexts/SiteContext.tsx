'use client'
import { Website } from '@/services/menu'
import { createContext, useContext, useState, ReactNode } from 'react'

interface SiteContextType {
  site: Website
  setSite: (site: Website) => void
}

const SiteContext = createContext<SiteContextType | undefined>(undefined)

export function SiteProvider({
  children,
  defaultSite,
}: {
  children: ReactNode
  defaultSite: Website
}) {
  const [site, setSite] = useState<Website>(defaultSite)

  return <SiteContext.Provider value={{ site, setSite }}>{children}</SiteContext.Provider>
}

export function useSiteContext() {
  const context = useContext(SiteContext)
  if (context === undefined) {
    throw new Error('useSites must be used within a SitesProvider')
  }
  return context
}
