function solve(number) {
    number = (number.toString()).split("").map(Number);
    let firstDigit = number[0];
    let isSame = true;
    number.forEach(function(element) {
        if (element != firstDigit) {
            isSame = false;
        }
    }) 

    let sum = number
    .reduce((acc, cur) => acc + cur);
    console.log(isSame);
    console.log(sum);
}
