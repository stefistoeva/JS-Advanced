function solve(...params) {
    let weight = params[1] / 1000;
    let money = weight * params[2];
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${params[0]}.`);
}
