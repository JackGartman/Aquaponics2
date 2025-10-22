// src/game.js
export const ClickGame = {
  setup: () => ({
    currentScreen: 'green',
  }),

  moves: {
    goToRed: ({ G, ctx }) => {
      return { currentScreen: 'red' };
    },
    goToGreen: ({ G, ctx }) => {
      return { currentScreen: 'green' };
    },
  },
};