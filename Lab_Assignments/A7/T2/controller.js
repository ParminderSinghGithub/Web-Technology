// controller.js
class ShoppingListController {
    constructor(model, view) {
        this.model = model;
        this.view = view;
        this.view.setController(this);
        this.updateView();
        this.updateAccessCount(); // Add this line to update access count on initialization

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

    updateAccessCount() {
        const accessCount = this.model.getAccessCount();
        console.log('Updating access count:', accessCount);
        this.view.updateAccessCount(accessCount);
    }
    
}
