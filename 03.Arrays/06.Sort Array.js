function solve(input) {
    return [...input]
        .sort((a,b) => a.length - b.length || a.localeCompare(b))
        .join("\n");
}

console.log(solve(
    [
     'alpha', 
     'beta', 
     'gamma'
    ]
));
