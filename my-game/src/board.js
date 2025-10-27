// src/board.js
import React, { useEffect, useRef } from 'react';
import { initPixi } from './pixiApp';

export function ClickBoard({ G, moves }) {

  const pixiContainerRef = useRef(null); // 
  const appRef = useRef(null);

  console.log("Current screen:", G.currentScreen);
  const isGreen = G.currentScreen === 'green';

  const style = {
    width: '100vw',
    height: '100vh',
    backgroundColor: isGreen ? 'green' : 'red',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const buttonStyle = {
    backgroundColor: isGreen ? 'red' : 'green',
    color: 'white',
    fontSize: '1.5rem',
    border: 'none',
    borderRadius: '10px',
    padding: '1rem 2rem',
    cursor: 'pointer',
  };

  // Initialize Pixi once when board mounts
   useEffect(() => {
    let app;
    // you might pass dimensions if you want a fixed size or container size
    initPixi(pixiContainerRef.current, window.innerWidth, window.innerHeight)
      .then(instance => {
        appRef.current = instance;
      });

    return () => {
      if (appRef.current) {
        appRef.current.destroy(true);
      }
    };
  }, []);


  console.log("Current screen:", G.currentScreen);
  return (
  <div style={{position: 'relative', width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <div
        ref={pixiContainerRef}
        style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%', height: '100%',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%', height: '100%',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'auto'  // maybe allow the UI elements only to intercept interactions
        }}
      >
      {isGreen ? (
        <button style={buttonStyle} onClick={() => moves.goToRed()}>
          Go to Red Screen
        </button>
      ) : (
        <button style={buttonStyle} onClick={() => moves.goToGreen()}>
          Go to Green Screen
        </button>
      )}
    </div>
     </div>
  );
}
