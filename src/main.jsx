import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { StateContextProvider } from './assets/StateContext/StateContext';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateContextProvider>
    <BrowserRouter>
     <App />
    </BrowserRouter>
    </StateContextProvider>
   

  </React.StrictMode>,
)
