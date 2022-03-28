import { createContext, useContext, useReducer } from 'react'
import { addressReducer, initialState } from '../reducers/addressReducer'

const AddressContext = createContext()

const AddressProvider = ({ children }) => {
  const [state, dispatch] = useReducer(addressReducer, initialState)

  const value = {
    address: state.address,
    dispatch
  }
  return (
    <AddressContext.Provider value={value}>
      {children}
    </AddressContext.Provider>
  )
}

const useAddress = () => useContext(AddressContext)

export { useAddress, AddressProvider }