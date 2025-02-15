'use client'

import { ConfigProvider, theme } from 'antd'
import { useEffect, useState } from 'react'
import type { WithThemeProps } from '../types/theme'

export const withTheme = <P extends WithThemeProps>(
  WrappedComponent: React.ComponentType<P>
): React.FC<Omit<P, keyof WithThemeProps>> => {
  return function WithThemeComponent(props: Omit<P, keyof WithThemeProps>) {
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
      if (typeof window !== 'undefined') {
        const savedTheme = localStorage.getItem('theme')
        setIsDarkMode(savedTheme === 'dark')
      }
    }, [])

    const toggleTheme = (checked: boolean) => {
      setIsDarkMode(checked)
      if (typeof window !== 'undefined') {
        localStorage.setItem('theme', checked ? 'dark' : 'light')
      }
    }

    return (
      <ConfigProvider
        theme={{
          algorithm: isDarkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
          token: {
            motion: true,
          },
        }}
      >
        <WrappedComponent {...(props as P)} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </ConfigProvider>
    )
  }
}
