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
    let Computer = new Computer('Dell', 'Grey', '16Gb', '1Tb', '4.5Hz');
    //handleling valid inputs
    describe('Creates an Object', () => {
        // Instatiation
        it('should create object if instantiated with valid input and return 3 as live', function() {
            assert.equal(Computer.manufacturer(), 'Dell');
        });

    });

})