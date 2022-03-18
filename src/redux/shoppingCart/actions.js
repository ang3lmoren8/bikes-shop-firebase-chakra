import {
  ADD_TO_CART,
  CHANGE_PRODUCT_QUANTITY,
  REMOVE_FROM_CART,
  RESET_SHOPPING_CART,
} from './constants'

export const addToCart = (product, quantity) => ({
  type: ADD_TO_CART,
  cartItem: { product, quantity },
})

export const changeProductQuantity = (productId, quantity) => ({
  type: CHANGE_PRODUCT_QUANTITY,
  cartItem: { productId, quantity },
})

export const removeFromCart = productId => ({
  type: REMOVE_FROM_CART,
  productId,
})

export const resetShoppingCart = () => ({
  type: RESET_SHOPPING_CART,
})
