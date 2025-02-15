'use client'
import React from 'react'
import { Layout as AntLayout } from 'antd'

const { Sider, Content } = AntLayout

interface Props {
  children: React.ReactNode
  menu: React.ReactNode
}

const AppLayout: React.FC<Props> = ({ children, menu }) => {
  return (
    <AntLayout style={{ minHeight: '100vh' }}>
      <Sider width={200} style={{ background: '#fff' }}>
        {menu}
      </Sider>
      <AntLayout>
        <Content
          style={{
            background: '#fff',
            padding: 24,
            margin: 0,
            minHeight: 280,
          }}
        >
          {children}
        </Content>
      </AntLayout>
    </AntLayout>
  )
}

export default AppLayout
