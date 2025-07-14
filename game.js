// game.js - Main game entry point and configuration
// Leverages Phaser.js for game framework, ensuring smooth animations and responsive design

import { BootScene } from './scenes.js';
import { MainMenuScene } from './scenes.js';
import { GameScene } from './scenes.js';
import { generateMystery } from './procedural.js';

// Game configuration for Phaser
const config = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: '#ffffff',
    scene: [BootScene, MainMenuScene, GameScene],
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: {
        default: 'arcade',
        arcade: { debug: false }
    }
};

// Initialize the game
class JuniorSleuthsGame extends Phaser.Game {
    constructor() {
        super(config);
        // Generate procedural mystery data on game start
        this.mysteryData = generateMystery();
        // Expose mystery data to scenes via registry
        this.registry.set('mystery', this.mysteryData);
    }
}

// Create game instance when window loads
window.addEventListener('load', () => {
    const game = new JuniorSleuthsGame();
    // Handle resize for responsiveness
    window.addEventListener('resize', () => {
        game.scale.resize(window.innerWidth, window.innerHeight);
    });
});

// Error handling: Log any Phaser errors
window.onerror = (msg, url, lineNo, columnNo, error) => {
    console.error(`Error: ${msg} at ${url}:${lineNo}:${columnNo}`);
    return false;
};