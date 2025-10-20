// src/board.js


export function ClickBoard({ G, moves }) {

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

  console.log("Current screen:", G.currentScreen);
  return (
    <div style={style}>
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
  );
}
