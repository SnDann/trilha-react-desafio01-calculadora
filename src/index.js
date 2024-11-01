
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { GlobalStyles } from './global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalStyles />,
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
