function solve(num1, num2) {
    while(num2) {
        var temp = num2;
        num2 = num1 % num2;
        num1 = temp;
    }
    return temp;
}
