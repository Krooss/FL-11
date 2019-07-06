let a1 = parseFloat(prompt('Enter a1 value'));
let a2 = parseFloat(prompt('Enter a2 value'));
let b1 = parseFloat(prompt('Enter b1 value'));
let b2 = parseFloat(prompt('Enter b2 value'));
let c1 = parseFloat(prompt('Enter c1 value'));
let c2 = parseFloat(prompt('Enter c2 value'));
const halfLine = 2;
let c1HalfCoord = (a1 + b1) / halfLine; 
let c2HalfCoord = (a2 + b2) / halfLine;

if (c1 === c1HalfCoord && c2 === c2HalfCoord) {
	console.log(true);
} else {
	console.log(false);
}
