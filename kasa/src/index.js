import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Routers } from 'react-router-dom';
// selectionne l'élément racine de l'application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // React.strictMode sécurise pendant le développement de l'application en affichant des avertissements supplémentaires
  <React.StrictMode>
  <Routers>
    <App />
    </Routers>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
