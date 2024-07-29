import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './components/Product'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Savat from './pages/Savat'
import Notfaund from './pages/Notfaund'

// const [cart, setCart] = useState([])
// function addCard(item) {
//     setCart(...cart, item)
// }


const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Product' element={<Product />} />
                <Route path='/savat' element={<Savat />} />
                <Route path='/*' element={<Notfaund />} />
            </Routes>
            <Footer />
        </>
    )
}

export default App