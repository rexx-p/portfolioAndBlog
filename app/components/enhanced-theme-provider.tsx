"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { useEffect, useState } from "react"

// Define theme combinations (light and dark pairs)
const themeCombinations = [
  {
    // Classic Corporate Blue - Inspired by IBM, Dell
    light: {
      primary: "from-blue-600 to-blue-700",
      secondary: "from-blue-500 to-blue-600",
      background: "from-slate-50 via-blue-50 to-slate-50",
      text: "text-slate-700",
      accent: "bg-blue-600"
    },
    dark: {
      primary: "from-blue-400 to-blue-500",
      secondary: "from-blue-600 to-blue-700",
      background: "from-slate-900 via-blue-900 to-slate-900",
      text: "text-slate-200",
      accent: "bg-blue-400"
    }
  },
  {
    // Modern Orange - Inspired by Hubspot
    light: {
      primary: "from-orange-500 to-orange-600",
      secondary: "from-orange-400 to-orange-500",
      background: "from-neutral-50 via-orange-50 to-neutral-50",
      text: "text-neutral-700",
      accent: "bg-orange-500"
    },
    dark: {
      primary: "from-orange-400 to-orange-500",
      secondary: "from-orange-500 to-orange-600",
      background: "from-neutral-900 via-orange-900 to-neutral-900",
      text: "text-neutral-200",
      accent: "bg-orange-400"
    }
  },
  {
    // Tech Green - Inspired by Spotify
    light: {
      primary: "from-emerald-500 to-emerald-600",
      secondary: "from-emerald-400 to-emerald-500",
      background: "from-gray-50 via-emerald-50 to-gray-50",
      text: "text-gray-700",
      accent: "bg-emerald-500"
    },
    dark: {
      primary: "from-emerald-400 to-emerald-500",
      secondary: "from-emerald-500 to-emerald-600",
      background: "from-gray-900 via-emerald-900 to-gray-900",
      text: "text-gray-200",
      accent: "bg-emerald-400"
    }
  },
  {
    // Elegant Purple - Inspired by Accenture
    light: {
      primary: "from-purple-600 to-purple-700",
      secondary: "from-purple-500 to-purple-600",
      background: "from-zinc-50 via-purple-50 to-zinc-50",
      text: "text-zinc-700",
      accent: "bg-purple-600"
    },
    dark: {
      primary: "from-purple-400 to-purple-500",
      secondary: "from-purple-600 to-purple-700",
      background: "from-zinc-900 via-purple-900 to-zinc-900",
      text: "text-zinc-200",
      accent: "bg-purple-400"
    }
  },
  {
    // Vibrant Red - Inspired by Adobe
    light: {
      primary: "from-red-600 to-red-700",
      secondary: "from-red-500 to-red-600",
      background: "from-neutral-50 via-red-50 to-neutral-50",
      text: "text-neutral-700",
      accent: "bg-red-600"
    },
    dark: {
      primary: "from-red-500 to-red-600",
      secondary: "from-red-600 to-red-700",
      background: "from-neutral-900 via-red-900 to-neutral-900",
      text: "text-neutral-200",
      accent: "bg-red-500"
    }
  },
  {
    // Warm Yellow - Inspired by CAT
    light: {
      primary: "from-amber-500 to-amber-600",
      secondary: "from-amber-400 to-amber-500",
      background: "from-stone-50 via-amber-50 to-stone-50",
      text: "text-stone-700",
      accent: "bg-amber-500"
    },
    dark: {
      primary: "from-amber-400 to-amber-500",
      secondary: "from-amber-500 to-amber-600",
      background: "from-stone-900 via-amber-900 to-stone-900",
      text: "text-stone-200",
      accent: "bg-amber-400"
    }
  },
  {
    // Ocean Teal - Inspired by Siemens
    light: {
      primary: "from-teal-600 to-teal-700",
      secondary: "from-teal-500 to-teal-600",
      background: "from-slate-50 via-teal-50 to-slate-50",
      text: "text-slate-700",
      accent: "bg-teal-600"
    },
    dark: {
      primary: "from-teal-400 to-teal-500",
      secondary: "from-teal-600 to-teal-700",
      background: "from-slate-900 via-teal-900 to-slate-900",
      text: "text-slate-200",
      accent: "bg-teal-400"
    }
  },
  {
    // Modern Indigo - Inspired by Salesforce
    light: {
      primary: "from-indigo-600 to-indigo-700",
      secondary: "from-indigo-500 to-indigo-600",
      background: "from-gray-50 via-indigo-50 to-gray-50",
      text: "text-gray-700",
      accent: "bg-indigo-600"
    },
    dark: {
      primary: "from-indigo-400 to-indigo-500",
      secondary: "from-indigo-600 to-indigo-700",
      background: "from-gray-900 via-indigo-900 to-gray-900",
      text: "text-gray-200",
      accent: "bg-indigo-400"
    }
  },
  {
    // Coral Pink - Inspired by Asana
    light: {
      primary: "from-rose-500 to-rose-600",
      secondary: "from-rose-400 to-rose-500",
      background: "from-neutral-50 via-rose-50 to-neutral-50",
      text: "text-neutral-700",
      accent: "bg-rose-500"
    },
    dark: {
      primary: "from-rose-400 to-rose-500",
      secondary: "from-rose-500 to-rose-600",
      background: "from-neutral-900 via-rose-900 to-neutral-900",
      text: "text-neutral-200",
      accent: "bg-rose-400"
    }
  },
  {
    // Deep Cyan - Inspired by Intel
    light: {
      primary: "from-cyan-600 to-cyan-700",
      secondary: "from-cyan-500 to-cyan-600",
      background: "from-zinc-50 via-cyan-50 to-zinc-50",
      text: "text-zinc-700",
      accent: "bg-cyan-600"
    },
    dark: {
      primary: "from-cyan-400 to-cyan-500",
      secondary: "from-cyan-600 to-cyan-700",
      background: "from-zinc-900 via-cyan-900 to-zinc-900",
      text: "text-zinc-200",
      accent: "bg-cyan-400"
    }
  }
]

