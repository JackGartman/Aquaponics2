// src/game.js
import { INVALID_MOVE } from 'boardgame.io/core';

export const TicTacToe = {
  setup: () => ({ cells: Array(9).fill(null) }),

  turn: {
    moveLimit: 1,
  },

  moves: {
    clickCell(G, ctx, id) {
      if (G.cells[id] !== null) {
        return INVALID_MOVE;
      }
      G.cells[id] = ctx.currentPlayer;
    },
  },

  victoryCondition: (G, ctx) => {
    const positions = [
      [0,1,2], [3,4,5], [6,7,8], // rows
      [0,3,6], [1,4,7], [2,5,8], // columns
      [0,4,8], [2,4,6],          // diagonals
    ];

    for (let line of positions) {
      const [a, b, c] = line;
      if (G.cells[a] && G.cells[a] === G.cells[b] && G.cells[a] === G.cells[c]) {
        return true;
      }
    }
    return false;
  },
};