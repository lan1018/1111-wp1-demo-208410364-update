import React, { useState, useContext, useReducer, useEffect, Children } from 'react';
import Reducer_64 from './Reducer_64';

const url = 'https://course-api.com/react-useReducer-cart-project';

const AppContext_64 = React.createContext();

const initialState = {
  loading: true,
  cart: [],
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

  //2022-12-21 
  const fetchData= async () => {
    dispatch({ type: 'LOADING' });
    const response = await fetch(url);
    const cart = await response.json();
    console.log('cart', cart);
    dispatch({ type: 'DISPLAY_ITEMS', payload: cart})
  }

  useEffect(()=>{
    fetchData();
  },[]);

  return <AppContext_64.Provider value={{...state, clearCart, increase}}>
     {children}
  </AppContext_64.Provider>
};

const useGlobalContext_64 = () => {
  return useContext(AppContext_64);
}

export { AppProvider_64 , useGlobalContext_64 } ;
