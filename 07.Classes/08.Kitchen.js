class Kitchen {
    constructor(budget) {
        this.budget = Number(budget);
        this.menu = {};
        this.productsInStock = {};
        this.actionsHistory = [];
    }

    loadProducts(products) {        
        for(let entry of [...products]) {
            let [product, quantity, price] = entry.split(' ');
            quantity = Number(quantity);
            price = Number(price);
            if(this.budget - price >= 0) {
                if(!this.productsInStock[product]) {
                    this.productsInStock[product] = 0;
                }
                this.productsInStock[product] += quantity;
                this.budget -= price;
                this.actionsHistory.push(`Successfully loaded ${quantity} ${product}`);
            } else {
                this.actionsHistory.push(`There was not enough money to load ${quantity} ${product}`);
            }
        }
        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, neededProducts, price) {
        if(!this.menu[meal]) {
            this.menu[meal] = {
                products: neededProducts,
                price: Number(price)
            }
            return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`;
        } else {
            return `The ${meal} is already in our menu, try something different.`;
        }
    }

    
    showTheMenu() {
        let output = [];
        for(let key of Object.keys(this.menu)) {
            output.push(`${key} - $ ${this.menu[key].price}`);
        }
        if(!output.length) {
            return "Our menu is not ready yet, please come later...";
        }
        return output.join('\n') + '\n';
    }
    
    makeTheOrder(meal) {
        if(!this.menu[meal]) {
            return `There is not ${meal} yet in our menu, do you want to order something else?`;
        } 
        
        let ingredientsNeeded = this.menu[meal].products;

        for(let item of ingredientsNeeded) {
            item = item.split(' ');
            let quantity = Number(item.pop());
            let product = item.join(' ');

            if(this.productsInStock[product] < quantity || !this.productsInStock[product]) {
                return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
            }
        }
        
        for(let item of ingredientsNeeded) {
            item = item.split(' ');
            let quantity = Number(item.pop())
            let product = item.join(' ')
            this.productsInStock[product] -= quantity
        } this.budget += this.menu[meal].price
        
        return (`Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`);
    }
}

let kitchen = new Kitchen (1000);
console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
console.log(kitchen.showTheMenu());
