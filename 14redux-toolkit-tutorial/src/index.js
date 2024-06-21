import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
// suzdavane na store. Napravihme go po malko po-razlichen nachin ot videoto, zashtoto davashe greshla. Vyv videoto instruktoryt izpolzvashe ReactDOM, vmesto createRoot
const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
