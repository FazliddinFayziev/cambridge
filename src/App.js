import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Login } from './components'
import {Cambridge1, Cambridge2, Cambridge10, Cambridge11, Cambridge12, Cambridge13, Cambridge14, Cambridge15, Cambridge16, Cambridge17, Cambridge3, Cambridge4, Cambridge5, Cambridge6, Cambridge7, Cambridge8, Cambridge9 } from "./Cambridge/Cambridge"
import Test1 from './Cambridge/Test';


const App = () => {
  return (
    <div className=''>
      <Routes>
        {/* LOGIN AND HOME PAGES =============================================> */}
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<Home />} />
        {/* ALL CAMBRIDGE URLS ================================================> */}
        <Route path='/cambridge1' element={<Cambridge1 />} />
        <Route path='/cambridge2' element={<Cambridge2 />} />
        <Route path='/cambridge3' element={<Cambridge3 />} />
        <Route path='/cambridge4' element={<Cambridge4 />} />
        <Route path='/cambridge5' element={<Cambridge5 />} />
        <Route path='/cambridge6' element={<Cambridge6 />} />
        <Route path='/cambridge7' element={<Cambridge7 />} />
        <Route path='/cambridge8' element={<Cambridge8 />} />
        <Route path='/cambridge9' element={<Cambridge9 />} />
        <Route path='/cambridge10' element={<Cambridge10 />} />
        <Route path='/cambridge11' element={<Cambridge11 />} />
        <Route path='/cambridge12' element={<Cambridge12 />} />
        <Route path='/cambridge13' element={<Cambridge13 />} />
        <Route path='/cambridge14' element={<Cambridge14 />} />
        <Route path='/cambridge15' element={<Cambridge15 />} />
        <Route path='/cambridge16' element={<Cambridge16 />} />
        <Route path='/cambridge17' element={<Cambridge17 />} />
        {/* TEST URLS ==========================================================> */}
        <Route path='/cambridge1/test_1' element={<Test1 />} />
      </Routes>
    </div>
  )
}

export default App
