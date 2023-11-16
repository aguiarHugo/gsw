import { Prompt } from 'next/font/google'
import './globals.css'

const prompt = Prompt({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '700', '900'],
  display: 'swap',
})

export const metadata = {
  title: 'GWM',
  description: 'Compre seu HAVAL H6 HEV 2024, personalizado e com o melhor preço do mercado',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={prompt.className}>{children}</body>
    </html>
  )
}