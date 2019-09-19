function solve(array) {
    const typeOfCoffee = {
        caffeine: 0.8,
        decaf: 0.9
    }

    let total = 0;

    for(let currentOrder of array) {
        let price = 0;
        currentOrder = currentOrder.split(", ");

        let coins = Number(currentOrder[0]);
        let typeOfDrink = currentOrder[1];

        if(typeOfDrink === 'coffee') {
            price += typeOfCoffee[currentOrder[2]];
        } else {
            price += 0.80;
        }

        if(currentOrder.includes('milk')) {
            price = Number((price * 1.1).toFixed(1));
        }

        let quantityOfSugar = Number(currentOrder.pop());

        if(quantityOfSugar) {
            price += 0.1;
        }

        function printResult(coins, price, typeOfDrink) {
            if(coins >= price) {
                total += price;
                console.log(`You ordered ${typeOfDrink}. Price: $${price.toFixed(2)} Change: $${(coins - price).toFixed(2)}`);
            } else {
                console.log(`Not enough money for ${typeOfDrink}. Need $${(price - coins).toFixed(2)} more.`);
            }
        }

        printResult(coins, price, typeOfDrink);
    }
    console.log(`Income Report: $${total.toFixed(2)}`);
}

solve(['1.00, coffee, caffeine, milk, 4', '0.40, tea, milk, 2', '1.00, coffee, decaf, 0']);
