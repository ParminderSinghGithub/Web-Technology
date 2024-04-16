// view.js
class ShoppingListView {
    constructor(controller) {
        this.controller = controller;
        this.itemInput = document.getElementById('itemInput');
        this.shoppingList = document.getElementById('shoppingList');
        this.addItemButton = document.querySelector('button');

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
}