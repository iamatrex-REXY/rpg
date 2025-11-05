Sure, here's the content for the file `/rpg-website/tests/game.test.ts`:

import { Character } from '../src/components/characters';
import { Inventory } from '../src/components/inventory';
import { startCombat } from '../src/components/combat';
import { items } from '../src/data/items';
import { monsters } from '../src/data/monsters';

describe('Game Logic Tests', () => {
    let character: Character;
    let inventory: Inventory;

    beforeEach(() => {
        character = new Character('Hero', 1);
        inventory = new Inventory();
    });

    test('Character should be able to attack', () => {
        const initialHealth = 100;
        const monster = { id: 1, name: 'Goblin', health: initialHealth, attackPower: 10 };
        character.attack(monster);
        expect(monster.health).toBeLessThan(initialHealth);
    });

    test('Character should be able to defend', () => {
        const monster = { id: 1, name: 'Goblin', health: 100, attackPower: 10 };
        character.defend(monster);
        expect(character.health).toBeLessThan(character.maxHealth);
    });

    test('Inventory should add items', () => {
        inventory.addItem(items[0]);
        expect(inventory.items.length).toBe(1);
    });

    test('Inventory should remove items', () => {
        inventory.addItem(items[0]);
        inventory.removeItem(items[0].id);
        expect(inventory.items.length).toBe(0);
    });

    test('Combat should start correctly', () => {
        const monster = monsters[0];
        const result = startCombat(character, monster);
        expect(result).toHaveProperty('winner');
    });
});