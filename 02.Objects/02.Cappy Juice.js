function solve(array) {
    let juices = {};
    let bottles = {};

    array
        .forEach((line) => {
            let [name, quantity] = line.split(' => ');
            quantity = Number(quantity);

            if(!juices.hasOwnProperty(name)) {
                juices[name] = 0;
            }

            juices[name] += quantity;

            if(juices[name] >= 1000) {
                bottles[name] = Math.trunc(juices[name] / 1000);
            }
    });

    let keys = Object.keys(bottles);
    for(let name of keys) {
        let quantity = bottles[name];

        console.log(`${name} => ${quantity}`);
    }
}

solve(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']
);
