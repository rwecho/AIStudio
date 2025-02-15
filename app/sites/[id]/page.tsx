import { Website } from '@/services/menu'
import Site from './components/Site'
import { Metadata } from 'next'

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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const website = await getWebsite(resolvedParams.id)
  const screenshot = `/api/screenshot?key=${website.screenshot_key}`
  const url = `${process.env.NEXT_PUBLIC_SITE_URL}/sites/${resolvedParams.id}`

  return {
    title: website.title,
    description: website.description || `Welcome to ${website.title}`,
    keywords: website.tags?.join(', ') || website.title,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: website.title,
      description: website.description,
      url: url,
      siteName: 'AI Studio X',
      images: [
        {
          url: screenshot,
          width: 1200,
          height: 630,
          alt: website.title,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: website.title,
      description: website.description,
      site: '@aistudiox',
      creator: '@aistudiox',
      images: screenshot,
    },
    viewport: {
      width: 'device-width',
      initialScale: 1,
    },
    themeColor: '#ffffff',
    category: 'technology',
  }
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
