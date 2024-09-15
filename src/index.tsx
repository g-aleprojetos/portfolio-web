import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {WebRoutes} from 'routes/webRoutes';
import {BackgroundProvider} from './context/background';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BackgroundProvider>
      <WebRoutes />
    </BackgroundProvider>
  </React.StrictMode>,
);
