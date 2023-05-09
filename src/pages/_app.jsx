import { Footer } from '@/components/Footer'
import { Header, NewHeader } from '@/components/Header'
import '@/styles/tailwind.css'
import 'focus-visible'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      {/* <NewHeader /> */}
      <Component {...pageProps} />
      <Footer BG={'bg-gray-50'} />
    </>
  )
}
