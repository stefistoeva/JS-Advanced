function solve(array) {
    let speed = Number(array[0]);
    let area = String(array[1]);

    let limit = 0;
    switch(area){
        case 'motorway': limit = 130;
            break;
        case 'interstate': limit = 90;
            break;
        case 'city': limit = 50;
            break;
        case 'residential': limit = 20;
            break;
            default: break;
    }
    if(speed > limit + 20 && speed <= limit + 40) {
        return "excessive speeding";
    } else if (speed > limit && speed <= limit + 20) {
        return "speeding";
    } else if (speed > limit + 40) {
        return "reckless driving";
    } else {
        return "";
    }
}

console.log(solve([200, 'motorway']));
