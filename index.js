// Code your solution in this file
function findMatching(drivers, string){
	return drivers.filter(function(driver){
		return driver.toLowerCase() === string.toLowerCase();
	});
}

function fuzzyMatch(drivers, string){
	const pattern = new RegExp(`^${string}.+`,'i');
	return drivers.filter(driver => pattern.test(driver));
}

function matchName(drivers, string){
	return drivers.filter(driver => driver.name === string);
}