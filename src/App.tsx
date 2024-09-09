import { Route, Routes } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import ScrollToAnchor from './components/nav/ScrollToAnchor';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
import { getNumericalCssValue } from './utils';
import "@fontsource/aldrich";
//import lightStyles from './LightTheme.module.css'
//import darkStyles from './DarkTheme.module.css'

const NAVBAR_THICKNESS = getNumericalCssValue("navbar-thickness");

const App = () => {
  //const styles = theme === 'light' ? lightStyles : darkStyles;

  return (
    <>
      <Navbar />
      <ScrollToAnchor delay={250} offset={NAVBAR_THICKNESS + 2}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/about#contact" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;