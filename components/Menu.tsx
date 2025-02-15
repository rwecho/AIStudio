// 'use client'
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

// Icon mapping for categories
const iconMap: { [key: string]: React.ReactNode } = {
  工具推荐: <AppstoreOutlined />,
  大模型: <RobotOutlined />,
  工具集: <ToolOutlined />,
  开发者社区: <CodeOutlined />,
  图像工具: <PictureOutlined />,
  视频工具: <VideoCameraOutlined />,
  办公工具: <FileTextOutlined />,
  商业服务: <ShopOutlined />,
  权威机构: <BankOutlined />,
  竞赛: <TrophyOutlined />,
}

const AppMenu = ({ menus }: { menus: MenuType[] }) => {
  const menuItems = menus.map((menu) => ({
    key: menu.id,
    icon: iconMap[menu.name],
    label: menu.name,
    children: menu.subMenus.map((sub) => ({
      key: sub.id,
      label: <a href={`#tab-${menu.id}-${sub.id}`}>{sub.name}</a>,
    })),
  }))

  const [selectedKeys, setSelectedKeys] = React.useState<string[]>([])

  return (
    <Menu
      style={{ width: 256 }}
      selectedKeys={selectedKeys}
      defaultOpenKeys={[menuItems[0].key.toString()]}
      mode="inline"
      items={menuItems}
      onSelect={({ key }) => setSelectedKeys([key.toString()])}
    />
  )
}

export default AppMenu
