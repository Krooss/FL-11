let a = parseFloat(prompt('Enter the 1st side length'));
let b = parseFloat(prompt('Enter the 2st side length'));
let c = parseFloat(prompt('Enter the 3st side length'));
let existanceCondition1 = a > 0 && b > 0 && c > 0;
let existanceCondition2 = a < b + c && b < a + c && c < a + b;

if (existanceCondition1 && existanceCondition2) {
	if (a === b && a === c && b === c) {
		console.log('Equivalent triangle');
	} else if (a === b || a === c || b === c) {
		console.log('Isosceles triangle');
	} else {
		console.log('Normal triangle');
	}
} else {
	console.log('Triangle doesn’t exist');
}



