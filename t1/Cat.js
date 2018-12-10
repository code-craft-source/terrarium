class Cat {
	constructor(name, color) {
		this.name = name;
		this.color = color;
	}

	speak() {
		return "Meow! I'm "+this.name+" a "+this.color+" cat";
	}
}

var whiskers = new Cat("Whiskers","grey")
var garfield = new Cat("Garfield","orage striped")


whiskers.speak()  //"Meow! I'm Whiskers a grey cat";
garfield.speak()  //"Meow! I'm Garfield a orange striped cat";
