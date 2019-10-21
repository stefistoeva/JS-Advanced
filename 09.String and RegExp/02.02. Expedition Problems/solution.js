function solve() {
    let keyword = document.getElementById('string').value;
    let text = document.getElementById('text').value;
    let message = text.match(`${keyword}(.+)${keyword}`)[1];

    const locationPattern = /(east|north).*?([0-9]{2})[^,]*?,[^,]*?([0-9]{6})/gim;

    let eastMatch;
    let northMatch;

    let result;
    while((result = locationPattern.exec(text)) !== null) {
        if(result[1].toLowerCase() === 'east') {
            eastMatch = result;
        } else {
            northMatch = result;
        }
    }

    let northP = document.createElement('p');
    northP.innerHTML = `${northMatch[2]}.${northMatch[3]} N`;

    let eastP = document.createElement('p');
    eastP.innerHTML = `${eastMatch[2]}.${eastMatch[3]} E`;

    let messageP = document.createElement('p');
    messageP.innerHTML = `Message: ${message}`;

    document.getElementById('result').appendChild(northP);
    document.getElementById('result').appendChild(eastP);
    document.getElementById('result').appendChild(messageP);
}
