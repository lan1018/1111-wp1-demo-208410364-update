import React, { useState, useEffect, useContext } from "react";
import data from "./blogData_xx";
import Alert_xx from "./components/Alert_xx";
import BlogList_xx from "./components/BlogList_xx";

import { useBlogContext_xx } from './BlogContext_xx';

const App_xx = () => {
  const {blogs, alert, removeItem, clearBlogs, filterItems, showAlert } = useBlogContext_xx();
  return (
    <section className="blogs">
      {alert.show && <Alert_xx {...alert} removeAlert={showAlert} />}
      <div className="section-title">
        <h2>CSS Grid using breakpoints</h2>
      </div>
      <div className="filter-container">
        <button
          type="button"
          className="filter-btn"
          onClick={() => filterItems("all")}
        >
          all
        </button>
        <button
          type="button"
          className="filter-btn"
          onClick={() => filterItems("lifestyle")}
        >
          lifestyle
        </button>
        <button
          type="button"
          className="filter-btn"
          onClick={() => filterItems("travel")}
        >
          travel
        </button>
      </div>
      <div className="blogs-center">
        <BlogList_xx key={1} />
      </div>
      <button className="clear-btn" onClick={clearBlogs}>
        clear all blogs
      </button>
    </section>
  );
};

export default App_xx;
