import React from 'react'
import { Route, Routes } from 'react-router'
import Index from './Pages/Index'
import Login from './Pages/Login'
import Layout from './components/Layout'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>}>
        <Route index element={<Index/>}/>
        <Route path='/login' element={<Login/>}/>
      </Route>

    </Routes>
  )
}
export default App
