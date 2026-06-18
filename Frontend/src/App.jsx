import { useState } from 'react'
import { Button } from './components/ui/button'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import NotFound from './pages/NotFound'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}

export default App