'use client'

import AppLogo from '@/app/components/Logo'
import AppMenu from '@/app/components/Menu'
import { WebsiteProvider } from '@/app/contexts/WebsiteContext'
import { withTheme } from '@/app/hoc/withTheme'
import { Menu, Website } from '@/services/menu'
import type { WithThemeProps } from '@/app/types/theme'
import { FloatButton, Layout, Switch } from 'antd'
import WebsiteGallery from './WebsiteGallery'
const { Sider, Content } = Layout

interface HomeProps extends WithThemeProps {
  menus: Menu[]
  websites: Website[]
}

const Home = ({ menus, websites, isDarkMode, toggleTheme }: HomeProps) => {
  return (
    <WebsiteProvider menus={menus} websites={websites}>
      <Layout
        style={{
          minHeight: '100vh',
          background: isDarkMode ? '#141414' : '#ffffff',
        }}
      >
        <Sider width={256} theme={isDarkMode ? 'dark' : 'light'} className="relative">
          <div className="fixed top-0 left-0 w-64 h-full">
            <AppLogo />
            <AppMenu />
            <div
              className={`px-6 py-4 flex items-center gap-2 ${
                isDarkMode ? 'text-white/85' : 'text-black/85'
              }`}
            >
              <Switch
                checked={isDarkMode}
                onChange={toggleTheme}
                checkedChildren="🌙"
                unCheckedChildren="☀️"
              />
              <span>{isDarkMode ? '深色模式' : '浅色模式'}</span>
            </div>
          </div>
        </Sider>
        <Content
          style={{
            padding: '24px',
            background: isDarkMode ? '#141414' : '#ffffff',
            color: isDarkMode ? 'rgba(255, 255, 255, 0.85)' : 'rgba(0, 0, 0, 0.85)',
          }}
        >
          <WebsiteGallery />
          <FloatButton.BackTop />
        </Content>
      </Layout>
    </WebsiteProvider>
  )
}

export default withTheme(Home)
