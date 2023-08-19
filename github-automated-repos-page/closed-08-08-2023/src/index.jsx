import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import App from '../src/App';
import { RoutesWeb } from './routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <App />
  </React.StrictMode>
);

