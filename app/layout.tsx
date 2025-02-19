import type { Metadata } from "next"
import "./globals.css"
import { EnhancedThemeProvider } from "./components/enhanced-theme-provider"
import { ModeToggle } from "./components/mode-toggle"
import { inter, poppins, montserrat, roboto, playfair, lato, myFont } from "./fonts"

export const metadata: Metadata = {
  title: "Rajesh Kumar - Senior Software Engineer",
  description: "Portfolio of Rajesh Kumar, a Senior Software Engineer with expertise in AWS, MERN stack, and microservices architecture.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${myFont.variable} ${inter.variable} ${poppins.variable} ${montserrat.variable} ${roboto.variable} ${playfair.variable} ${lato.variable}`}>
        <EnhancedThemeProvider>
          <div className="fixed top-4 right-4 z-50">
            <ModeToggle />
          </div>
          {children}  
        </EnhancedThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'