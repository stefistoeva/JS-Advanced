function solve(input) {
    let step = Number(input.pop()) % input.length;

    return input.reduceRight((acc, cur) => {
        if(step){
            acc = [cur, ...acc.slice(0, input.length - 1)];
            step--;
        }
        return acc;
    }, [...input]).join(" ");
}

console.log(solve(
    ['1', 
'2', 
'3', 
'4', 
'2']
));

console.log(solve(
    ['Banana', 
'Orange', 
'Coconut', 
'Apple', 
'15']
));
