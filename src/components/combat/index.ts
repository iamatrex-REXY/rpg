// src/components/combat/index.ts

export function startCombat(character, monster) {
    while (character.health > 0 && monster.health > 0) {
        // Character attacks monster
        monster.health -= character.attackPower;
        if (monster.health <= 0) {
            console.log(`${character.name} defeated ${monster.name}!`);
            break;
        }

        // Monster attacks character
        character.health -= monster.attackPower;
        if (character.health <= 0) {
            console.log(`${monster.name} defeated ${character.name}!`);
            break;
        }
    }
}