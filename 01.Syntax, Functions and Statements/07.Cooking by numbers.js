function solve(array) {
    let start = Number(array[0]);
    for(let i = 1; i <= 5; i++) {
        switch(array[i]) {
            case 'chop': console.log(start /= 2);
            break;
            case 'dice': console.log(start = Math.sqrt(start));
            break;
            case 'spice': console.log(++start);
            break;
            case 'bake': console.log(start *= 3);
            break;
            case 'fillet': console.log(start -= start * 0.20);
            break;
            default: break;
        }
    }
}

solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
console.log("\n");
solve([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);
