import { useState, useEffect } from 'react';

interface MouseState {
  x: number,
  y: number,
  radius: number,
  moving: boolean
}

const useMouse = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
    moving: false
  });

  const updateMousePosition = (e: MouseEvent) => {
    setMousePosition({
      x: e.clientX,
      y: e.clientY,
      moving: true
    });
  };

  useEffect(() => {
    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  return mousePosition;
};

export default useMouse;

export type { MouseState }