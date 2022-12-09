import React, { useState, useContext, Children } from 'react';
import data from './blogData_64';
import Alert_64 from './components/Alert_64';
import BlogList_64 from './components/BlogList_64';

const BlogContext_64 = React.createContext();

const BlogContextProvider_64 = () => {
  const [blogs, setBlogs] = useState(data);
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  });

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  console.log('blogs', blogs);

  const removeItem = (id) => {
    showAlert(true, 'blog removed', 'danger');
    setBlogs(blogs.filter((blog) => blog.id !== id));
  }

  const clearBlogs = () => {
    showAlert(true, 'empty all blogs', 'danger');
    setBlogs([]);
  }

  const filterItems = (category) => {
    if (category === 'all') {
      setBlogs(data);
    } else {
      const newItems = data.filter((blog) => blog.category
        === category);
      setBlogs(newItems);
    }
  }

  return (
    <BlogContext_64.Provider value={[blogs, alert, 
    removeItem, clearBlogs, filterItems, showAlert]}>
      {Children}
    </BlogContext_64.Provider>
  );
};

const useBlogContext_64 = () => {
  return useContext(BlogContext_64);
};

export { BlogContextProvider_64, useBlogContext_64 };
