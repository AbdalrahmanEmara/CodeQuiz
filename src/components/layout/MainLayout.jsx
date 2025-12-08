import React from 'react'
import Header from './Header'
import Footer from './Footer'

export default function MainLayout({ children }) {
  return (
    <div className='text-purple-100'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
