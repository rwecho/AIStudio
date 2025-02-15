'use client'

import CardGrid from '@/app/components/CardGrid'
import AppLogo from '@/app/components/Logo'
import AppMenu from '@/app/components/Menu'
import { Menu, Website } from '@/services/menu'
import { Layout } from 'antd'
const { Sider, Content } = Layout

const Home = ({ menus, websites }: { menus: Menu[]; websites: Website[] }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider width={256} theme="light">
        <AppLogo />
        <AppMenu menus={menus} />
      </Sider>
      <Content style={{ padding: '24px' }}>
        <CardGrid menus={menus} websites={websites} />
      </Content>
    </Layout>
  )
}
export default Home
