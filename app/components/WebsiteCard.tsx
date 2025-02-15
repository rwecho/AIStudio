import { Website } from '@/services/menu'
import { Row, Col, Card, Space, Tag } from 'antd'
import Meta from 'antd/es/card/Meta'
import ScreenShot from './ScreenShot'
import { useRouter } from 'next/navigation'

const WebsiteCard = ({ websites }: { websites: Website[] }) => {
  const router = useRouter()

  const truncateDescription = (text: string, maxLength: number = 100) => {
    return text.length > maxLength ? text.slice(0, maxLength) + '...' : text
  }

  const commonTags = [
    'ai',
    'artificial intelligence',
    'technology',
    'artificial-intelligence',
    'machine learning',
    'tool',
    'tools',
    'free',
    'online',
  ]

  return (
    <Row gutter={[16, 16]}>
      {websites.map((item, index) => (
        <Col xs={24} sm={12} md={8} lg={6} xl={6} xxl={4} key={index}>
          <Card
            hoverable
            onClick={() => router.push(`/sites/${item.id}`)}
            cover={<ScreenShot screenshot_key={item.screenshot_key}></ScreenShot>}
            actions={[
              <a
                key={'view'}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
              >
                浏览
              </a>,
            ]}
          >
            <Meta
              title={item.title}
              description={
                <>
                  <div>{truncateDescription(item.description)}</div>
                  <Space wrap className="mt-2">
                    {item.tags
                      ?.filter((o: string) => !commonTags.includes(o.toLowerCase()))
                      .slice(0, 5)
                      .map((tag: string) => (
                        <Tag key={tag} className="mr-2 mb-2 text-xs text-gray-500">
                          #{tag}
                        </Tag>
                      ))}
                  </Space>
                </>
              }
            />
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default WebsiteCard
