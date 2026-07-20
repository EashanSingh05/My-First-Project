import React from 'react'
import {Outlet} from 'react-router'
import Header from '../../components/Header'

function HomeLayoutPage() {
  return (
    <>
    <Header/>
    <Outlet/>
    </>
  )
}

export default HomeLayoutPage