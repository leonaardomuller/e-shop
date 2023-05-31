import { GetStaticProps } from 'next'

import Image from 'next/image'

import Head from 'next/head'

import { stripe } from '../lib/stripe'
import Stripe from 'stripe'

import { HomeContainer, Product } from '../styles/pages/home'
import Link from 'next/link'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
    isActive: boolean
  }[]
}

export default function Home({ products }: HomeProps) {


  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer>
        {products.map((product) =>
          product.isActive ? (
            <Link key={product.id} href={`/product/${product.id}`}>
              <Product>
                <Image
                  src={product.imageUrl}
                  width={300}
                  height={300}
                  quality="70"
                  alt=""
                />
                <footer>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </footer>
              </Product>
            </Link>
          ) : null,
        )}
      </HomeContainer>
    </>
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
      }).format(price?.unit_amount / 100),
      isActive: product.active,
    }
  })
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, //2 hours
  }
}
