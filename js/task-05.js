class Car {
 // Write code under this line
 static getSpecs(car){
  return `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car._price}`;
  }
  constructor(objCar) {
    this.maxSpeed = objCar.maxSpeed;
    this._price = objCar.price;
    this.speed = 0;
    this.distance = 0;
    this.isOn = false;
  }
  get price() {
    return this._price;
  }
  set price(value) {
    this._price = value;
  }
  turnOn(isOn) {
    this.isOn = true;
    return isOn;
  }
  turnOff(isOn) {
    this.isOn = false;
    this.speed = 0;
    return isOn;
  }
 accelerate(value) {
  if ((this.speed + value) > this.maxSpeed ){
  return this.speed = this.maxSpeed;
  }
return this.speed += value;
  }
  decelerate(value) {
  if ((this.speed - value) < 0){ 
    return this.speed = 0;
  }else
  return this.speed -= value;
  }

  drive(hours) {
  if (this.isOn) {
 this.distance += hours * this.speed;
  }
  }
}
 
const mustang = new Car({ maxSpeed: 200, price: 2000 });
mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

// console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000'

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

// console.log(Car.getSpecs(mustang));
// 'maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000'

// console.log(mustang.price); // 2000
mustang.price = 4000;
// console.log(mustang.price); // 4000
