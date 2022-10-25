import { styled } from '../styles'

import Image from 'next/image'
import Shirt1 from '../assets/shirts/Shirt1.png'
import Shirt2 from '../assets/shirts/Shirt2.png'
import Shirt3 from '../assets/shirts/Shirt3.png'
import Shirt4 from '../assets/shirts/Shirt4.png'

import { HomeContainer, Product } from '../styles/pages/home'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={Shirt1} quality="100" alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={Shirt3} quality="100" alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 89,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
