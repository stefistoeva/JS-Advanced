function acceptance() {
	let field = document.getElementById('fields');
	let company = field.children[0].children[0];
	let product = field.children[1].children[0];
	let quantity = field.children[2].children[0];
	let scrape = field.children[3].children[0];
	let textarea = document.getElementById('warehouse');

	document.getElementById('acceptance').addEventListener('click', addToForm);

	function addToForm() {
		if(product.value !== '' && company.value !== '' && Number(quantity.value) && Number(scrape.value) && Number(quantity.value) > Number(scrape.value)) {
			let pieces = Number(quantity.value) - Number(scrape.value);

			let div = document.createElement('div');
			let p = document.createElement('p');
			p.textContent = `[${company.value}] ${product.value} - ${pieces} pieces`;
			div.appendChild(p);

			const btn = document.createElement('button');
			btn.setAttribute('type', 'button');
			btn.textContent = 'Out of stock';
			div.appendChild(btn);

			btn.addEventListener('click', () => {
				let child = btn.parentNode;
				let parent = child.parentNode;
				parent.removeChild(child);
			});

			textarea.appendChild(div);
			
			company.value = '';
			product.value = '';
			quantity.value = '';
			scrape.value = '';
		}
	}
}
