import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
  },

  body: {
    backgroundColor: '$gray900',
    color: '$gray100',
    
    '-webkit-font-smothing': 'antialiased',
  },

  'body, input, textarea, button': {
    gontFamily: 'Roboto',
    fontWeight: 400,
  },
})
