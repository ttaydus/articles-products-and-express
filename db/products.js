class DS_Products {
    constructor() {
        this.storage = [];
        this.idNum = 1;
        this.initialProducts();
    }

    initialProducts() {
        this.storage.push({
            id: this.idNum,
            name: 'Gizmo',
            price: '$15',
            inventory: 4
        })
        this.idNum++;
        this.storage.push({
            id: this.idNum,
            name: 'Gadget',
            price: '$25',
            inventory: 12
        })
        this.idNum++;
    }

    getAllProducts() {
        return this.storage.slice();
    }

    getProductsById(id) {
        let result;
        this.storage.forEach(product => {
            if(product.id === id){
                result = product;
            }
        })
        console.log('result:', result)
        return result
    }

    createProduct(name, price, inventory) {
        this.storage.push({
            id: this.idNum,
            name,
            price,
            inventory
        })
        this.idNum++;
    }
}

module.exports = new DS_Products();