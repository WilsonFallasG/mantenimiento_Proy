'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Módulo mantenimiento',
  description: 'Módulo encargado de mantenimiento de unidades',
}

export default function RootLayout({ children }) {
  return (
  
    <html lang="en">
      
      <body className={inter.className}><header><Navbar /></header>{children}</body>
    </html>
  );
}
