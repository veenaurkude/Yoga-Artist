import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home/Home';
import Gallery from './pages/Gallery/Gallery';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
// import './App.css'

const App = () => {
  // const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
        </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
