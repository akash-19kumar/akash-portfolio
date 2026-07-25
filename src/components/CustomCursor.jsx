import { useEffect, useState } from 'react';
import { useMousePosition } from '../hooks/useMousePosition';

const CustomCursor = () => {
  const { x, y } = useMousePosition();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasPointer = window.matchMedia('(pointer: fine)').matches;
    setIsVisible(hasPointer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <div className="custom-cursor" style={{ left: x, top: y, transition: 'left 0.1s ease, top 0.1s ease' }} />
      <div className="custom-cursor-dot" style={{ left: x, top: y, transition: 'left 0.05s ease, top 0.05s ease' }} />
      <div className="cursor-glow" style={{ left: x, top: y, transition: 'left 0.3s ease, top 0.3s ease' }} />
    </>
  );
};

export default CustomCursor;
