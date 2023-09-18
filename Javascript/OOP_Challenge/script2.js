"use strict";
/* 
1. Re-create challenge #2, but this time using ES6 classes: create an 'EVCl' child class of the 'CarCl' class
2. Make the 'charge' property private;
3. Implement the ability to chain the 'accelerate' and 'chargeBattery' methods of this class, and also update the 'brake' method in the 'CarCl' class. They experiment with chining!

DATA CAR 1: 'Rivian' going at 120 km/h, with a charge of 23%

*/
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  acclerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed}km/h`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed}km/h`);
    return this;
  }
  get speedUs() {
    return this.speed / 1.6;
  }
  set speedUs(speed) {
    this.speed = speed * 1.6;
  }
}
class EVCl extends CarCl {
  #charge;
  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargebatttery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }
  acclerate() {
    this.speed += 20;
    this.#charge--;
    console.log(
      `${this.make} is going to ${this.speed} km/h, with a charge of ${
        this.#charge
      }`
    );
    return this;
  }
}
const rivian = new EVCl("Rivian", 120, 23);
console.log(rivian);
rivian.acclerate().acclerate().brake().chargebatttery(50).acclerate(); // chaining method
