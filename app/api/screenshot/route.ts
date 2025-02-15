import { NextRequest, NextResponse } from 'next/server'
import supabase from '@/lib/initSupabase'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const key = searchParams.get('key')
  if (!key) {
    return NextResponse.json({ message: 'Please provide a key' }, { status: 400 })
  }

  const { data, error } = await supabase.storage.from('ai-studio').download(key)
  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }

  // Determine content type based on file extension
  const contentType = key.toLowerCase().endsWith('.png') ? 'image/png' : 'image/jpeg'

  // Generate ETag from data
  const etag = `"${Buffer.from(await data.arrayBuffer())
    .toString('base64')
    .substring(0, 32)}"`

  // Check if client has matching ETag
  const ifNoneMatch = request.headers.get('if-none-match')
  if (ifNoneMatch === etag) {
    return new NextResponse(null, { status: 304 })
  }

  return new NextResponse(data, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': 'public, max-age=31536000, immutable, stale-while-revalidate=86400',
      ETag: etag,
      'Last-Modified': new Date().toUTCString(),
    },
  })
}
