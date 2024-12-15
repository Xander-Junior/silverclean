import React, { useEffect, useState } from 'react';

const SplashScreen = ({ onFinish }) => {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setFadeOut(true), 2000); // 2 seconds delay
    const finishTimeout = setTimeout(() => onFinish(), 2500);

    return () => {
      clearTimeout(timeout);
      clearTimeout(finishTimeout);
    };
  }, [onFinish]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-blue-800 transition-opacity duration-500 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      {/* Adjust video size */}
      <video autoPlay muted loop className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
        <source src={require('../assets/logo-1.mp4')} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default SplashScreen;
