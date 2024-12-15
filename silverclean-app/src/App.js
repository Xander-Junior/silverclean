import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import MainApp from './MainApp'; // Replace this with your actual app component

function App() {
  const [isSplashFinished, setIsSplashFinished] = useState(false);

  return (
    <div>
      {!isSplashFinished ? (
        <SplashScreen onFinish={() => setIsSplashFinished(true)} />
      ) : (
        <MainApp /> // Replace with your app's main component
      )}
    </div>
  );
}

export default App;
