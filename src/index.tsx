import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {WebRoutes} from 'routes/webRoutes';
import {BackgroundProvider} from './context/background';
import {CurrentPageProvider} from './context/routesContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BackgroundProvider>
      <CurrentPageProvider>
        <WebRoutes />
      </CurrentPageProvider>
    </BackgroundProvider>
  </React.StrictMode>,
);
