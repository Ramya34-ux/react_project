import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Header } from './Components/Header'
import { Footer } from './Components/Footer'
import { MainLayout } from './Layout/MainLayout'
import { Loading } from './Loader/Loading'
{/*function App() {
  let products =[]
  
  

  return (
    <>
    {products.length>0||<Loading/>}*/}


function App(){
    return(
      <>
    <MainLayout/>
    {/*<Header/>*/}
    {/*<Footer/>*/}


    </>
  )
}

export default App
