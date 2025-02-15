import { NextRequest, NextResponse } from 'next/server'
import supabase from '@/lib/initSupabase'

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const key = searchParams.get('key')
  if (!key) {
    return NextResponse.json({ message: 'Please provide a key' }, { status: 400 })
  }
  const { data, error } = await supabase.storage.from('ai-studio').createSignedUrl(key, 600, {})
  if (error) {
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
  return NextResponse.redirect(data.signedUrl)
}
