function solve(input) {
    let uniqueArrays = [];
    let nestedArrays = input
        .map(JSON.parse);

    for (let arr of nestedArrays) {
        let sum = arr.reduce((prev, current) => prev + current, 0);

        let containsSum = uniqueArrays
            .some((x) => x.reduce((a, b) => a + b, 0) === sum);

        if (!containsSum) {
            uniqueArrays.push(arr.sort((a, b) => b - a));
        }
    }

    let output = uniqueArrays
        .sort((a, b) => a.length - b.length)
        .map((arr) => `[${arr.join(', ')}]`)
        .join('\n');

    console.log(output);
}

solve(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]
);
