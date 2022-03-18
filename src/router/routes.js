import { Icon } from '@chakra-ui/react'
import { FiShoppingCart, FiHome } from 'react-icons/all'

export const storePath = '/'
export const shoppingCartPath = '/cart'

export const navRoutes = [
  {
    name: 'Shop',
    path: storePath,
    icon: <Icon as={FiHome} />,
  },
  {
    name: 'Shopping cart',
    path: shoppingCartPath,
    icon: <Icon as={FiShoppingCart} />,
  },
]
