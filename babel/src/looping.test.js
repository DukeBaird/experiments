import "babel-polyfill";

const arr = [1,2,3,4,5,6,7,8,9,10];


function logAll(args) {

	console.log(args);

	for (let arg of args) {
		console.log(arg);
	}
}

logAll(arr);
