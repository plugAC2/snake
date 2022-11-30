class Vehicle {
    constructor(name) {
        this.name = name;
    }
}

class Boat extends Vehicle {
    constructor(name) {
        super(name);
    };
    sail() {
        console.log("Boat sails")
    }
}

class Car extends Vehicle {
    constructor(name, power) {
        super(name);
        this.power = power;
    };

    drive() {
        console.log("Car drives");
    }
}

class Plane extends Vehicle {
    constructor(name) {
        super(name);
    };

    fly() {
        console.log("Aeroplane flies")
    }
}

const lodka = new Boat("Beatka");
lodka.sail();
const autko = new Car("Artur");
autko.drive();
const samolocik = new Plane("Gucio");
samolocik.fly();

console.log(lodka.name);
console.log(autko.name);
console.log(samolocik.name);