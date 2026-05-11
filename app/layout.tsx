import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: "--font-geist"
});
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: "--font-geist-mono"
});

export const metadata: Metadata = {
  title: 'MUDZAP | Central Oficial - Bot de Coleção para WhatsApp',
  description: 'MUDZAP - Seu mundo. Suas regras. Suas coleções. O bot de coleção, progressão e comunidade para WhatsApp. Colecione personagens, evolua, compita em rankings e eventos!',
  keywords: ['MUDZAP', 'bot WhatsApp', 'coleção', 'personagens', 'personagens', 'comunidade', 'jogo', 'Brasil'],
  authors: [{ name: 'MUDZAP' }],
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: 'MUDZAP | Central Oficial',
    description: 'Seu mundo. Suas regras. Suas coleções. O bot de coleção para WhatsApp.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MUDZAP | Central Oficial',
    description: 'Seu mundo. Suas regras. Suas coleções.',
  },
}

export const viewport: Viewport = {
  themeColor: '#e91e8c',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${geist.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
