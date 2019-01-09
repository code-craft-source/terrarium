class Person {
	constructor(x, y, firstName) {
		this.x = x;
		this.y = y;
		this.firstName = firstName;
	}

	sayHello(otherPerson) {
		return `Hello ${otherPerson.firstName}, my name is ${this.firstName}`;
	}
}