import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import theme from  './utils/theme.js'

import { ThemeProvider } from '@mui/material/styles'
import ThemeValuesProvider from './context/theme-values.component.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ThemeValuesProvider>
          <App />
      </ThemeValuesProvider>       
    </ThemeProvider>
  </React.StrictMode>
)
