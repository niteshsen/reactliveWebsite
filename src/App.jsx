import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route, Navigate } from 'react-router-dom'
import Services from './Services';
import Contact from './Contact';
import Home from './Home';
import About from './About';
import Navbar from './Navbar';
// import Footer from './Footer';



const App = () => {
    return (
        <>  
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />}/>
                <Route path='/service' element={<Services />} />
                <Route path='*' element={<Navigate to="/" />} />
            </Routes>
          
        </>
    )
}

export default App
