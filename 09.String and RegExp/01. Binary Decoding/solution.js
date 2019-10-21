function solve() {
	let input = document.getElementById('input').value;
	let sum = calculateSum(input);
	input = splitInput(input, sum);
	let result = splitGroups(input);
	showResult(result);

	function showResult(result) {
		document.getElementById('resultOutput').innerHTML = result;
	}

	function splitGroups(text) {
		let matched = text.match(/.{1,8}/g);
		let result = "";
		matched.forEach(element => {
			let asciiSymbol = String.fromCharCode(binaryToDecimal(element));
			const regExp = /[A-Za-z ]+/gm;
			if(regExp.exec(asciiSymbol)) {
				result += asciiSymbol;
			}
		});
		return result;
	}

	function binaryToDecimal(e) {
		return parseInt(e, 2);
	}

	function splitInput(input, sum) {
		let result = input.substring(sum);
		result = result.substring(0, result.length - sum);
		return result;
	}

	function calculateSum(input) {
		while(input.toString().length > 1) {
			input = spreadSum(input);
		}
		return input;
	}

	function spreadSum(num) {
		return Array.from(num.toString())
			.map(Number)
			.reduce((acc, cur) => acc + cur);
	}
}
