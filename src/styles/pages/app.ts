import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  maxWidth: 'calc(100vw - ((100vw - 1180px) / 2))',
  marginLeft: 'auto',
  marginRight: 'auto',

  '@media(max-width: 768px)': {
    padding: '1rem 3rem',
    display: 'flex',
    justifyContent: 'center',
  },
})
