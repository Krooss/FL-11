function getMin() {
	let minValue = arguments[0];
	for(let i = 0; i < arguments.length; i++) {
		if(minValue > arguments[i]) {
			minValue = arguments[i];
		}
	}
	return minValue;
}

getMin(2, 4, 6, -3, 8, -1, 5);
