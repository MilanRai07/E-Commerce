import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainRouter from './MainRouter'
import { ProductProvider } from './ContextAPI/ProductContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
 
    {/* <ProductProvider> */}
    <MainRouter/>
    {/* </ProductProvider> */}
 
   
  </React.StrictMode>,
)
