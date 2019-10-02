function solve(input) {
    let step = Number(input.pop());
    return input
        .filter((el, index) => {
            return index % step === 0;
        })
        .join("\n");
}

console.log(solve(
    [
        '5', 
        '20', 
        '31', 
        '4', 
        '20', 
        '2'
    ]
));
