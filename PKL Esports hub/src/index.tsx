import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Get the root element from public/index.html
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Root element not found. Make sure #root exists in public/index.html");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
