import Layout from '@/components/Layout/layout'
import '@/styles/globals.css'
import dynamic from 'next/dynamic'

// Dynamically import WebGL component to avoid SSR issues
const WebGLCursorEffect = dynamic(
  () => import('@/components/Webgl/webgl'),
  { ssr: false }
)

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <WebGLCursorEffect />
      <Component {...pageProps} />
    </Layout>
  )
}