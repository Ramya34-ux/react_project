import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CustomNavbar from './Components/Customnavbar.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomCorousel from './Components/Customcorousel.jsx'
import CounterApp from './Components/Counterapp.jsx'
import Product from './Components/Product.jsx'
import Productsnew from './Components/Productsnew.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <CustomNavbar/>
   <CustomCorousel/>
   <CounterApp/>
   <Productsnew/>
  </StrictMode>,
)
