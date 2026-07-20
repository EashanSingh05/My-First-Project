import React from 'react'
import {Outlet} from 'react-router'
import Header from '../../components/Header'
  
function AdminLayoutPage() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default AdminLayoutPage