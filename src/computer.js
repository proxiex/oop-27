'use strict';

module.exports = class Computer {
    constructor(manufacturer, color, ram, harddisk, speed) {
      if ( 
          typeof manufacturer !== 'string' ||
          typeof color !== 'string' ||
          typeof ram !== 'string' ||
          typeof harddisk !== 'string' ||
          typeof speed !== 'string'
          ) 
      {
            throw new TypeError ('Invalid input type');
          }
          
      this._manufacturer = manufacturer;
      this._color = color;
      this._ram = ram;
      this._harddisk = harddisk;
      this._speed = speed;
    }
    
    get manufacturer () {
      return this._manufacturer;
    }
    
    get color () {
      return _color;
    }
    
    set color (newColor) {
      this._color = newColor;
    }
    
    get ram () {
      return _ram;
    }
    
    set ram (newRam) {
      this._ram = newRam;
    }
    
    get harddisk () {
      return _harddisk;
    }
    
    set harddisk (newHarddisk) {
      this._harddisk = newHarddisk;
    }
    
    get speed () {
      return _speed;
    }
    
    on () {
      return `${this._manufacturer} : Loading...`
    }
    
    off () {
      return 'Shutting down...'
    }
    
    fanNoise() {
      return 'comuter fan noise';
    }
}