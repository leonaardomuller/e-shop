import { useKeenSlider } from 'keen-slider/react'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import Shirt1 from '../assets/shirts/Shirt1.png'
import Shirt2 from '../assets/shirts/Shirt2.png'
import Shirt3 from '../assets/shirts/Shirt3.png'
import Shirt4 from '../assets/shirts/Shirt4.png'

import { HomeContainer, Product } from '../styles/pages/home'

export default function Home(props) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      <pre>{JSON.stringify(props.list)}</pre>
      <Product className="keen-slider__slide">
        <Image src={Shirt1} width={520} height={480} quality="100" alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={Shirt2} width={520} height={480} quality="100" alt="" />
        <footer>
          <strong>Camiseta Y</strong>
          <span>R$ 81,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={Shirt3} width={520} height={480} quality="100" alt="" />
        <footer>
          <strong>Camiseta Z</strong>
          <span>R$ 89,90</span>
        </footer>
      </Product>

      <Product className="keen-slider__slide">
        <Image src={Shirt4} width={520} height={480} quality="100" alt="" />
        <footer>
          <strong>Camiseta Z</strong>
          <s>R$ 89,90</s>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}

export const getServerSideProps = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  return {
    props: {
      list: [1, 2, 3],
    },
  }
}
