import React from 'react'
import { Route,Routes } from 'react-router'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import CheckoutPage from './pages/CheckoutPage'
import ProfilePage from './pages/ProfilePage'
import { isTokenValid } from './util/index.js'
import { Loader } from 'lucide-react'
import AdminPage from './pages/AdminPage.jsx'
import DashboardPage from './pages/DashboardPage.jsx'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}  />
        <Route path='/auth' element={<AuthPage/> } loader={isTokenValid} />
        <Route path='/checkout' element={<CheckoutPage/>} />
        <Route path='/profile' element={<ProfilePage/>} loader={isTokenValid} />
        <Route path='/admin' element={<AdminPage/>} />
        <Route path='/dashboard' element={<DashboardPage/>} />
      </Routes>
    </>
  )
}

export default App