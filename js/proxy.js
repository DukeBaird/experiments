let target = {};
let handler = {
	get: function(obj, prop) {
		// Do something before returning. Maybe return a default value if it doesn't exist?
		return obj[prop];
	},
	set: function(obj, prop, value) {
		// Do something to the value before setting it. Manipulate in some way?
		obj[prop] = value;
	}
};


let p = new Proxy(target, handler);