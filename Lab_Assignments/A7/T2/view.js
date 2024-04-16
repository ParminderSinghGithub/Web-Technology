// view.js
class ShoppingListView {
    constructor() {
        this.itemInput = document.getElementById('itemInput');
        this.shoppingList = document.getElementById('shoppingList');
        this.addItemButton = document.querySelector('button');
        this.accessCountDisplay = document.getElementById('count');
        this.controller = null;

        this.addItemButton.addEventListener('click', () => this.controller.addItem());
    }

    bindRemoveItem(handler) {
        this.shoppingList.addEventListener('click', (event) => {
            if (event.target.tagName === 'LI') {
                const index = Array.from(this.shoppingList.children).indexOf(event.target);
                handler(index);
            }
        });
    }

    updateItemList(items) {
        this.shoppingList.innerHTML = "";
        items.forEach(item => {
            const listItem = document.createElement("li");
            listItem.textContent = item;
            this.shoppingList.appendChild(listItem);
        });
    }

    getItemInputValue() {
        return this.itemInput.value.trim();
    }

    clearItemInput() {
        this.itemInput.value = '';
    }

    updateAccessCount(count) {
        this.accessCountDisplay.textContent = count;
    }

    setController(controller) {
        this.controller = controller;
    }
}