import { Client } from 'boardgame.io/react';
import { ClickGame } from './game';
import { ClickBoard } from './board';

const ClickClient = Client({
  game: ClickGame,
  board: ClickBoard,
});

function App() {
  return <ClickClient playerID="0" />; // <-- add this
}

export default App;
