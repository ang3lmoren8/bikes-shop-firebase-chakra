import produce from 'immer'
import {
  ADD_TO_CART,
  CHANGE_PRODUCT_QUANTITY,
  REMOVE_FROM_CART,
  RESET_SHOPPING_CART,
} from './constants'

const initialState = {
  shoppingCart: [],
}

const findCartItemIndex = (cartList, productId) =>
  cartList.findIndex(item => item._id === productId)

const reducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case ADD_TO_CART:
        break
      case CHANGE_PRODUCT_QUANTITY:
        break
      case REMOVE_FROM_CART:
        break

      case RESET_SHOPPING_CART: {
        return initialState
      }
      default:
        break
    }
  })

export default reducer
