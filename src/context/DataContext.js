import { useReducer, createContext, useContext, useEffect } from 'react'
import { dataReducer, initialState } from '../reducers/DataReducer'
import axios from 'axios'

const DataContext = createContext()

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, initialState)

  useEffect(() => {
    (async () => {
      try {
        const { data: products } = await axios.get('/api/products')
        dispatch({
          type: "INITIAL_PRODUCTS",
          payload: products.products
        })

        const { data: categories } = await axios.get('/api/categories')
        dispatch({
          type: "INITIAL_CATEGORIES",
          payload: categories.categories
        })
      } catch (err) {
        console.log(err.message);
      }
    })()
  }, [])

  const value = {
    products: state.products,
    categories: state.category
  }

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}

const useData = () => useContext(DataContext)

export {useData, DataProvider}