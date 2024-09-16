import { useState, useEffect } from 'react';
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

const useWindowSize = (callback?: WindowSizeCallback, debounceDelay = 500) => {
  const [windowSize, setWindowSize] = useState(getWindowSize);

  useEffect(() => {
    // Debounce to avoid updating state and executing the callback too many times
    const handleResizeDebounced = useDebounce(() => {
      const newSize = getWindowSize();
      setWindowSize(newSize);
      callback?.(newSize);
    }, debounceDelay);

    window.addEventListener("resize", handleResizeDebounced);
    return () => window.removeEventListener("resize", handleResizeDebounced);
  }, [callback, debounceDelay]);

  return [windowSize.width, windowSize.height];
}

export default useWindowSize;