// Define font combinations
const fontCombinations = [
  {
    heading: "font-poppins",
    body: "font-inter"
  },
  {
    heading: "font-montserrat",
    body: "font-roboto"
  },
  {
    heading: "font-playfair",
    body: "font-lato"
  }
]

// Function to get random theme and font
const getRandomThemeAndFont = () => {
  const randomTheme = themeCombinations[Math.floor(Math.random() * themeCombinations.length)]
  const randomFont = fontCombinations[Math.floor(Math.random() * fontCombinations.length)]
  console.log('Generated random theme:', randomTheme)
  console.log('Generated random font:', randomFont)
  return { theme: randomTheme, font: randomFont }
}

export function EnhancedThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const [currentTheme, setCurrentTheme] = useState<typeof themeCombinations[0] | null>(null)
  const [currentFont, setCurrentFont] = useState<typeof fontCombinations[0] | null>(null)
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    // Generate new random theme and font on mount
    const { theme, font } = getRandomThemeAndFont()
    console.log('Setting initial theme and font:', { theme, font })
    
    setCurrentTheme(theme)
    setCurrentFont(font)
    
    // Store in sessionStorage
    try {
      sessionStorage.setItem('randomTheme', JSON.stringify(theme))
      sessionStorage.setItem('randomFont', JSON.stringify(font))
      console.log('Successfully stored theme and font in sessionStorage')
    } catch (error) {
      console.error('Failed to store theme in sessionStorage:', error)
    }

    // Check system dark mode preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setThemeMode(prefersDark ? 'dark' : 'light')
    console.log('Initial theme mode:', prefersDark ? 'dark' : 'light')

    setMounted(true)
  }, [])

  // Listen for theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e: MediaQueryListEvent) => {
      setThemeMode(e.matches ? 'dark' : 'light')
      console.log('Theme mode changed to:', e.matches ? 'dark' : 'light')
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Prevent hydration mismatch
  if (!mounted || !currentTheme || !currentFont) {
    console.log('Provider not ready:', { mounted, currentTheme: !!currentTheme, currentFont: !!currentFont })
    return null
  }

  // Get the current theme colors based on mode
  const activeThemeColors = themeMode === 'dark' ? currentTheme.dark : currentTheme.light
  console.log('Active theme colors:', activeThemeColors)

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      value={{
        light: "light",
        dark: "dark",
        system: "system"
      }}
    >
      <div 
        className={`
          theme-provider 
          ${currentFont.body}
          bg-gradient-to-br ${activeThemeColors.background}
          ${activeThemeColors.text}
          transition-colors duration-300
        `} 
        data-theme-colors={JSON.stringify(currentTheme)}
        style={{minHeight: '100vh'}}
      >
        {children}
      </div>
    </NextThemesProvider>
  )
}

// Export a hook to access current theme and font
export function useEnhancedTheme() {
  const [theme, setTheme] = useState<any>(null)
  const [font, setFont] = useState<any>(null)
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light')

  useEffect(() => {
    const themeProvider = document.querySelector('.theme-provider')
    if (themeProvider) {
      try {
        const themeColors = JSON.parse(themeProvider.getAttribute('data-theme-colors') || '{}')
        const fontClasses = {
          body: Array.from(themeProvider.classList).find(cls => cls.startsWith('font-'))
        }
        const isDark = document.documentElement.classList.contains('dark')
        
        setTheme(themeColors)
        setFont(fontClasses)
        setThemeMode(isDark ? 'dark' : 'light')
        
        console.log('useEnhancedTheme hook updated:', {
          themeColors,
          fontClasses,
          isDark
        })
      } catch (error) {
        console.error('Error in useEnhancedTheme hook:', error)
      }
    }
  }, [])

  // Return both theme colors and current mode
  return { 
    theme: theme?.[themeMode] || theme?.light, 
    font,
    mode: themeMode
  }
} 