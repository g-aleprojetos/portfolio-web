import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {Layout} from 'components/layout/Layout';
import {BackgroundProvider} from 'context/background';
import {App} from './pages/App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BackgroundProvider>
      <Layout>
        <App />
      </Layout>
    </BackgroundProvider>
  </React.StrictMode>,
);
