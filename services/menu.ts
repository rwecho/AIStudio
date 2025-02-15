export interface Menu {
  id: number
  name: string
  subMenus: Menu[]
}

export interface Website {
  id: number
  name: string
  description: string
  url: string
  tags: string[]
  enabled: boolean
  created_at: string
  screenshot_key: string
  languages: string[]
  categories: string
}
