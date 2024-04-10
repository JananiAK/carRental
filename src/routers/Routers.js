
import React from 'react'
import {Routes, Route,Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import VehicleListing from '../pages/VehicleListing'
import Vehicledetails from '../pages/Vehicledetails'
const Routers = () => {
  return <Routes>
  <Route path='/' element={<Navigate to='/home' />} />
  <Route path='/home' element={<Home/>} />
  <Route path='/about' element={<About/>} />
  <Route path='/vehicle' element={<VehicleListing/>} />
  <Route path='/vehicle/:slug' element={<Vehicledetails/>} />
  </Routes>
   
}

export default Routers
