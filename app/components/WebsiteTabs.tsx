import { Menu, Website } from '@/services/menu'
import { Tabs } from 'antd'
import React, { useEffect } from 'react'
import WebsiteCard from './WebsiteCard'

const WebsiteTabs = ({
  menu,
  websites,
  activeMenuId,
  activeSubmenuId,
}: {
  menu: Menu
  websites: Website[]
  activeMenuId?: string
  activeSubmenuId?: string
}) => {
  const [activeKey, setActiveKey] = React.useState<string>()

  useEffect(() => {
    if (activeMenuId === menu.id.toString() && activeSubmenuId) {
      setActiveKey(activeSubmenuId)
    }
  }, [menu, activeMenuId, activeSubmenuId])

  return (
    <Tabs
      id={`${activeMenuId}`}
      activeKey={activeKey}
      items={menu.subMenus.map((sub) => ({
        key: sub.id.toString(),
        label: sub.name,
        children: (
          <div id={`tab-${menu.id}-${sub.id}`}>
            <WebsiteCard
              websites={websites.filter((o) => o.categories.includes(sub.name))}
            ></WebsiteCard>
          </div>
        ),
      }))}
    />
  )
}

export default WebsiteTabs
