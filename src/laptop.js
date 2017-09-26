
const Computer = require('./computer');

module.exports =  class Laptop extends Computer {
  constructor(manufacturer, color, ram, harddisk, speed, batteryType){
    super(manufacturer, color, ram, harddisk, speed);
    this._batteryType = batteryType
  }
  
  get batteryType() {
    return this._batteryType;
  }
  
  fanNoise() {
    return 'sssssssshhh';
  }
}