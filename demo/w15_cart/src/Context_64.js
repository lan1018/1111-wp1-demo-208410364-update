import React, { useState, useContext, useReducer, useEffect, Children } from 'react';
import Reducer_64 from './Reducer_64';

import cartItems from './data';

const AppContext_64 = React.createContext();

const initialState = {
  loading: false,
  cart: cartItems,
  amount: 4,
  total: 999.9
}

const AppProvider_64 = ({children}) => {
  const [state, dispatch] = useReducer(Reducer_64, initialState);

  useEffect(()=> {
    dispatch({ type: 'GET_TOTALS'});
  },[state.cart])
  

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  }

  const increase = (id) => {
    dispatch({ type: 'INCREASE', payload: id });
  }

  return <AppContext_64.Provider value={{...state, clearCart, increase}}>
     {children}
  </AppContext_64.Provider>
};

const useGlobalContext_64 = () => {
  return useContext(AppContext_64);
}

export { AppProvider_64 , useGlobalContext_64 } ;
