import { Route, Routes } from 'react-router-dom'
import Navbar from './components/nav/Navbar'
import ScrollToAnchor from './components/nav/ScrollToAnchor'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import About from './pages/About'
import NotFound from './pages/NotFound'
import { getNumericalCssValue } from './Utils'

const NAVBAR_THICKNESS: number = getNumericalCssValue(document.documentElement, "navbar-thickness");

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToAnchor delay={250} offset={NAVBAR_THICKNESS}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about#contact" element={<About />} />
        <Route path="/about#experience" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App