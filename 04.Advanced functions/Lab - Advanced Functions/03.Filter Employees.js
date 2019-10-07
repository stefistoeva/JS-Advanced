function filterByProp(prop, value, element){
    return element[prop] === value;
}

function splitParams(criteria) {
    return criteria.split('-');
}

function formatEmployee(el, index) {
    return `${index}. ${el.first_name} ${el.last_name} - ${el.email}`;
}

function solve(data, criteria) {
    return criteria === 'all' ? 
        JSON.parse(data)
        .map(formatEmployee)
        .join('\n')
        : 
        JSON.parse(data)
        .filter(filterByProp.bind(undefined, ...splitParams(criteria)))
        .map(formatEmployee)
        .join('\n')
}

console.log(solve(`[{
    "id": "1",
    "first_name": "Ardine",
    "last_name": "Bassam",
    "email": "abassam0@cnn.com",
    "gender": "Female"}, 
    {"id": "2",
    "first_name": "Kizzee",
    "last_name": "Jost",
    "email": "kjost1@forbes.com",
    "gender": "Female"},
    {"id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"}]`,
    "gender-Female"));
