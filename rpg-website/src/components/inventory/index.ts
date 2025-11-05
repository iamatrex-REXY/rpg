class Inventory {
    private items: { id: number; name: string; effect: string }[];

    constructor() {
        this.items = [];
    }

    addItem(item: { id: number; name: string; effect: string }): void {
        this.items.push(item);
    }

    removeItem(itemId: number): void {
        this.items = this.items.filter(item => item.id !== itemId);
    }

    getItems(): { id: number; name: string; effect: string }[] {
        return this.items;
    }
}

export default Inventory;