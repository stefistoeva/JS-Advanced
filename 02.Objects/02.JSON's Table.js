function program(input) {
    let employees = [];
   
    let ouput = `<table>\n`;

    for(let line of input) {
        let myObj = JSON.parse(line);
        let salary = Number(myObj['salary']);
        ouput += ` <tr>\n  <td>${myObj['name']}</td>\n  <td>${myObj['position']}</td>\n  <td>${salary}</td>\n </tr>\n`;
    }

    ouput += `</table>`;
    console.log(ouput);
}

program([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
]);
