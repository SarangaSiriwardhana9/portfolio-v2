// app/layout.tsx
import '@/styles/global.css'
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'

const outfit = Outfit({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: 'Saranga Siriwardhana | Full Stack Developer',
  description: 'BSc (Hons) Software Engineering Student | Full Stack Developer specializing in modern web applications',
  keywords: 'Full Stack Developer, Software Engineer, React, Next.js, TypeScript, Portfolio',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={outfit.variable}>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}