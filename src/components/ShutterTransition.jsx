import React, { useState, useEffect } from 'react';

export default function ShutterTransition({ children }) {
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 1700);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isAnimating && (
        <>
          <div className="shutter-overlay shutter-left"></div>
          <div className="shutter-overlay shutter-right animate"></div>
        </>
      )}
      {children}
    </>
  );
}