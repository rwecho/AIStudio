'use client'
import { useEffect, useState } from 'react'
import { Button, Table, Input, Switch, Popconfirm, Tag, Space, message, Modal, Form } from 'antd'
import type { ColumnsType } from 'antd/es/table'
import supabase from '@/lib/initClientSupabase'
import ButtonGroup from 'antd/es/button/button-group'
import Image from 'next/image'

interface Website {
  id: number
  name: string
  description: string
  url: string
  tags: string[]
  enabled: boolean
  created_at: string
}

export default function Sites({ defaultSites }: { defaultSites: Website[] }) {
  const [sites, setSites] = useState<Website[]>(defaultSites)
  const [loading, setLoading] = useState(true)

  const [crawling, setCrawling] = useState(false)

  const [messageApi, contextHolder] = message.useMessage()
  const [searchText, setSearchText] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [editingRecord, setEditingRecord] = useState<Website | null>(null)
  const [form] = Form.useForm()

  useEffect(() => {
    setSites(defaultSites)
    setLoading(false)
  }, [defaultSites])

  const showModal = (record?: Website) => {
    setEditingRecord(record || null)
    if (record) {
      form.setFieldsValue(record)
    } else {
      form.resetFields()
    }
    setIsModalVisible(true)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    setEditingRecord(null)
    form.resetFields()
  }

  const handleSubmit = async (values: Partial<Website>) => {
    try {
      if (editingRecord) {
        // Update existing record
        const { error } = await supabase.from('websites').update(values).eq('id', editingRecord.id)
        if (error) throw error

        const updatedSites = sites.map((site) =>
          site.id === editingRecord.id ? { ...site, ...values } : site
        )
        setSites(updatedSites)
        messageApi.success(`Successfully updated website: ${values.name}`)
      } else {
        // Add new record
        const { data, error } = await supabase
          .from('websites')
          .insert([{ ...values, enabled: true }])
          .select()
        if (error) throw error
        if (data) {
          setSites([...sites, data[0]])
          messageApi.success(`Successfully added website: ${values.name}`)
        }
      }
      setIsModalVisible(false)
      form.resetFields()
    } catch (error: any) {
      const errorMessage = error.message || 'An unknown error occurred'
      messageApi.error(`Operation failed: ${errorMessage}`)
    }
  }

  const handleDelete = async (id: number) => {
    try {
      const { error } = await supabase.from('websites').delete().eq('id', id)
      if (error) throw error
      setSites(sites.filter((site) => site.id !== id))
      messageApi.success(`Website has been deleted permanently`)
    } catch (error: any) {
      const errorMessage = error.message || 'An unknown error occurred'
      messageApi.error(`Failed to delete website. ${errorMessage}`)
    }
  }

  const handleCrawl = async (id: number) => {
    try {
      const url = 'https://crawl.aistudiox.design/site/crawl'

      const websiteUrl = sites.find((site) => site.id === id)?.url
      setCrawling(true)
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: websiteUrl, tags: [], languages: ['zh-CN', 'en-US'] }),
      })

      if (!response.ok) {
        throw new Error('Failed to initiate crawl')
      }
      const site = await response.json()

      const oldSite = sites.find((site) => site.id === id)

      const newSite = {
        ...oldSite,
        ...site,
      }
      const { error } = await supabase.from('websites').update(newSite).eq('id', id)
      if (error) throw error
      const updatedSites = sites.map((site) => (site.id === id ? { ...site, ...newSite } : site))
      setSites(updatedSites)
      messageApi.success('Crawl request has been sent')
    } catch (error: any) {
      const errorMessage = error.message || 'An unknown error occurred'
      messageApi.error(`Failed to initiate crawl: ${errorMessage}`)
    } finally {
      setCrawling(false)
    }
  }

  const columns: ColumnsType<Website> = [
    {
      title: '网址',
      dataIndex: 'url',
      render: (text, record) => (
        <a href={text} target="_blank" rel="noopener noreferrer">
          {record.name}
        </a>
      ),
    },
    {
      title: 'description',
      dataIndex: 'description',
    },
    {
      title: '标签',
      dataIndex: 'tags',
      render: (tags: string[]) => (
        <Space wrap>
          {tags.map((tag) => (
            <Tag key={tag} className="mr-1 mb-1">
              {tag}
            </Tag>
          ))}
        </Space>
      ),
    },
    {
      title: '启用',
      dataIndex: 'enabled',
      render: (enabled) => <Tag color={enabled ? 'green' : 'red'}>{enabled ? '启用' : '禁用'}</Tag>,
    },
    {
      title: 'Actions',
      render: (_, record) => (
        <ButtonGroup>
          <Button type="link" onClick={() => showModal(record)}>
            Edit
          </Button>
          <Popconfirm
            title="Do you want to crawling this site?"
            onConfirm={() => handleCrawl(record.id)}
            disabled={crawling}
          >
            <Button type="link" loading={crawling}>
              Crawl
            </Button>
          </Popconfirm>
          <Popconfirm
            title="Are you sure you want to delete this site?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button type="link" danger>
              Delete
            </Button>
          </Popconfirm>
        </ButtonGroup>
      ),
    },
  ]

  const filteredSites = sites.filter((site) => {
    const searchLower = searchText.toLowerCase()
    return (
      site.name.toLowerCase().includes(searchLower) ||
      site.description?.toLowerCase().includes(searchLower) ||
      site.url.toLowerCase().includes(searchLower) ||
      site.tags?.some((tag) => tag.toLowerCase().includes(searchLower))
    )
  })

  return (
    <div className="p-6">
      {contextHolder}
      <div className="mb-4 flex justify-between items-center">
        <Button type="primary" onClick={() => showModal()}>
          Add New Site
        </Button>
        <Input.Search
          placeholder="Search sites..."
          allowClear
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: 300 }}
        />
      </div>
      <Table columns={columns} dataSource={filteredSites} rowKey="id" loading={loading} />

      <Modal
        title={editingRecord ? 'Edit Site' : 'Add New Site'}
        open={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{ enabled: true }}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please input the site name!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="url"
            label="URL"
            rules={[{ required: true, message: 'Please input the site URL!' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea />
          </Form.Item>
          <Form.Item name="enabled" label="Enabled" valuePropName="checked">
            <Switch />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                {editingRecord ? 'Update' : 'Add'}
              </Button>
              <Button onClick={handleCancel}>Cancel</Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  )
}
