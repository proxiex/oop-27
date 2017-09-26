const Computer = require('./computer');


module.exports = class Desktop extends Computer {
  constructor(manufacturer, color, ram, harddisk, speed, screenType){
    super(manufacturer, color, ram, harddisk, speed);
    this._screenType = screenType
  }
  
  get screenType() {
    return this._screenType;
  }
  
  fanNoise() {
    return 'whossssh';
  }
}