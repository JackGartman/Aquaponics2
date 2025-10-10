import { Client } from 'boardgame.io/react';
import { TicTacToe } from './game';
import { TicTacToeBoard } from './board';

const TicTacToeClient = Client({
  game: TicTacToe,
  board: TicTacToeBoard,
});

function App() {
  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <TicTacToeClient playerID="0" />
    </div>
  );
}

export default App;
