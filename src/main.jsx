import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Home from './pages/Home'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Home /> */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
