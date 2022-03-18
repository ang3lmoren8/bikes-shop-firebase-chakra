import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import ReduxApp from './redux/ReduxApp'
import RouterApp from './router/RouterApp'
import theme from './theme/theme'

import './theme/fonts.css'

function App() {
  return (
    <ReduxApp>
      <ChakraProvider theme={theme}>
        <RouterApp />
      </ChakraProvider>
    </ReduxApp>
  )
}

export default App
