import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

import Blog from './component/Blog'
import BlogDetail from './pages/BlogDetail'
import Product from './pages/Product'
import ProductBuy from './pages/ProductBuy'
import ProductDetails from './pages/ProductDetails'
import axios from 'axios'
import SettingsProvider from './component/SettingsProvider'

function App() {
  const [count, setCount] = useState(0)
  axios.defaults.baseURL = "https://uol-v-2.hostprohub.com/api/"
  return (
    <>
    <SettingsProvider>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/blog' element={<Blog/>}></Route>
        <Route exact path='/:slug' element={<BlogDetail/>}></Route>
        <Route exact path='/product' element={<Product/>}></Route>
        <Route exact path='/product/:slug' element={<ProductDetails/>}></Route>

      </Routes>
      </SettingsProvider>
        
    </>
  )
}

export default App
