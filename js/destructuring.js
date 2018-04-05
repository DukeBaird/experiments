const obj = {
	"_id": "1234567890",
	public: false,
	properties: [{
		"_id": "123",
		type: 1
	}, {
		"_id": "456",
		type: 2
	}]
};

const { _id, public, properties } = obj;

console.log(_id); // expecting "1234567890"
console.log(public); // expecting false
console.log(properties); // expecting array of 2 objects