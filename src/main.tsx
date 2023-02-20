import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './scss/index.scss';
import './app/server';
import { Provider } from 'react-redux';
import { store } from '@redux/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
