const initialState = {
  cart: [],
  price: 0
}

const cartReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: payload
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: payload
      }
    case "INCREASE_QUANTITY":
      return {
        ...state,
        cart: payload
      }
    case "DECREASE_QUANTITY":
      return {
        ...state,
        cart: payload
      }
    case 'UPDATE_PRICE':
      console.log(payload)
      return {
        ...state,
        price: payload
      }
    default:
      return state
  }
}

export { initialState, cartReducer }