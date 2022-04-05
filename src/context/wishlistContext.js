import { useContext, createContext, useReducer } from "react"
import { initialState, wishlistReducer } from "../reducers/wishlistReducer"
import { addToWishlistToast, itemAlreadyInWishlist, removeFromWishlistToast } from "../utils/toasts";



const WishListContext = createContext()

const WishListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, initialState)

  const addToWishlist = (product) => {
    const existingItem = state.wishlist.find(item => item.name === product.name);
    if (existingItem) {
      itemAlreadyInWishlist()
      return
    }
    const updatedWishlist = state.wishlist.concat(product)
    addToWishlistToast()
    dispatch({
      type: "ADD_TO_WISHLIST",
      payload: updatedWishlist
    })
  }

  const removeFromWishlist = (product) => {
    const updatedWishlist = state.wishlist.filter(item => item.id !== product.id)
    dispatch({
      type: "REMOVE_FROM_WISHLIST",
      payload: updatedWishlist
    })
    removeFromWishlistToast()
  }

  const value = {
    wishlist: state.wishlist,
    addToWishlist,
    removeFromWishlist
  }

  return (
    <WishListContext.Provider value={value}>
      {children}
    </WishListContext.Provider>
  )
}

const useWishlist = () => useContext(WishListContext)

export { useWishlist, WishListProvider }