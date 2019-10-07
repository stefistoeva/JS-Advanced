function solve(num) {
    return function (addent) {
        return num + addent;
    }
}

let add = solve(5);
console.log(add(2));
