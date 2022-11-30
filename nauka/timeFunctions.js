const timeoutId = setTimeout(() => {
    console.log("Zadziałam za 5 sekund");
}, 5000);

if (timeoutId) {
    console.log("Hello")
}

function Car(colour, power) {
    this.show = function () {
        console.log("Car colour: " + this.colour + " Car power: " + this.power);
    };
    this.colour = colour;
    this.power = power;
}

Car.prototype.type = "movable";

const automobile = new Car("black");
automobile.show();
console.log(automobile.type);