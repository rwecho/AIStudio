import { Website } from '@/services/menu'
import Site from './components/Site'

async function getWebsite(id: string): Promise<Website> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/sites/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (!res.ok) {
    throw new Error('Failed to fetch website')
  }
  return res.json()
}

export default async function WebsitePage({
  params,
}: {
  params: Promise<{
    id: string
  }>
}) {
  const resolvedParams = await params
  const website = await getWebsite(resolvedParams.id)

  return <Site website={website}></Site>
}
