class Character {
    name: string;
    level: number;

    constructor(name: string, level: number = 1) {
        this.name = name;
        this.level = level;
    }

    attack(): string {
        return `${this.name} attacks!`;
    }

    defend(): string {
        return `${this.name} defends!`;
    }
}

export default Character;