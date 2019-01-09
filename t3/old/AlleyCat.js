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

	speak() {
		return "HISS! I'm "+ this.name + " a " + this.color + " alley cat";
	}
	
	wash() {
		this.color = this.color.replace('dirty ', '');
	}

}


var whiskers = new Cat("Whiskers","grey")


whiskers.speak()  //"HISS! I'm Whiskers a dirty grey alley cat";
whiskers.wash()
whiskers.speak()  //"HISS! I'm Whiskers a grey alley cat";

