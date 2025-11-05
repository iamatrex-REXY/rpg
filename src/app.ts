import { GameState } from './services/gameState';
import { startCombat } from './components/combat';
import { Character } from './components/characters';
import { Inventory } from './components/inventory';

// Initialize the game state
const gameState = new GameState();

// Create a player character
const player = new Character('Hero', 1);

// Initialize the player's inventory
const inventory = new Inventory();

// Main game loop
function gameLoop() {
    // Game logic goes here
    console.log('Game is running...');
    
    // Example of starting combat
    // startCombat(player, enemy);
    
    requestAnimationFrame(gameLoop);
}

// Start the game
gameLoop();