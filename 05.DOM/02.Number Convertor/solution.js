function solve() {
    const selectMenuTo = document.getElementById('selectMenuTo');

    document.querySelector("#container > button").addEventListener('click', convert);

    function convert() {
        let number = Number(document.getElementById('input').value);
        let result;
        if(selectMenuTo.value === 'binary') {
            result = decimalToBinary(number);
        } else if (selectMenuTo.value === 'hexadecimal') {
            result = decimalToHexadecimal(number);
        }

        appendResult(result);
    }

    function appendResult(result) {
        document.getElementById('result').value = result;
    }

    function decimalToBinary(number) {
        return (number >>> 0).toString(2);
    }

    function decimalToHexadecimal(number) {
        return number.toString(16).toUpperCase();
    }
    
    function createSelectMenuOptions() {
        let binaryOption = document.createElement('option');
        binaryOption.textContent = 'Binary';
        binaryOption.value = 'binary';

        let hexadecimalOption = document.createElement('option');
        hexadecimalOption.textContent = 'Hexadecimal';
        hexadecimalOption.value = 'hexadecimal';
        
        selectMenuTo.appendChild(binaryOption);
        selectMenuTo.appendChild(hexadecimalOption);
    }
    
    createSelectMenuOptions();
}
