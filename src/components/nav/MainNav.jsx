import React from 'react'
import { Box, List, ListItem } from '@chakra-ui/react'
import { navRoutes } from '../../router/routes'
import { Link } from 'react-router-dom'

const MainNav = () => {
  return (
    <Box as='nav'>
      <List d='flex'>
        {navRoutes.map(navRoute => (
          <Link to={navRoute.path} key={navRoute.path}>
            <ListItem
              fontSize='lg'
              fontFamily='Nunito'
              mr={5}
              d='flex'
              alignItems='center'
              _hover={{
                color: 'teal.300',
              }}
              _active={{
                color: 'teal.500',
              }}
            >
              {navRoute.icon}&nbsp;
              <Box as='span' d={{ base: 'none', md: 'inline' }}>
                {navRoute.name}
              </Box>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  )
}

export default MainNav
