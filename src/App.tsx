import { Route, Routes } from 'react-router-dom'
import Navbar from './components/nav/Navbar'
import ScrollToAnchor from './components/nav/ScrollToAnchor'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Experience from './pages/Experience'
import { getNumericalCssValue } from './Utils'

const NAVBAR_THICKNESS: number = getNumericalCssValue(document.documentElement, "navbar-thickness");

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToAnchor offset={NAVBAR_THICKNESS}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about#contact" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App