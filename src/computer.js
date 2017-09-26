'use strict';

module.exports = class Computer {
    constructor(manufacturer, color, ram, harddisk, speed) {
      this._manufacturer = manufacturer;
      this._color = color;
      this._ram = ram;
      this._harddisk = harddisk;
      this._speed = speed;
    }

}