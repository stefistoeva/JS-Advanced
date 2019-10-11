function addItem() {
    const select = document.getElementById('menu');
    const itemTextInput = document.getElementById('newItemText');
    const itemValueInput = document.getElementById('newItemValue');

    const option = document.createElement('option');
    option.value = itemValueInput.value;
    option.textContent = itemTextInput.value;

    select.appendChild(option);
    itemTextInput.value = '';
    itemValueInput.value = '';
}
