const name = "Ben";
const sport = "Fencing";

let person = {name, sport};

console.log(person); // expect {name: "Ben", sport: "Fencing"}

const print = function() {
	console.log(`${this.name} really enjoys ${this.sport}!`);
}

person = {name, sport, print};
person.print(); // expert "Ben really enjoys Fencing!"

person = {
	name,
	sport,
	print,
	favourite(fav) {
		this.fav = fav;
		console.log( `Set favourite: ${this.fav}`)
	}
} 

person.favourite("Curling");
console.log(person); // {name: "Ben", sport: "Fencing", print: ƒ, favourite: ƒ, fav: "Curling"}