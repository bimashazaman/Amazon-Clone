import React, { createContext, useContext, useReducer } from 'react'

//prepares the data for the app

export const StateContext = createContext()

//provides the data to the app

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

//pulls the data from the app

export const useStateValue = () => useContext(StateContext)

export default StateProvider
