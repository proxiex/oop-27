const assert = require('chai').assert;
const expect = require('chai').expect;
const Computer = require('../src/computer');
const Desktop = require('../src/desktop');
const Laptop = require('../src/laptop');

/* 
manufacturer
cooor
ram 
harddisk
speed
*/
describe('Computer', () => {
    let computer = new Computer('Dell', 'Grey', '16Gb', '1Tb', '4.5Hz');
    //handleling valid inputs
    describe('Creates an Object', () => {
        // Instatiation
        it('Should return Dell as Manufacturers Name', function() {
            assert.equal(computer.manufacturer, 'Dell');
        });

    });

    describe('Handles Invalid input', () => {
        // Instatiation
        let result = function () {
          return  computer = new Computer(1, 'Grey', '16Gb', '1Tb', '4.5Hz');
        }
        
        it('Should return TypeError', function() {
            expect(result).to.throw(TypeError, 'Invalid input type')
        });

      });     

});
  
describe('Desktop', () => {
    let desktop = new Desktop('Dell', 'Grey', '16Gb', '1Tb', '4.5Hz', 'LCD');
    //handleling valid inputs
    describe('Creates an Object and demonstrate Inheritance', () => {
        // Instatiation
        it('should retun Dell as manufactures name', function() {
            assert.equal(desktop.manufacturer, 'Dell');
          });
          
           // Instatiation
        it('should return LCD as screen ', function() {
            assert.equal(desktop.screenType, 'LCD');
        });
          
        it('Should override fanNoise Method', function() {
            assert.equal(desktop.fanNoise(), 'whossssh');
        });

    });
})
    
describe('Laptop', () => {
      let laptop = new Laptop('Dell', 'Grey', '16Gb', '1Tb', '4.5Hz', 'LiOn');
      //handleling valid inputs
      describe('Creates an Object and demonstrate Inheritance', () => {
          // Instatiation
          it('should retun Dell as manufactures name', function() {
              assert.equal(laptop.manufacturer, 'Dell');
            });
            
            // Instatiation
          it('should return LiOn as battery name', function() {
              assert.equal(laptop.batteryType, 'LiOn');
          });
            
          it('Should override fanNoise Method', function() {
              assert.equal(laptop.fanNoise(), 'sssssssshhh');
          });

      });
  });
  