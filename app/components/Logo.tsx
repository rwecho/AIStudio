import React from 'react'
import { Typography } from 'antd'

const { Title } = Typography

const AppLogo: React.FC = () => {
  return (
    <div style={{ padding: '16px', textAlign: 'center', borderBottom: '1px solid #f0f0f0' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Title
          style={{
            margin: '0',
            background: 'linear-gradient(45deg, #2196F3, #00BCD4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
            letterSpacing: '1px',
          }}
        >
          AI Studio X
        </Title>
        <Title
          level={5}
          style={{
            margin: '8px 0 0 0',
            color: '#999',
            fontWeight: 'normal',
            fontSize: '14px',
          }}
        >
          A platform for AI enthusiasts to share their projects and learn from each other.
        </Title>
      </div>
    </div>
  )
}

export default AppLogo
