// src/game.js
export const ClickGame = {
  setup: () => ({
    currentScreen: 'green',
  }),

  moves: {
    goToRed(G, ctx) {
      console.log("Current screen:", G.currentScreen);
      G.currentScreen = 'red';
      console.log("Current screen:", G.currentScreen);
    },
    goToGreen(G, ctx) {
      console.log("Current screen:", G.currentScreen);
      G.currentScreen = 'green';
      console.log("Current screen:", G.currentScreen);
    },
  },
};