import { styled } from '@stitches/react'

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '4rem',
    lineHeight: 1.4,
    padding: '3rem',
  },

  a: {
    display: 'block',
    fontSize: '$lg',
    color: '#F58735',
    marginTop: '5rem',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '#FFB84C',
    },
  },
})
export const ImageContainer = styled('main', {
  width: '100%',
  maxWidth: 130,
  height: 145,
  backgroundColor: '#F58735',
  borderRadius: 8,
  padding: '0.25rem',
  marginTop: '4rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})
