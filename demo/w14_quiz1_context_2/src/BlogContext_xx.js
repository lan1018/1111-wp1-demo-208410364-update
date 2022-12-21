import React, { useState, useEffect, useContext, useReducer } from "react";
import data from "./blogData_xx";
import Alert_xx from "./components/Alert_xx";
import BlogList_xx from "./components/BlogList_xx";

import Reducer_64 from "./Reducer_64";

const BlogContext_xx = React.createContext();

const initialState = {
  loading: true,
  blogs: data,
  alert: {
    show:false, 
    msg: "", 
    type: ""
  }
}

const BlogContextProvider_xx = ({children}) => {
  const [state, dispatch] = useReducer(Reducer_64, initialState); 

  const showAlert = (show = false, msg = "", type = "") => {
    // setAlert({ show, msg, type });
    // dispatch({ type: 'SHOW_ALERT',payload: { show: true,
    // msg: 'blog removed', type: 'danger'} })
  };

  console.log("blogs", state.blogs);

  const removeItem = (id) => {
    // showAlert(true, "blog removed", "danger");
    dispatch({ type: 'REMOVE_ITEM',payload: { show, msg, type} })
  };

  const clearBlogs = () => {
    // showAlert(true, "empty all blogs", "danger");
    // setBlogs([]);
  };

  const filterItems = (category) => {
    if (category === "all") {
      // setBlogs(data);
    } else {
      const newBlogs = data.filter((blog) => blog.category === category);
      // setBlogs(newBlogs);
    }
  };

  return (
    <BlogContext_xx.Provider value={{...state, removeItem, clearBlogs, filterItems, showAlert}}>
     {children}
    </BlogContext_xx.Provider>
  );
  };


const useBlogContext_xx = () => {
  return  useContext(BlogContext_xx);
};

export { BlogContextProvider_xx, useBlogContext_xx };
