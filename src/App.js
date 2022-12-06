import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Login } from './components'

const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
