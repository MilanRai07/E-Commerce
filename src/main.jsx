import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import MainRouter from './MainRouter'
import { ProductProvider } from './ContextAPI/ProductContext'
import { AddCartProvider } from './ContextAPI/AddCartContext'


ReactDOM.createRoot(document.getElementById('root')).render(
   <ProductProvider>
      <AddCartProvider>
            <MainRouter />
      </AddCartProvider>
   </ProductProvider>
)
