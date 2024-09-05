import { useEffect, useState, useRef } from 'react';

const useThrottle = <T,>(value: T, interval: number): T => {
  const [throttledValue, setThrottledValue] = useState<T>(value);
  const lastExecution = useRef<number>(-1);

  useEffect(() => {
    if (Date.now() >= lastExecution.current + interval) {
      setThrottledValue(value);
      lastExecution.current = Date.now();
    } else {
      const timerId = setTimeout(() => {
        setThrottledValue(value);
        lastExecution.current = Date.now();
      }, interval);

      return () => clearTimeout(timerId);
    }
  }, [value, interval]);

  return throttledValue;
}

export default useThrottle;