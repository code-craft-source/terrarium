class Car {
	constructor(name, color) {
		this.name = name;
		this.color = color;
		this.speed = 0;
	}

	drive(newSpeed) {
		this.speed = newSpeed
		return `The ${this.name} is driving at ${this.speed} miles-per-hour.`;
	}

	stop() {
		this.speed = 0
		return `The ${this.name} has stopped.`;
	}

	blowHorn() {
		return `${this.name} says BEEEEEP!`;
	}	

}


class ConvertibleCar extends Car {
    constructor(name, color) {
        this.isRoofOpen = false;
        super(name, color)
    }

    openRoof() {
     	this.isRoofOpen = true;
    }

    closeRoof() {
     	this.isRoofOpen = false;
    }

}


class FlyingCar extends Car {
    constructor(name, color) {
	    this.altitude = 0;
	    super(name, color)
	}

    drive(newAlt) {
     	this.altitude = newAlt;
     	return `The ${this.name} is flying at height of ${this.altitude} feet.`;
    }


}

var myHonda = new Car("Honda Civic","white")
var mustangConvertible = new ConvertibleCar("Mustang","red")
var jetsonCar = new FlyingCar("Jetson Flyer","silver")

myHonda.drive(55)  //"The Honda Civic is driving at 55 miles-per-hour";
mustangConvertible.drive(70)  //"The Mustang is driving at 70 miles-per-hour.";

mustangConvertible.openRoof() //mustangConvertible.isRoofOpen = true
myHonda.openRoof() //ERROR: no such method

jetsonCar.blowHorn() //"The Jetson Flyer says BEEEEEP!";
jetsonCar.drive(100) //"The Jetson Flyer is flying at heigth of 100 feet.";





