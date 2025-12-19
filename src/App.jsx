import React from 'react'
import Home from './pages/Home'
import ProductList from './pages/ProductList'
import Product from './pages/Product'
import Login from './pages/Login'
import Register from './pages/Register'
import Cart from './pages/Cart'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Page404 from "./pages/Page404";
import scrollToTop from "./components/ScrollToTop"
import ScrollToTop from './components/ScrollToTop'
import Results from "./pages/Results"

const App = () => {
    return (
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/'
            element={<Home />} />
          <Route path='/Login'
            element={<Login />} />
          <Route path='/Register'
            element={<Register />} />
          <Route path='/Cart'
            element={<Cart />} />
          <Route path='/Product'
            element={<Product />} />
          <Route path='/ProductList'
            element={<ProductList />} />
          <Route path='/Page404'
            element={<Page404 />} />
          <Route path='/Results'
            element={<Results />} />
        </Routes>
      </Router>
    )}

export default App; 
  