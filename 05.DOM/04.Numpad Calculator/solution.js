function solve() {
    const sign = ['+', '-', '*', '/'];

    let input = document.getElementById('expressionOutput');
    let result = document.getElementById('resultOutput');

    document.body.addEventListener('click', (e) => {
        let value = e.target.value;
        checkOperation(value);
    })

    function checkOperation(value) {
        if(value === "Clear") {
            input.textContent = "";
            result.textContent = "";
        } else if(sign.includes(value)) {
            input.textContent += ` ${value} `;
        } else if (value === "=") {
            let parts = input.textContent.split(" ").filter(x => x !== "");
            parts.length === 3 ? calculate(parts) : result.textContent = NaN;
        } else {
            input.textContent += value;
        }
    }

    function calculate(parts) {
        let [firstOp, operator, secondOp] = [...parts];
        firstOp = Number(firstOp);
        secondOp = Number(secondOp);
        let operations = {
            '+': firstOp + secondOp,
            '-': firstOp - secondOp,
            '*': firstOp * secondOp,
            '/': firstOp / secondOp
        }

        result.textContent = operations[operator];
    }
}
