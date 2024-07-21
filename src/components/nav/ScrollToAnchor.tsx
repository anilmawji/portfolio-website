import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

interface PropTypes {
  delay?: number;
  offset?: number;
}

const ScrollToAnchor = ({ delay, offset = 0 }: PropTypes) => {
  const location = useLocation();
  const lastHash = useRef('');

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1);
    }
    if (!lastHash.current) return;

    const element = document.getElementById(lastHash.current);
    if (!element) return;

    setTimeout(() => {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition - offset;

        window.scrollBy({
            top: offsetPosition,
            behavior: 'smooth'
        });
      lastHash.current = '';
    }, delay || 100);
  }, [location]);

  return null;
}

export default ScrollToAnchor
