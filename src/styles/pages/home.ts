import { styled } from '..'

export const HomeContainer = styled('main', {
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  marginRight: 'auto',
  minHeight: 456,
  '@media (max-width: 768px)': {
    width: '80%',
    maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
    flexDirection: 'column',
    justifyContent: 'center',
  },
})

export const Product = styled('div', {
  background: ' #F58735',
  borderRadius: 8,
  cursor: 'pointer',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '1rem',
  img: {
    objectFit: 'conver',
  },

  footer: {
    height: '20%',
    position: 'absolute',
    bottom: '0.25rem',
    left: '0.25rem',
    right: '0.25rem',
    padding: '2rem',
    borderRadius: 6,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    '@media (min-width: 768px)': {
      transform: 'translateY(110%)',
      opacity: 0,
    },
    '@media (max-width: 768px)': {
      padding: '0.5rem',
      fontSize: '0.9rem',
    },

    transition: 'all 0.2s ease-in-out',
    strong: {
      fontSize: '$lg',
      color: '$gray100',
    },

    span: {
      fontSize: '$xl',
      fontWeight: 'bold',
      color: '$green300',
    },
  },

  '&:hover': {
    footer: {
      transform: 'translateY(0%)',
      opacity: 1,
    },
  },
})
