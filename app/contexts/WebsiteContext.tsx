'use client'

import { Menu, Website } from '@/services/menu'
import { createContext, useContext, ReactNode } from 'react'

interface WebsiteContextType {
  menus: Menu[]
  websites: Website[]
}

const WebsiteContext = createContext<WebsiteContextType | undefined>(undefined)

export const WebsiteProvider = ({
  children,
  menus,
  websites,
}: {
  children: ReactNode
  menus: Menu[]
  websites: Website[]
}) => {
  return <WebsiteContext.Provider value={{ menus, websites }}>{children}</WebsiteContext.Provider>
}

export const useWebsiteContext = () => {
  const context = useContext(WebsiteContext)
  if (!context) {
    throw new Error('useWebsiteContext must be used within a WebsiteProvider')
  }
  return context
}
