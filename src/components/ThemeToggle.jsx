import React from 'react'
import { Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useTheme } from '../context/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme()

  return (
    <Button
      variant="outline"
      size="sm"
      onClick={toggleTheme}
      className="border-green-200 hover:border-green-400 hover:bg-green-50 dark:border-green-700 dark:hover:border-green-600 dark:hover:bg-green-900/20 transition-all duration-300"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <Sun className="h-4 w-4 text-yellow-500" />
      ) : (
        <Moon className="h-4 w-4 text-blue-600" />
      )}
      <span className="ml-2 hidden sm:inline font-medium">
        {isDark ? 'Light' : 'Dark'}
      </span>
    </Button>
  )
}

export default ThemeToggle

