import React from 'react'
import { ColorModeSwitcher } from '../util/ColorModeSwitcher'
import { Box, Flex, Image, Spacer, Text } from '@chakra-ui/react'
import logo from '../../assets/img/logo.svg'
import MainNav from '../nav/MainNav'

const MainHeader = () => {
  return (
    <Box as='header' py={3} px={5}>
      <Flex alignItems='center'>
        <Box d='flex'>
          <Image src={logo} maxH={46} mr='2' />
          <Text alignSelf='center'>Chakra UI Shop</Text>
        </Box>
        <Spacer />
        <MainNav />
        <Box>
          <ColorModeSwitcher />
        </Box>
      </Flex>
    </Box>
  )
}

export default MainHeader
