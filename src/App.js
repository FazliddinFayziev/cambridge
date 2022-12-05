import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cambridge_1 from './Cambridge/Cambridge_1'
import Cambridge_2 from './Cambridge/Cambridge_2'
import Cambridge_3 from './Cambridge/Cambridge_3'
import Cambridge_4 from './Cambridge/Cambridge_4'
import Cambridge_5 from './Cambridge/Cambridge_5'
import Cambridge_6 from './Cambridge/Cambridge_6'
import Cambridge_7 from './Cambridge/Cambridge_7'
import Cambridge_8 from './Cambridge/Cambridge_8'
import Cambridge_9 from './Cambridge/Cambridge_9'
import Cambridge_10 from './Cambridge/Cambridge_10'
import Cambridge_11 from './Cambridge/Cambridge_11'
import Cambridge_12 from './Cambridge/Cambridge_12'
import Cambridge_13 from './Cambridge/Cambridge_13'
import Cambridge_14 from './Cambridge/Cambridge_14'
import Cambridge_15 from './Cambridge/Cambridge_15'
import Cambridge_16 from './Cambridge/Cambridge_16'
import Cambridge_17 from './Cambridge/Cambridge_17'
import { Home, Login } from './components'

const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/*' element={<Home />} />
        <Route path='/cambridge1' element={<Cambridge_1 />} />
        <Route path='/cambridge2' element={<Cambridge_2 />} />
        <Route path='/cambridge3' element={<Cambridge_3 />} />
        <Route path='/cambridge4' element={<Cambridge_4 />} />
        <Route path='/cambridge5' element={<Cambridge_5 />} />
        <Route path='/cambridge6' element={<Cambridge_6 />} />
        <Route path='/cambridge7' element={<Cambridge_7 />} />
        <Route path='/cambridge8' element={<Cambridge_8 />} />
        <Route path='/cambridge9' element={<Cambridge_9 />} />
        <Route path='/cambridge10' element={<Cambridge_10 />} />
        <Route path='/cambridge11' element={<Cambridge_11 />} />
        <Route path='/cambridge12' element={<Cambridge_12 />} />
        <Route path='/cambridge13' element={<Cambridge_13 />} />
        <Route path='/cambridge14' element={<Cambridge_14 />} />
        <Route path='/cambridge15' element={<Cambridge_15 />} />
        <Route path='/cambridge16' element={<Cambridge_16 />} />
        <Route path='/cambridge17' element={<Cambridge_17 />} />
      </Routes>
    </div>
  )
}

export default App
