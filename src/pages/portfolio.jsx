import Head from 'next/head'
import Image from 'next/image'

import NoContent from '@/components/NoContent'
import { Container } from '@/components/Container'

export default function Portfolio() {
  return (
    <>
      <Head>
        <title>Nitish PORFOLIO - SOMA LISA</title>
        <meta
          name="description"
          content="Things I’ve made trying to put my dent in the universe."
        />
      </Head>
      <Container>
        <NoContent
          message={{
            text: 'Portfolio under development',
            code: 503,
            theme: 'periwinkle',
          }}
        />
      </Container>
    </>
  )
}
