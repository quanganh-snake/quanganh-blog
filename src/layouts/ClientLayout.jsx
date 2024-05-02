import React from 'react'
import Header from '../components/Header/Header'
import { Footer } from '../components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function ClientLayout() {
  return (
    <>
      <Header />
      <main className="container my-20 p-4">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default ClientLayout
