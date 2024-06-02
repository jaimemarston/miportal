import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Importa el archivo de estilos de Tailwind CSS
import App from './App'; // Importa tu componente principal de la aplicación
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
