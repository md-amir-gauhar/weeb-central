import { useContext, createContext, useReducer } from "react"
import { initialState, wishlistReducer } from "../reducers/wishlistReducer"
import { toast } from 'react-toastify';

const ErrorToast = () => toast.error('Item already in the wishlist', {
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,

});

const addToWishlistToast = () => toast.success('Item added to wishlist Successfully', {
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

const removeFromWishlistToast = () => toast.success('Item removed to wishlist Successfully', {
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
});

const WishListContext = createContext()

const WishListProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wishlistReducer, initialState)

  const addToWishlist = (product) => {
    const existingItem = state.wishlist.find(item => item.name === product.name);
    if (existingItem) {
      ErrorToast()
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