import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/home'
import Anime from './pages/Anime'
import About from './pages/About'
import "./mystyle.css"
import AnimeDetails from './pages/AnimeDetails'

function App() {
  return (
    <>
    <Navbar />

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/Anime" element={<Anime />} />
            <Route path="/About" element={<About />} />
            <Route path="/Anime/:slug" element={<AnimeDetails/>}/>
        </Routes>
    
    </>
  )
}

export default App