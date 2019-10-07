let add = (function() {
    let sum = 0;

    return function add(num) {
        sum += num;

        add.toString = function() {
            return sum;
        }

        return add;
    }
}())

console.log(add(1).toString());
console.log(add(1)(6)(-3).toString());
