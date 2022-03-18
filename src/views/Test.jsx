import React from 'react'
import { Box, Code, Grid, Image, Link, Text, VStack } from '@chakra-ui/react'
import { ColorModeSwitcher } from '../components/util/ColorModeSwitcher'
import logo from '../assets/img/logo.svg'

const Test = () => {
  return (
    <Box fontSize='xl'>
      <Grid minH='100vh' p={3}>
        <ColorModeSwitcher justifySelf='flex-end' />
        <VStack spacing={8}>
          <Image src={logo} maxH='50vh' />
          <Text>
            Edit <Code fontSize='xl'>src/App.js</Code> and save to reload.
          </Text>
          <Link
            color='teal.500'
            href='https://chakra-ui.com'
            fontSize='2xl'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn Chakra
          </Link>
        </VStack>
      </Grid>
    </Box>
  )
}

export default Test
