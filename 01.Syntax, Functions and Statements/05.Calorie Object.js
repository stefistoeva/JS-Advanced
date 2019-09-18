function solve(array) {
    let obj = {};

    for(let i = 0; i < array.length; i += 2) {
        let element = array[i];
        let value = Number(array[i + 1]);

        obj[element] = value;
    }
    console.log(obj);
}
