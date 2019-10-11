function toggle() {
    const content = document.getElementById('extra');
    const [ span ] = document.getElementsByTagName('span');

    if(span.textContent === 'More') {
        span.textContent = 'Less';
        content.style.display = 'block';
    } else {
        span.textContent = 'More';
        content.style.display = 'none';
    }
}
