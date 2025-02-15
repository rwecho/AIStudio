import 'dotenv/config'
import { createClient } from '@supabase/supabase-js'
import navdata from '../app_data/nav.json' assert { type: 'json' }

async function seedDatabase() {
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? ''
  )

  const { data, error } = await supabase.from('menus').select()
  console.log('Existing menu', data)

  // for (const item of navdata) {
  //   const { data: menu, error } = await supabase
  //     .from('Menu')
  //     .insert([
  //       {
  //         name: item.name,
  //       },
  //     ])
  //     .select()

  //   console.log('Inserted menu', menu)

  //   if (error) {
  //     console.error('Error inserting menu', error)
  //     return
  //   }

  //   for (const subitem of item.subcategories) {
  //     const { data: subMenu, error } = await supabase
  //       .from('Menu')
  //       .insert([
  //         {
  //           name: subitem.name,
  //           parent_id: menu[0].id,
  //         },
  //       ])
  //       .select()

  //     if (error) {
  //       console.error('Error inserting submenu', error)
  //       return
  //     }

  //     console.log('Inserted submenu', subMenu)
  //   }
  // }
}

seedDatabase()
