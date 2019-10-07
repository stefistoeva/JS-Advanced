let solution = (function () {
    const ord = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    const recipes = {
        apple: {carbohydrate: 1, flavour: 2},
        lemonade: {carbohydrate: 10, flavour: 20},
        burger: {carbohydrate: 5, fat: 7, flavour: 3},
        turkey: {protein: 10, carbohydrate: 10, fat: 10, flavour: 10},
        eggs: {protein: 5, fat: 1, flavour: 1}
    }

    commands = {
        restock: (x, y) => {
            ord[x] += Number(y);
            return 'Success';
        },
        prepare: (x, y) => {
            let result = 'Success';
            let success = true;
            recipe = Object.entries(recipes[x]);

            for (let element of recipe) {
                if(ord[element[0]] < element[1] * y) {
                    success = false;
                    result = `Error: not enough ${element[0]} in stock`;
                    break;              
                }
            }

            if(success) {
                recipe.forEach(e => (ord[e[0]] -= e[1] * y));
            }

            return result;
        },
        report: () => Object.entries(ord)
                        .map(e => `${e[0]}=${e[1]}`)
                        .join(" "),
    };

    return x => {
        let [command, element, quantity] = x.split(' ');
        return commands[command](element, quantity);
    }
})


let manager = solution();
console.log(manager('prepare turkey 1'));
console.log(manager('restock protein 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock carbohydrate 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock fat 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('restock flavour 10'));
console.log(manager('prepare turkey 1'));
console.log(manager('report'));
