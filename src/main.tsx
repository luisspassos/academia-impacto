import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/main.scss';
import { DataIndexProvider } from './contexts/DataIndex.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DataIndexProvider>
      <App />
    </DataIndexProvider>
  </React.StrictMode>
);
