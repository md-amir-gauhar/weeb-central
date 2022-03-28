const initialState = {
  wishlist: []
}

const wishlistReducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case "ADD_TO_WISHLIST":
      console.log("added", payload);
      return {
        ...state,
        wishlist: payload
      }
    case "REMOVE_FROM_WISHLIST":
      console.log("removed", payload);
      return {
        ...state,
        wishlist: payload
      }
    default:
      return state
  }
}

export { wishlistReducer, initialState };