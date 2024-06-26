import React from 'react'
import Home from './home/Home'
import Popular from './components/Popular'
import { Route, Routes } from 'react-router-dom'
import Popular1 from './popular/Popular1'
import Signup from './components/Signup'
import Contact from './components/Contact'
import Contact1 from './contact/Contact1'

function App() {
  return (
  <>
   <div className='dark:bg-slate-800 dark:text-white'>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/popular' element={<Popular1 />}/>
    <Route path='/signup' element={<Signup />}/>
    <Route path='/contact' element={<Contact1/>}/>
   </Routes>
   </div>
  </>
  

  )
}

export default App