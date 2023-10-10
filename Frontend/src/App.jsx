import React from 'react'
import { Route, Routes } from 'react-router'
import Index from './Pages/Index'
import Login from './Pages/Login'
import Layout from './components/Layout'
import Register from './Pages/Register'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Index/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
      </Route>

    </Routes>
  )
}
export default App
