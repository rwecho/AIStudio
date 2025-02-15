import React from 'react'

import { motion } from 'framer-motion'
import { Link } from 'next-view-transitions'
import Home from './components/Home'
import supabase from '@/lib/initSupabase'

export const revalidate = 0

const { data, error } = await supabase.from('menus').select()

const { data: websites, error: websitesError } = await supabase.from('websites').select()

const HomePage = async () => {
  if (error) {
    throw error
  }

  const menus = []
  for (const menu of data.filter((menu) => !menu.parent_id)) {
    menus.push({
      id: menu.id,
      name: menu.name,
      subMenus: data.filter((sub) => sub.parent_id === menu.id),
    })
  }

  return <Home menus={menus} websites={websites!}></Home>
}

export default HomePage
