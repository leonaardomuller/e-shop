import { AppProps } from 'next/app'
import { globalStyles } from '../styles/global'

import logoImage from '../assets/amar-logo.svg'
import Shirt1 from '../assets/shirts/Shirt1.png'
import { Container, Header, Navigation } from '../styles/pages/app'
// import Image from 'next/image'
import Image from 'next/future/image'
import NavLink from 'next/link'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <NavLink href="/">
          <Image src={logoImage} alt="" />
        </NavLink>
        <Navigation>
          <NavLink href="about">
            <h2>Sobre</h2>
          </NavLink>

          <NavLink href="shop">
            <h2>Loja Virtual</h2>
          </NavLink>
          <NavLink href="donation">
            <h2>Faça uma Doação</h2>
          </NavLink>
        </Navigation>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}
