function program(input) {
    let cars = new Map();

    for(let line of input) {
        let [brand, model, produced] = line.split(' | ');
        produced = Number(produced);

        if(!cars.has(brand)) {
            cars.set(brand, new Map()); 
        }

        if(!cars.get(brand).has(model)) {
            cars.get(brand).set(model, 0);
        }

        cars.get(brand).set(model, cars.get(brand).get(model) + produced);
    }

    for(let [brand, modelCount] of cars) {
        console.log(brand);
        for(let [model, produced] of modelCount) {
            console.log(`###${model} -> ${produced}`);
        }
    }
}

program(['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']
);
