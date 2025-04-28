import React from 'react'
import Home from './pages/Home'
import Hooks from './Hooks'
import { Routes, Route } from 'react-router-dom'
import Parent from './pages/Parent'
import { Useref } from './pages/Useref'


function App() {
  return (
    <>
   
     <Home />
      <Hooks />
      <Parent />
      <Useref/>
    </>
     
      
  )
}

export default App