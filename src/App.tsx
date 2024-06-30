import { Route, Routes } from 'react-router-dom'
import Navbar from './components/nav/Navbar'
import ScrollToAnchor from './components/nav/ScrollToAnchor'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import About from './pages/About'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToAnchor delay={10}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/about#contact" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App