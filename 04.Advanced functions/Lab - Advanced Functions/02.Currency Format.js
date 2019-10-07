function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if(symbolFirst) {
        return Symbol + ' ' + result;
    } else {
        return result + ' ' + symbol;
    }
}

function result(formatter) {
    return function(value) {
        return formatter(',', '$', true, value);
    }
}

let dollarFormatter = result(currencyFormatter);
console.log(dollarFormatter(5345));
console.log(dollarFormatter(3.1429));
