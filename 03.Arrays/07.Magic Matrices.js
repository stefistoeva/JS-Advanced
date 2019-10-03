function solve(input) {
    let sum = input[0].reduce((a, b) => a + b);
    let cols = input.reduce((acc, curr, index, matrix) => {
        if(!acc[index]) {
            acc[index] = matrix.map((x) => x[index]);
        }
        return acc;
    }, []);
    let row = [...input];
    return row.every(r => r.reduce((a, b) => a + b) === sum) && 
            cols.every(c => c.reduce((a, b) => a + b) === sum);
}

console.log(solve(
    [
        [4, 5, 6],
        [6, 5, 4],
        [5, 5, 5]
    ]
));
