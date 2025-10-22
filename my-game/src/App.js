//import { Client } from 'boardgame.io/react';
//import { ClickGame } from './game';
//import { ClickBoard } from './board';
//import React from 'react';
//import './App.css';

//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <h1>Welcome to React</h1>
//        <p>Edit <code>src/App.js</code> and save to reload.</p>
//      </header>
//    </div>
//  );
//}

//export default App;




// src/App.js
import { Client } from 'boardgame.io/react';
import { ClickBoard } from './board';

// Define the game logic
const ClickGame = {
  setup: () => ({ currentScreen: 'green' }),

  moves: {
    goToGreen(G) {
      return { ...G, currentScreen: 'green' };
    },
    goToRed(G) {
      return { ...G, currentScreen: 'red' };
    },
  },
};

// Create the client
const ClickGameClient = Client({
  game: ClickGame,
  board: ClickBoard,
});

function App() {
  return <ClickGameClient />;
}

export default App;






//const ClickClient = Client({
  //game: ClickGame,
  //board: ClickBoard,
//});

//function App() {
//  return <ClickClient playerID="0" />; // <-- add this
//}

//export default App;
