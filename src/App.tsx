import { Route, Routes } from 'react-router-dom';
import Navbar from './components/nav/Navbar';
import ScrollToAnchor from './components/nav/ScrollToAnchor';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';
import { getNumericalCssValue } from './utils';
import { NavMenuProvider } from './contexts/NavMenuContext';
//import lightStyles from './LightTheme.module.css'
//import darkStyles from './DarkTheme.module.css'
import "@fontsource/aldrich";

const NAVBAR_THICKNESS = getNumericalCssValue("navbar-thickness");

const App = () => {
  //const styles = theme === 'light' ? lightStyles : darkStyles;

  return (
    <NavMenuProvider>
      <Navbar />
      <ScrollToAnchor offset={NAVBAR_THICKNESS}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/#hero" element={<Home />} />
        <Route path="/#experience" element={<Home />} />
        <Route path="/#projects" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about#bio" element={<About />} />
        <Route path="/about#contact" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog#featured" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </NavMenuProvider>
  );
}

export default App;