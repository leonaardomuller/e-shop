import Head from 'next/head'
import React, { useState } from 'react'
import { styled } from '@stitches/react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import Image from 'next/image'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const images = [image1, image2, image3]

const CarouselContainer = styled('div', {
  width: '100%',
  minHeight: '1039px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const CarouselButton = styled('button', {
  position: 'absolute',
  background: '#fff',
  borderRadius: '50%',
  border: 'none',
  padding: '10px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 2,
  fontSize: '2em',

  variants: {
    direction: {
      left: {
        left: '10px',
      },
      right: {
        right: '10px',
      },
    },
  },
})

export default function Product() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    const newIndex = currentImageIndex + 1
    setCurrentImageIndex(newIndex >= images.length ? 0 : newIndex)
  }

  const prevImage = () => {
    const newIndex = currentImageIndex - 1
    setCurrentImageIndex(newIndex < 0 ? images.length - 1 : newIndex)
  }

  return (
    <>
      <Head>
        <title>Ong Amar</title>
      </Head>

      <CarouselContainer>
        <CarouselButton onClick={prevImage} direction="left">
          <FiChevronLeft />
        </CarouselButton>

        <Image src={images[currentImageIndex]} alt="carousel" height={1039} />

        <CarouselButton onClick={nextImage} direction="right">
          <FiChevronRight />
        </CarouselButton>
      </CarouselContainer>
    </>
  )
}
