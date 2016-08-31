function logArgs(...args) {
	console.log("length: ", args.length);
	console.log("arg at index 1: ", args[1]);
	for (const arg of args) {
		console.log(arg);
	}
}


logArgs(1,2,3);
logArgs(5,6);