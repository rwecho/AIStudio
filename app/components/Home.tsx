'use client'

import AppLogo from '@/app/components/Logo'
import AppMenu from '@/app/components/Menu'
import { WebsiteProvider } from '@/app/contexts/WebsiteContext'
import { Menu, Website } from '@/services/menu'
import { FloatButton, Layout } from 'antd'
import WebsiteGallery from './WebsiteGallery'
const { Sider, Content } = Layout

const Home = ({ menus, websites }: { menus: Menu[]; websites: Website[] }) => {
  return (
    <WebsiteProvider menus={menus} websites={websites}>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider width={256} theme="light" className="relative">
          <div className="fixed top-0 left-0 w-64 h-full ">
            <AppLogo />
            <AppMenu />
          </div>
        </Sider>
        <Content style={{ padding: '24px' }}>
          <WebsiteGallery />
          <FloatButton.BackTop />
        </Content>
      </Layout>
    </WebsiteProvider>
  )
}
export default Home
