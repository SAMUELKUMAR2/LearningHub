import React from 'react'
import Navbar from './Component/NavBar/Navbar'
import Sidebar from './Component/SideBar/Sidebar'
import Container from './Component/Feed/Container'
import VideoDetail from './Component/Feed/VideoContainer/VideoDetail.jsx'
import { BrowserRouter,Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <div className='w-[100vw] h-[100vh]'>
    <Navbar />
    <div className='flex'>
      <BrowserRouter>
      
      <Sidebar />
     
    
    <Routes>
      <Route path='/' exact element={<Container />} />
      
      <Route path='/video'  element={<VideoDetail />} />
      
    </Routes>
    </BrowserRouter>
    </div>
    </div>
    </>
  )
}

export default App