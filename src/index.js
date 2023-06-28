import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'front-end/components/App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { store } from 'front-end/redux/storage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter basename="pet-project-first-beta">
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
