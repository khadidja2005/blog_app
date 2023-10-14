import React from 'react'
import { Route, Routes } from 'react-router'
import Index from './Pages/Index'
import Login from './Pages/Login'
import Layout from './components/Layout'
import Register from './Pages/Register'
import axios from 'axios'
axios.defaults.baseURL="http://localhost:4000";
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
