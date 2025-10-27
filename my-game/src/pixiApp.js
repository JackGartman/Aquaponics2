// src/pixiFishPond.js
import { Application, Assets } from 'pixi.js';
import { addBackground } from './addBackground';
import { addDisplacementEffect } from './addDisplacementEffect';
import { addFishes, animateFishes } from './addFishes';
import { addWaterOverlay, animateWaterOverlay } from './addWaterOverlay';

export async function initPixi(container) {
  // Create a new Pixi Application
  const app = new Application();

  // Initialize it with transparent background, resizing to the window or container
  await app.init({
    backgroundAlpha: 0,
    resizeTo: container || window,
  });

  // Append to the provided container (not document.body!)
  if (container) container.appendChild(app.canvas);

  // Load assets
  const assets = [
    { alias: 'background', src: 'https://pixijs.com/assets/tutorials/fish-pond/pond_background.jpg' },
    { alias: 'fish1', src: 'https://pixijs.com/assets/tutorials/fish-pond/fish1.png' },
    { alias: 'fish2', src: 'https://pixijs.com/assets/tutorials/fish-pond/fish2.png' },
    { alias: 'fish3', src: 'https://pixijs.com/assets/tutorials/fish-pond/fish3.png' },
    { alias: 'fish4', src: 'https://pixijs.com/assets/tutorials/fish-pond/fish4.png' },
    { alias: 'fish5', src: 'https://pixijs.com/assets/tutorials/fish-pond/fish5.png' },
    { alias: 'overlay', src: 'https://pixijs.com/assets/tutorials/fish-pond/wave_overlay.png' },
    { alias: 'displacement', src: 'https://pixijs.com/assets/tutorials/fish-pond/displacement_map.png' },
  ];
  await Assets.load(assets);

  // Build scene parts
  const fishes = [];
  addBackground(app);
  addFishes(app, fishes);
  addWaterOverlay(app);
  addDisplacementEffect(app);

  // Start animations
  app.ticker.add((time) => {
    animateFishes(app, fishes, time);
    animateWaterOverlay(app, time);
  });

  // Return handle for cleanup or updates
  return {
    app,
    destroy: () => app.destroy(true, { children: true, texture: true }),
  };
}
