'use client'

import { Menu, Website } from '@/services/menu'
import Title from 'antd/es/typography/Title'
import { useState, useEffect } from 'react'
import WebsiteTabs from './WebsiteTabs'
import { useWebsiteContext } from '@/app/contexts/WebsiteContext'

const WebsiteGallery = () => {
  const { menus, websites } = useWebsiteContext()
  const [activeMenu, setActiveMenu] = useState<string>()
  const [activeSubmenu, setActiveSubMenu] = useState<string>()

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash
      const splits = hash.split('-')
      if (splits.length != 3) {
        return
      }

      const menuId = splits[1]
      const subMenuId = splits[2]

      setActiveMenu(menuId)
      setActiveSubMenu(subMenuId)

      const menuDiv = document.querySelector(`#tab-${menuId}`)

      if (menuDiv) {
        menuDiv.scrollIntoView({ behavior: 'smooth' })
      }
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  return (
    <>
      {menus.map((menu, index) => (
        <div key={index} id={`tab-${menu.id}`} className="mb-8">
          <Title
            level={2}
            className="!text-gray-400 border-l-4 px-4"
            style={{ borderImage: 'linear-gradient(180deg, #2196F3, #00BCD4) 1' }}
          >
            {menu.name}
          </Title>
          <WebsiteTabs
            menu={menu}
            websites={websites}
            activeMenuId={activeMenu}
            activeSubmenuId={activeSubmenu}
          ></WebsiteTabs>
        </div>
      ))}
    </>
  )
}

export default WebsiteGallery
