import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
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

  // The dispatch functions are passed to the global provider
  // This way they can be called from any element
  function accumulate(payload) {
    dispatch({
      type: 'ACCUMULATE',
      payload
    })
  }

  // The 'type' is a convention to identify the function
  // in a switch statement. The payload is optional for dispatch
  function operate(payload) {
    dispatch({
      type: 'OPERATE',
      payload
    })
  }

  return (
    <GlobalContext.Provider value={{
      ...state,
      accumulate,
      operate
    }}>
      {children}
    </GlobalContext.Provider>
  )
}