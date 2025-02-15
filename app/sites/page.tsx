import Sites from './components/Sites'
import { SitesProvider } from '../contexts/SitesContext'
import supabase from '@/lib/initSupabase'

async function getSites() {
  const { data: sites } = await supabase.from('websites').select('*')
  return sites || []
}

export default async function SitesPage() {
  const defaultSites = await getSites()

  return (
    <SitesProvider defaultSites={defaultSites}>
      <Sites />
    </SitesProvider>
  )
}
