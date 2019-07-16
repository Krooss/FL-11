function getNumbers(string) {
	let array = [];
	for (let i = 0; i < string.length; i++) {
		if (!isNaN(string[i])) {
			array.push(parseInt(string[i], 10));
		}
	}
	return array;
}

function findTypes() {
	let typesObject = {};
	let numbers = 0;
	let strings = 0;
	let booleans = 0;
	let undefineds = 0;
	let symbols = 0;
	let functions = 0;
	let objects = 0;
	for (let i = 0; i < arguments.length; i++) {
		if (typeof arguments[i] === 'number') {
			numbers++;
			typesObject.number = numbers;
		} else if (typeof arguments[i] === 'string') {
			strings++;
			typesObject.string = strings; 
		} else if (typeof arguments[i] === 'boolean') {
			booleans++;
			typesObject.boolean = booleans;
		} else if (typeof arguments[i] === 'undefined') {
			undefineds++;
			typesObject.undefined = undefineds;
		} else if (typeof arguments[i] === 'symbol') {
			symbols++;
			typesObject.symbol = symbols;
		} else if (typeof arguments[i] === 'function') {
			functions++;
			typesObject.function = functions;
		} else {
			objects++;
			typesObject.object = objects;
		}
	}
	return typesObject;
}

function executeforEach(array, func) {
	for (let i = 0; i < array.length; i++) {
		func(array[i]);
	}
}

function mapArray(array, func) {
	let newArray = [];
	executeforEach(array, function(el) {
		newArray.push(func(el));
	});
	return newArray;
}

function filterArray(array, func) {
	let newArray = [];
	executeforEach(array, function(el) {
		if (func(el)) {
			newArray.push(el);
		}
	});
	return newArray;
}

function showFormattedDate(date) {
	let stringIndex = 4;
	let newDate = date.toDateString();
	newDate = newDate.slice(stringIndex);
	return 'Date: ' + newDate;
}

function canConvertToDate(date) {
	let isDate = new Date(date);
	isDate = isDate.toDateString();
	if (isDate === 'Invalid Date') {
		return false;
	} else {
		return true;
	}
}

function daysBetween(firstDate, secondDate) {
	const msInOneDay = 86400000;
	let msDifference = secondDate.getTime() - firstDate.getTime();
	let daysDifference = Math.round(msDifference / msInOneDay);
	return daysDifference;
}

function getAmountOfAdultPeople(data) {
	const daysIn18Years = 6570;
	return filterArray(
		data,
		person => daysBetween(new Date(person.birthday), new Date()) > daysIn18Years).length;
}

function keys(object) {
	let arrayKeys = [];
	for (let key in object) {
		if (key) {
			arrayKeys.push(key);
		}
	}
	return arrayKeys;
}

function values(object) {
	let arrayValues = [];
	for (let key in object) {
		if (key) {
			arrayValues.push(object[key]);
		}
	}
	return arrayValues;
}