import NavBar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import getCurrentUser from './actions/getCurrentUser'
import Script from 'next/script'
import ToastProvider from '@/components/ToastProvider'


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar currentUser={currentUser}/>
        <ToastProvider />
        {children}
        <Script 
          // &autoload=false 집어넣어야지 보이더라구 2번째로 볼 때 더 톺아보자
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=8382464e8a99442effa2bd976f42f94e&libraries=services,clusterer&autoload=false"
        />
      </body>
    </html>
  )
}
