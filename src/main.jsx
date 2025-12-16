import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { CustomThemeProvider } from './context/ThemeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  </BrowserRouter>
);
