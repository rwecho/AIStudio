import React, { useEffect } from 'react'
import { Tabs, Card, Space, Tag } from 'antd'
import Title from 'antd/es/typography/Title'
import Meta from 'antd/es/card/Meta'
import { Menu, Website } from '@/services/menu'
import ScreenShot from './ScreenShot'

const AppCard = ({ websites }: { websites: Website[] }) => {
  const group = (items: any[], cols: number) => {
    const result = []
    for (let i = 0; i < cols; i++) {
      result.push(items.filter((_, index) => index % cols === i))
    }
    return result
  }
  const groupItems = group(websites, 5)
  return (
    <Space align="start">
      {groupItems.map((group, index) => (
        <Space wrap direction="vertical" key={index} size={16}>
          {group.map((item, index) => (
            <Card
              hoverable
              key={index}
              style={{ width: 300 }}
              cover={<ScreenShot screenshot_key={item.screenshot_key}></ScreenShot>}
              actions={[
                <a key={'view'} href={item.url} target="_blank" rel="noopener noreferrer">
                  浏览
                </a>,
              ]}
            >
              <Meta
                title={item.title}
                description={
                  <>
                    <div>{item.description}</div>
                    <Space className="mt-2" wrap>
                      {item.tags
                        ?.filter((o: string) => o != 'ai')
                        .map((tag: string) => (
                          <Tag key={tag} className="mr-2 text-xs text-gray-500">
                            #{tag}
                          </Tag>
                        ))}
                    </Space>
                  </>
                }
              />
            </Card>
          ))}
        </Space>
      ))}
    </Space>
  )
}

const AppTabs = ({
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
            <AppCard websites={websites.filter((o) => o.categories.includes(sub.name))}></AppCard>
          </div>
        ),
      }))}
    />
  )
}

const CardGrid = ({ menus, websites }: { menus: Menu[]; websites: Website[] }) => {
  const [activeMenu, setActiveMenu] = React.useState<string>()
  const [activeSubmenu, setActiveSubMenu] = React.useState<string>()

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
          <AppTabs
            menu={menu}
            websites={websites}
            activeMenuId={activeMenu}
            activeSubmenuId={activeSubmenu}
          ></AppTabs>
        </div>
      ))}
    </>
  )
}

export default CardGrid
