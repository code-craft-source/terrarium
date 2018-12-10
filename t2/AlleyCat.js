// Here is the Cat superclass
// class Cat {
// 	constructor(name, color) {
// 		this.name = name;
// 		this.color = color;
// 	}

// 	speak() {
// 		return "Meow! I'm "+this.name+" a "+this.color+" cat";
// 	}
// }

class AlleyCat extends Cat {
	constructor(name, color) {
		var dirtyColor = `dirty ${color}`;
		super(name, dirtyColor)
	}

	meow() {
		return "HISS! I'm "+ this.name + " a " + this.color + " alley cat";
	}
}


var whiskers = new Cat("Whiskers","grey")
var garfield = new Cat("Garfield","orage striped")


whiskers.speak()  //"HISS! I'm Whiskers a dirty grey alley cat";
garfield.speak()  //"HISS! I'm Garfield a dirty grey alley cat";

