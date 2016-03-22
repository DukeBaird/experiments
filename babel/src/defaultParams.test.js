

function foo(x=5, y=6) {
	return x+y;
}

console.log(foo()); // expecting 11
console.log(foo(2)); // expecting 8
console.log(foo(2,2)); // expecting 4