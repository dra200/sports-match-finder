import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { AuthProvider } from "@/contexts/AuthContext"
import Layout from "@/components/Layout"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AuthProvider>
  )
}

"dependencies": {
  "next": "^12.0.0",
  "react": "^17.0.2",
  "react-dom": "^17.0.2"
}

