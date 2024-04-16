// data.js
class ShoppingListModel {
    constructor() {
        this.items = [];
    }

    addItem(itemName) {
        this.items.push(itemName);
    }

    removeItem(index) {
        this.items.splice(index, 1);
    }

    getItems() {
        return this.items;
    }
}
