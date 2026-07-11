import React from 'react'
import { Route,Routes } from 'react-router'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import CheckoutPage from './pages/CheckoutPage'
import { isTokenValid } from '../util'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}  />
        <Route path='/auth' element={<AuthPage/>} loader={isTokenValid} />
        <Route path='/checkout' element={<CheckoutPage/>} />
      </Routes>
    </>
  )
}

export default App