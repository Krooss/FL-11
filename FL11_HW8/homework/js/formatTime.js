const minInOneDay = 1440;
const minInOneHour = 60;

function formatTime(minutes) {
	let days = Math.floor(minutes / minInOneDay);
	minutes = minutes % minInOneDay;
	let hours = Math.floor(minutes / minInOneHour);
	minutes = minutes % minInOneHour;
	return days + ' day(s) ' + hours + ' hour(s) ' + minutes + ' minute(s)';
}

formatTime(3601);