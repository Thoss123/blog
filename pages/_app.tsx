import React from 'react'
import Layout from '../components/Layout'
import '@/styles/globals.scss'
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return( <Layout>
      <Component {...pageProps} />
    </Layout>)
}
