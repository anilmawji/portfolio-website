import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface PropTypes {
  delay?: number;
}

const ScrollToAnchor = ({ delay }: PropTypes) => {
  const location = useLocation();
  const lastHash = useRef("");

  useEffect(() => {
    if (location.hash) {
      lastHash.current = location.hash.slice(1);
    }

    if (lastHash.current && document.getElementById(lastHash.current)) {
      setTimeout(() => {
        document.getElementById(lastHash.current)?.scrollIntoView({
            behavior: "smooth"
        });
        lastHash.current = "";
      }, delay || 100);
    }
  }, [location]);

  return null;
}

export default ScrollToAnchor
