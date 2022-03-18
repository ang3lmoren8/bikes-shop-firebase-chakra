import React from 'react'
import { Container } from '@chakra-ui/react'
import MainHeader from '../components/headers/MainHeader'

const MainLayout = ({ children }) => {
  return (
    <>
      <MainHeader />
      <Container maxW='container.xl'>{children}</Container>
    </>
  )
}

export default MainLayout
