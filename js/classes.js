class Game {

	constructor(name, genre) {
		this.name = name;
		this.genre = genre;
	}

	print() {
		console.log(`The game ${this.name} is a ${this.genre} game.`);
	}

}