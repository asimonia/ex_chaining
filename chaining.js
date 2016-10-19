var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];


function filterIt(element, index, array) {
	if (element <= 19) {
		return element;
	}
}

function mapIt(element, index, array) {
	var another = (element * 1.5) - 1;
	return another;
}

function reduceIt(total, num) {
	return total + num;
}

// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Use difference function
// Remove any integers greater than 19.
// Use the filter
// Multiply each remaining number by 1.5 and then subtract 1.
// Use the map function
// Chain em

var chaining = integers.sort(function(a, b) {return b - a})
.filter(filterIt)
.map(mapIt)
.reduce(reduceIt);

console.log(chaining);

