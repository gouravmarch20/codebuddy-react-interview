import { configureStore } from '@reduxjs/toolkit'
import { userReducer } from '../slices'

const store = configureStore({
  reducer: { userDetails : userReducer  }
})

export { store }
