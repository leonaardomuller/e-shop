import { useKeenSlider } from 'keen-slider/react'
import { GetStaticProps } from 'next'

import Image from 'next/image'
import { useEffect, useState } from 'react'

import Shirt1 from '../assets/shirts/Shirt1.png'
import Shirt2 from '../assets/shirts/Shirt2.png'
import Shirt3 from '../assets/shirts/Shirt3.png'
import Shirt4 from '../assets/shirts/Shirt4.png'

import { stripe } from '../lib/stripe'
import Stripe from 'stripe'

import { HomeContainer, Product } from '../styles/pages/home'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => (
        <Product key={product.id} className="keen-slider__slide">
          <Image
            src={product.imageUrl}
            width={300}
            height={300}
            quality="100"
            alt=""
          />
          <footer>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </footer>
        </Product>
      ))}
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })
  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100),
    }
  })
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, //2 hours
  }
}
