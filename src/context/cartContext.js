import { useContext, createContext, useReducer } from 'react'
import { cartReducer, initialState } from '../reducers/cartReducer'
import { toast } from 'react-toastify';

const ErrorToast = () => toast.error('Item already in the Cart', {
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,

});

const addToCartToast = () => toast.success('Item added to Cart Successfully', {
  position: "bottom-center",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,

});

const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addToCart = (product) => {
    const existingItem = state.cart.find(item => item.id === product.id);
    if (existingItem) {
      ErrorToast()
      return
    }

    const updatedCart = state.cart.concat(product)
    addToCartToast()
    updatePrice(updatedCart)
    dispatch({
      type: "ADD_TO_CART",
      payload: updatedCart
    })
  }

  const removeFromCart = (product) => {
    const updatedCart = state.cart.filter(t => t.id !== product.id)
    updatePrice(updatedCart)
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: updatedCart
    })
  }

  const increaseQuantity = (product) => {
    const existingItem = state.cart.find(item => item.id === product.id);

    if (!existingItem) return

    const updatedQuantityItems = state.cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)
    updatePrice(updatedQuantityItems)
    dispatch({
      type: "INCREASE_QUANTITY",
      payload: updatedQuantityItems
    })
  }

  const decreaseQuantity = (product) => {
    const existingItem = state.cart.find(item => item.id === product.id);
    let updatedQuantity
    if (existingItem.quantity === 1) {
      return
    }

    updatedQuantity = state.cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity - 1 } : item)
    updatePrice(updatedQuantity)
    dispatch({
      type: "DECREASE_QUANTITY",
      payload: updatedQuantity
    })
  }

  const updatePrice = (products) => {
    let total = 0
    products.forEach(product => (total += product.quantity * product.price))

    dispatch({
      type: 'UPDATE_PRICE',
      payload: total
    })
  }

  const value = {
    cart: state.cart,
    price: state.price,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

const useCart = () => useContext(CartContext)

export { useCart, CartProvider }