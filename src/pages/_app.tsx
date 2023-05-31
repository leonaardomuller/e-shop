import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import logoImage from '../assets/logo.svg'
import Shirt1 from '../assets/shirts/Shirt1.png'
import { Container, Header } from '../styles/pages/app'
// import Image from 'next/image'
import Image from 'next/future/image'
import Link from 'next/link'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Link href="/">
          <Image src={logoImage} alt="" />
        </Link>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
