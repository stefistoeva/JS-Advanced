let solution = (function () {
    function add(vector1, vector2) {
        return vector1.map(function (num, index) {
            return num + vector2[index];
        })
    }

    function multiply(vector1, scalar) {
        return vector1.map(function (num) {
            return num * scalar;
        })
    }

    function length(vector1) {
        return Math.sqrt(vector1.reduce(function(previous, current) {
            return previous += Math.pow(current, 2);
        }, 0)); 
    }

    function dot(vector1, vector2) {
        return vector1.reduce(function (previous, current, index, second) {
            return previous += (current * vector2[index]);
        }, 0, vector2)
    }

    function cross(vector1, vector2) {
        return vector1[0] * vector2[1] - vector1[1] * vector2[0];
    }

    return {
        add, 
        multiply,
        length, 
        dot, 
        cross
    }
})();

console.log(solution.add([3, 5],[6,1]));
console.log(solution.multiply([3.5, -2], 2));
console.log(solution.length([3, -4]));
console.log(solution.dot([1, 0], [0, -1]));
console.log(solution.cross([3, 7], [1, 0]));
console.log(solution.cross([1, 1], [-1, 1]));
