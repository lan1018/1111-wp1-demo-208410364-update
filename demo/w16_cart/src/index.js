import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App_64 from './App_64';

import { AppProvider_64 } from './Context_64';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider_64>
      <App_64 />
    </AppProvider_64>
  </React.StrictMode>
);
