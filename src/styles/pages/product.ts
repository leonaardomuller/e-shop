import { styled } from '..'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',
  maxWidth: 1180,
  margin: '0 auto',
  '@media(max-width: 768px)': {
    gridTemplateColumns: '1fr',
    gap: '2rem',
    padding: '1rem 3rem',
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,
  background: '#F58735',
  borderRadius: 8,
  padding: '0.25rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  img: {
    objectFit: 'cover',
  },
  '@media(max-width: 768px)': {
    height: 'auto',
    maxWidth: '100%',
  },
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '#F58735',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
    marginBottom: '2.5rem',
  },

  button: {
    marginTop: 'auto',
    backgroundColor:  '#F58735',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',
    transition: '0.2s',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '#FFB84C',
            
    },
  },

  '@media(max-width: 768px)': {
    h1: {
      fontSize: '$xl',
    },
    span: {
      fontSize: '$xl',
    },
    p: {
      fontSize: '$sm',
    },
    button: {
      fontSize: '$sm',
    },
  },
})
