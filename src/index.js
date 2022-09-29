// Importações
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './pages/Header';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header title="App de Lara" />
    <App />
  </React.StrictMode>
);

reportWebVitals();
