import React from 'react'
import { Route,Routes } from 'react-router'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import CheckoutPage from './pages/CheckoutPage'
import ProfilePage from './pages/ProfilePage'
import { isTokenValid } from './util/index.js'
import { Loader } from 'lucide-react'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}  />
        <Route path='/auth' element={<AuthPage/> } loader={isTokenValid} />
        <Route path='/checkout' element={<CheckoutPage/>} />
        <Route path='/profile' element={<ProfilePage/>} loader={isTokenValid} />
      </Routes>
    </>
  )
}

export default App