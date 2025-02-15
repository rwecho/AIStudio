'use client'
import React from 'react'
import { Menu } from 'antd'
import {
  AppstoreOutlined,
  RobotOutlined,
  ToolOutlined,
  CodeOutlined,
  PictureOutlined,
  VideoCameraOutlined,
  FileTextOutlined,
  ShopOutlined,
  BankOutlined,
  TrophyOutlined,
} from '@ant-design/icons'

import { Menu as MenuType } from '@/services/menu'
import { useWebsiteContext } from '@/app/contexts/WebsiteContext'

// Icon mapping for categories
const iconMap: { [key: string]: React.ReactNode } = {
  1: <AppstoreOutlined />,
  2: <RobotOutlined />,
  3: <ToolOutlined />,
  4: <CodeOutlined />,
  5: <PictureOutlined />,
  6: <VideoCameraOutlined />,
  7: <FileTextOutlined />,
  8: <ShopOutlined />,
  9: <BankOutlined />,
  10: <TrophyOutlined />,
}

const AppMenu = () => {
  const { menus } = useWebsiteContext()

  const menuItems = menus.map((menu) => ({
    key: menu.id,
    icon: iconMap[menu.id],
    label: menu.name,
    children: menu.subMenus.map((sub) => ({
      key: sub.id,
      label: <a href={`#tab-${menu.id}-${sub.id}`}>{sub.name}</a>,
    })),
  }))

  const [selectedKeys, setSelectedKeys] = React.useState<string[]>([])

  return (
    <Menu
      selectedKeys={selectedKeys}
      defaultOpenKeys={[menuItems[0].key.toString()]}
      mode="inline"
      items={menuItems}
      onSelect={({ key }) => setSelectedKeys([key.toString()])}
    />
  )
}

export default AppMenu
