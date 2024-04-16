// data.js
class ShoppingListModel {
    constructor() {
        this.items = [];
        this.accessCount = 0;
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

    loadAccessCountFromStorage() {
        this.accessCount = parseInt(localStorage.getItem("accessCount")) || 0;
    }

    incrementAccessCount() {
        this.accessCount++;
        this.saveAccessCountToStorage();
    }

    getAccessCount() {
        return this.accessCount;
    }

    saveAccessCountToStorage() {
        localStorage.setItem("accessCount", this.accessCount.toString());
    }
}
