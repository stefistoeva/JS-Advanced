function solve() {
    document.querySelector("#exercise > article > button").addEventListener('click', addToDB);

    function addToDB() {
        let input = document.getElementsByTagName('input')[0].value;
        let inputValue = input[0].toLocaleUpperCase();

        let name = inputValue + input.toLowerCase().substr(1);
        let row = document.getElementsByTagName('li')[inputValue[0].charCodeAt(0) - 65];
        
        row.textContent.length === 0 ? row.textContent = name : row.textContent += `, ${name}`;
    }
}
