function solve() {
    const numbersFirst = Array.from(document.querySelectorAll('input'));
    const [ quickCheck, clear ] = Array.from(document.querySelectorAll('button'));
    const paragraph = document.querySelector('p');
    const table = document.getElementsByTagName('table')[0];

    clear.addEventListener('click', () => {
        numbersFirst.map(num => num.value = '');
        table.style.border = 'none';
        paragraph.style.color = 'none';
        paragraph.textContent = '';
    });

    quickCheck.addEventListener('click', checkSudoku);

    function checkSudoku() {
        let matrix = [];
        numbers = numbersFirst;
        let rowLength = Math.sqrt(numbers.length);
        let d = rowLength;
        while(d) {
            matrix.push(numbers.splice(0, rowLength).map((e) => Number(e.value)));
            d--;
        }

        let sum = matrix[0].reduce((a, b) => a + b);
        for(let i = 0; i < matrix.length; i++) {
            let row = matrix[i].reduce((a, b) => a + b);
            let col = matrix.map(row => row[i]).reduce((a, b) => a + b);
            if(sum !== row || sum !== col) {
                sum = 0;
                break;
            }
        }
        checkGame(sum);
    }

    function checkGame(sum) {
        if(sum) {
            table.style.border = '2px solid green';
            paragraph.style.color = 'green';
            paragraph.textContent = 'You solve it! Congratulations!';
        } else {
            table.style.border = '2px solid red';
            paragraph.style.color = 'red';
            paragraph.textContent = 'NOP! You are not done yet...';
        }
    }
}
