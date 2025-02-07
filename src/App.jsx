import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './Navigation/Navbar'
import Home from './Component/Home'
import About from './Component/About'
import Experiences from './Component/Experiences'
import Contact from './Component/Contact'
import Login from './Component/Login'
import Services from './Component/Services'
import Services1 from './Component/Services1'
import Users from './Component/Users'

import Footer from './Navigation/Footer';
import Dashboard from './Admin/Dashboard'
import RegisterForm from './Component/Register'
import PostServicesForm from './Component/PostServices'
import SingleServices from './Component/SingleServices'
import Edit from './Component/Edit'


const App = () => {
  const [Loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1500);

  }, [])

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/about' element={<About />} ></Route>
          <Route path='/experiences' element={<Experiences />} ></Route>
          <Route path='/contact' element={<Contact />} ></Route>
          <Route path='/services' element={<Services />} ></Route>
          <Route path='/services/:id' element={<SingleServices />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/dashboard' element={<Dashboard />} ></Route>
          <Route path='/register' element={<RegisterForm />} ></Route>
          <Route path='/services1' element={<Services1 />} ></Route>
          <Route path='/postservices' element={<PostServicesForm />} ></Route>
          <Route path='/users' element={<Users />}></Route>
          <Route path='/edit/:id' element={<Edit />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>


  )
}

export default App

