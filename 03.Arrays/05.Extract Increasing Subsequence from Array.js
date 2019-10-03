function solve(input) {
    return input
        .reduce((acc, curr) => {
            if(curr >= Math.max(...acc)) {
                acc.push(curr);
            }
            return acc;
        }, [])
        .join("\n");   
}

console.log(solve(
    [
        1, 
        3, 
        8, 
        4, 
        10, 
        12, 
        3, 
        2, 
        24
    ]
));
