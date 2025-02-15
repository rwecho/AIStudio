import React from 'react'
import { Card } from 'antd'

export interface AIToolProps {
  name: string
  description?: string
  url: string
  imageUrl?: string
}

const AICard: React.FC<AIToolProps> = ({ name, description, url, imageUrl }) => {
  return (
    <Card
      hoverable
      style={{ width: 300, margin: '16px' }}
      cover={imageUrl && <img alt={name} src={imageUrl} />}
    >
      <Card.Meta
        title={<a href={url} target="_blank" rel="noopener noreferrer">{name}</a>}
        description={description}
      />
    </Card>
  )
}

export default AICard
