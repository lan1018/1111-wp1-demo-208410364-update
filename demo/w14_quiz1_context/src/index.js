import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App_64 from './App_64';
import { BlogContextProvider_64 } from './BlogContext_64';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BlogContextProvider_64>
      <App_64 />
    </BlogContextProvider_64>
  </React.StrictMode>
);