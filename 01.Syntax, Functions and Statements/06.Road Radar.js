function solve(array) {
    let [speed, area] = array;

    let limit = {
        'motorway': 130,
        'interstate': 90,
        'city': 50,
        'residential': 20
    };
    
    if(speed > limit[area] + 20 && speed <= limit[area] + 40) {
        return "excessive speeding";
    } else if (speed > limit[area] && speed <= limit[area] + 20) {
        return "speeding";
    } else if (speed > limit[area] + 40) {
        return "reckless driving";
    } else {
        return "";
    }
}

console.log(solve([200, 'motorway']));
