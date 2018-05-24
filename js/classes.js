class Game {

	constructor(name, genre) {
		this.name = name;
		this.genre = genre;
	}

	print() {
		console.log(`The game "${this.name}" is a ${this.genre} game.`);
	}
}

const aoe = new Game("Age of Empires", "strategy");
aoe.print(); // The game "Age of Empires" is a strategy game.

class Multiplayer_Game extends Game { 
// A Multiplayer_Game *is* a Game. Multiplayer_Game is the *child*, and Game is the *parent*

	constructor(name, genre, players) {
		super(name, genre); // run the constructor for Game
		this.players = players;
	}

	print() {
		super.print(); // Call the print method from the parent class
		console.log(`It can have ${this.players} people playing.`);
	}
}

const smash = new Multiplayer_Game("Super Smash Bros", "Fighting", 8);

smash.print();	// The game "Super Smash Bros" is a Fighting game.
				// It can have 8 people playing.