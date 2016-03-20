[1,2,3].map(x => 
	console.log(x * x)
);

[[1,2], [1,2], [2,3]].map(x => 
	console.log(x[0]*x[1])
);

let foo = (x,y) => { 
	return x + y; 
};
console.log(foo(3,5));


const arr = [1,2,3,4,5,6,7];
foo = arr.reduce((a,b) => 
	a + b
);
console.log(foo);