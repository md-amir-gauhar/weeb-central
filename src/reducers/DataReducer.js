const initialState = {
  products: [],
  category: {},
  sortByPrice: "",
  sortByRating: "",
  priceRange: ""
}

const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case "INITIAL_PRODUCTS":
      return {
        ...state,
        products: payload
      }
    case "INITIAL_CATEGORIES":
      return {
        ...state,
        category: payload
      }
    case "PRICE_RANGE":
      return {
        ...state,
        priceRange: payload
      }
    default:
      return state
  }
}

export { dataReducer, initialState }