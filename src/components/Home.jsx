import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cambridge from '../Cambridge/Cambridge'
import { Test } from '../Cambridge/Test'
import Footer from './Footer'
import Header from './Header'
import Hero from './Hero'
import Main from './Main'

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/cambridge/:bookId' element={<Cambridge />} />
        <Route path='/cambridge/:bookId/test/:testId' element={<Test />} />
      </Routes>

      <Footer />
    </div>
  )
}

export default Home
