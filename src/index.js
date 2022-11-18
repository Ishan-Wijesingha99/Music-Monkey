import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import './index.css'

import { Provider } from 'react-redux'

import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './redux/features/playerSlice';

import { shazamCoreApi } from './redux/services/shazamCore';
import { BrowserRouter as Router } from 'react-router-dom';



export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware)
});



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
)

