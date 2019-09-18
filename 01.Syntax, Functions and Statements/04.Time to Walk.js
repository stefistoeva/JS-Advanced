function solve(steps, lenght, speed) {
    speed /= 3.6;
    let distanceInMeters = steps * lenght;
    let time = distanceInMeters / speed;
    let rest = Math.floor(distanceInMeters / 500) * 60;
    time += rest;

    let timeHr = Math.floor(time / 3600);
    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));

    console.log((timeHr < 10 ? "0" : "") + timeHr + ":" + (timeMin < 10 ? "0" : "") + timeMin + ":" + (timeSec < 10 ? "0" : "") + timeSec);
}
