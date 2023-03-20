import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { UserInfoContextProvider } from './components/context/UserInfoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserInfoContextProvider>
    <App />
    </UserInfoContextProvider>
  </React.StrictMode>
);