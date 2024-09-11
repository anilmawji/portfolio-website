import { useState, useEffect } from 'react';
import useThrottle from './useThrottle';
import useDebounce from './useDebounce';

const getWindowSize = () => {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

interface WindowSize {
  width: number;
  height: number;
}

type WindowSizeCallback = (size: WindowSize) => void;

const useWindowSize = (callback?: WindowSizeCallback, throttleDelay = 500) => {
  const [windowSize, setWindowSize] = useState(getWindowSize);

  useEffect(() => {
    // Debounce to avoid executing the function too many times
    const handleResizeThrottled = useThrottle(() => {
      const newSize = getWindowSize();
      setWindowSize(newSize);
      callback?.(newSize);
    }, throttleDelay);

    window.addEventListener("resize", handleResizeThrottled);
    return () => window.removeEventListener("resize", handleResizeThrottled);
  }, [callback, throttleDelay]);

  return [windowSize.width, windowSize.height];
}

export default useWindowSize;