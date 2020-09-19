import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

export const initialState = {
  result: "",
  operator: "",
  accumulator: "",
}

// The global context becomes a single source of truth
// Any child element can grab states from it
export const GlobalContext = createContext(initialState)
  
// The global provider gives children elements access to 
// the global context
export const GlobalProvider = ({ children }) => {
  // A reducer function enables the consumption and modification of states
  const [state, dispatch] = useReducer(AppReducer, initialState)

  return (
    <GlobalContext.Provider value={{...state, dispatch}}>
      {children}
    </GlobalContext.Provider>
  )
}