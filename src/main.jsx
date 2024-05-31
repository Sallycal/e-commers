import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from "react-router-dom";

import{ECommersApp} from './ECommersApp'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter />  
   <ECommersApp />
   <BrowserRouter />
  </React.StrictMode>
)
