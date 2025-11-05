// src/services/saveLoad.ts

export function saveGame(gameState: any): void {
    localStorage.setItem('rpgGameState', JSON.stringify(gameState));
}

export function loadGame(): any | null {
    const savedState = localStorage.getItem('rpgGameState');
    return savedState ? JSON.parse(savedState) : null;
}