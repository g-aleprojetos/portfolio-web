import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {WebRoutes} from 'routes/webRoutes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <WebRoutes />
  </React.StrictMode>,
);
