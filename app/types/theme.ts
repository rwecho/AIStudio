export type ThemeMode = 'light' | 'dark'

export interface WithThemeProps {
  isDarkMode: boolean
  toggleTheme: (checked: boolean) => void
}
