[1,2,3].map(x => 
	console.log(x * x)
);

[[1,2], [1,2], [2,3]].map(x => 
	console.log(x[0]*x[1])
);

let foo = (x,y) => x + y; 
console.log(foo(3,5)); // 8

const arr = [1,2,3,4,5,6,7];
console.log( arr.reduce((a,b) => a + b ) );

const person = {
	name: 'ben',
	height: 5.5,
	weight: 125
}

const megamorph = person => ({
	...person,
	height: 100
	weight: 1000
});

// implied return of a copy of the original person, with height and weight changed to 100/1000.