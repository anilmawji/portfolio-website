import { useState, useEffect } from 'react';
import { debounce } from '../utils';

interface WindowSize {
  width: number;
  height: number;
}

type WindowSizeCallback = (size: WindowSize) => void;

interface UseWindowSizeOptions {
  callback?: WindowSizeCallback;
  debounceDelay?: number;
}

const useWindowSize = ({ callback, debounceDelay = 5000 }: UseWindowSizeOptions) => {
  const getWindowSize = () => {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  const [windowSize, setWindowSize] = useState(getWindowSize);

  useEffect(() => {
    // Debounce to avoid the function fire multiple times
    const handleResizeDebounced = debounce(() => {
      const newSize = getWindowSize();
      setWindowSize(newSize);
      callback?.(newSize);
    }, debounceDelay);

    window.addEventListener("resize", handleResizeDebounced);
    return () => window.removeEventListener("resize", handleResizeDebounced);
  }, [callback, debounceDelay]);

  return windowSize;
}

export default useWindowSize;