// data.js
class ShoppingListModel {
    constructor() {
        this.items = [];
    }

    addItem(itemName) {
        this.items.push(itemName);
        this.saveItemsToStorage();
    }

    removeItem(index) {
        this.items.splice(index, 1);
        this.saveItemsToStorage();
    }

    getItems() {
        return this.items;
    }

    loadItemsFromStorage() {
        const storedItems = JSON.parse(localStorage.getItem("shoppingList")) || [];
        this.items = storedItems;
    }

    saveItemsToStorage() {
        localStorage.setItem("shoppingList", JSON.stringify(this.items));
    }
}
