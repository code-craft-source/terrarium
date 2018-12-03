// Here is the Cat superclass
// class Cat {
// 	constructor(name, color) {
// 		this.name = name;
// 		this.color = color;
// 	}

// 	meow() {
// 		return "meow";
// 	}
// }

class AlleyCat extends Cat {
	constructor(name, color) {
		var dirtyColor = `Dirty ${color}`;
		super(name, dirtyColor)
	}

	meow() {
		return "HISSSSS";
	}

	wash() {
		this.color = this.color.replace('Dirty ', '');
		this.meow();
	}
}
