import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '0.1rem 5rem',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: '#27a8ad',
  '@media(max-width: 768px)': {
    padding: '1rem 3rem',
    display: 'flex',
    justifyContent: 'center'
  },
})

export const Navigation = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  gap: 20,

  a: {
    textDecoration: 'none'
  },
  h2: {
    color: '$gray100',
    textDecoration: 'none'

  },


})

