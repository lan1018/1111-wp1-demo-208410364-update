import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App_xx from "./App_xx";
import { BlogContextProvider_xx } from './BlogContext_xx'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BlogContextProvider_xx>
      <App_xx />
    </BlogContextProvider_xx>
  </React.StrictMode>
);
