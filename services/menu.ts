export interface Menu {
  id: number
  name: string
  subMenus: Menu[]
}

export interface Language {
  language: string
  description: string
  title: string
  detail: string
}

export interface Website {
  id: number
  title: string
  description: string
  url: string
  tags: string[]
  enabled: boolean
  created_at: string
  screenshot_key: string
  languages: Language[]
  categories: string
}
