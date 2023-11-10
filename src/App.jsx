import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './component/Product'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/product' element={<Product/>}></Route>
      </Routes>
        
    </>
  )
}

export default App
