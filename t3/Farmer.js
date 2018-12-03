// class Person {
// 	constructor(x, y, firstName) {
// 		this.x = x;
// 		this.y = y;
// 		this.firstName = firstName;
// 	}

// 	sayHello(otherPerson) {
// 		return `Hello ${otherPerson.firstName}, my name is ${this.firstName}`;
// 	}
// }
class Farmer extends Person {
	plantSeeds(seed) {
		seed.x = this.x;
		seed.y = this.y;
		seed.planted = true;
	}

	walk(xChange, yChange) {
		this.x += xChange;
		this.y += yChange;
	}
}
