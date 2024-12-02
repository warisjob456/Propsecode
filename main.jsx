import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
// import FoodItems from "./components/FoodItems";

// import React from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App></App>
    {/* <FoodItems></FoodItems> */}
   
  </StrictMode>,
)
