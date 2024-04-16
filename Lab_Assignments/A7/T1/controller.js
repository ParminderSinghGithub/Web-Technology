// controller.js
class ShoppingListController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.updateView();

        this.view.addItemButton.addEventListener('click', () => this.addItem());
    }

    addItem() {
        const itemName = this.view.getItemInputValue();

        if (itemName !== '') {
            this.model.addItem(itemName);
            this.updateView();
            this.view.clearItemInput();
        }
    }

    updateView() {
        const items = this.model.getItems();
        this.view.updateItemList(items);
    }

    bindRemoveItem() {
        this.view.bindRemoveItem(index => {
            this.model.removeItem(index);
            this.updateView();
        });
    }
}
