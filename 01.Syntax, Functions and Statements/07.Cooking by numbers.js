function solve(array) {
    let start = Number(array.shift());

    let operations = {
        chop: (num) => {return (num / 2)},
        dice: (num) => {return (Math.sqrt(num))},
        spice: (num) => {return ++num},
        bake: (num) => {return num *= 3},
        fillet: (num) => {return num -= num * 0.20}
    }

    for(let i = 0; i < 5; i++) {
       start = operations[array[i]](start);
       console.log(start);

        // switch(array[i]) {
        //     case 'chop': console.log(start /= 2);
        //     break;
        //     case 'dice': console.log(start = Math.sqrt(start));
        //     break;
        //     case 'spice': console.log(++start);
        //     break;
        //     case 'bake': console.log(start *= 3);
        //     break;
        //     case 'fillet': console.log(start -= start * 0.20);
        //     break;
        //     default: break;
        // }
    }
}

solve(['32', 'chop', 'chop', 'chop', 'chop', 'chop']);
console.log("\n");
solve([9, 'dice', 'spice', 'chop', 'bake', 'fillet']);
