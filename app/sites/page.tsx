import Sites from './components/Sites'
import supabase from '@/lib/initSupabase'

export default async function SitesPage() {
  const { data: sites, error } = await supabase
    .from('websites')
    .select('*')
    .order('id', { ascending: false })

  if (error) {
    throw error
  }

  return <Sites defaultSites={sites}></Sites>
}
