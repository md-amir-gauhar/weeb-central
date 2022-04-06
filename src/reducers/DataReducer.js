const initialState = {
  products: [],
  category: {},
  sortByPrice: "",
  sortByRating: "",
  priceRange: "",
}

const dataReducer = (state, { type, payload }) => {
  switch (type) {
    case "INITIAL_PRODUCTS":
      return {
        ...state,
        products: payload
      }
    case "INITIAL_CATEGORIES":
      const category = payload.reduce((acc, val) => ({
        ...acc,
        [`${val.categoryName}`]: false
      }), {})
      return {
        ...state,
        category: {
          ...state.category,
          ...category
        }
      }
    case "PRICE_RANGE":
      return {
        ...state,
        priceRange: payload
      }
    case "SORT_BY_RATING":
      return {
        ...state,
        sortByRating: payload
      }
    case "CATEGORIES":
      return {
        ...state,
        category: {
          ...state.category,
          ...payload
        }
      }
    case "SORT_BY_PRICE":
      return {
        ...state,
        sortByPrice: payload
      }
    case "CLEAR_ALL":
      const newObj = Object.keys(payload).reduce((accumulator, key) => {
        return { ...accumulator, [key]: false };
      }, {});
      return {
        ...state,
        category: {
          ...state.category,
          ...newObj
        },
        sortByPrice: "",
        sortByRating: "",
      }
    default:
      return state
  }
}

export { dataReducer, initialState }