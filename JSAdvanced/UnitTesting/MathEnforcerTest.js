let mathEnforcer = require('../UnitTesting/MathEnforcer');
let assert = require('chai').assert;

describe('mathEnforcer', function(){
    it('should return undefined', function(){
       assert.equal(mathEnforcer.addFive('text'), undefined);
    });

    it('should return correct result', function(){
      assert.equal(mathEnforcer.addFive(4), 9);
   });

   it('should return correct result with floating point', function(){
      assert.equal(mathEnforcer.addFive(4.5), 9.5);
   });

   it('should return correct result with negative value', function(){
      assert.equal(mathEnforcer.addFive(-4), 1);
   });

   it('should return undefined', function(){
      assert.equal(mathEnforcer.subtractTen('text'), undefined);
   });

   it('should return correct result', function(){
      assert.equal(mathEnforcer.subtractTen(15), 5);
   });

   it('should return correct result with negative value', function(){
      assert.equal(mathEnforcer.subtractTen(-10), -20);
   });

   it('should return correct result with floating point', function(){
      assert.equal(mathEnforcer.subtractTen(10.5), 0.5);
   });

   it('should return undefined', function(){
      assert.equal(mathEnforcer.sum('text', 2), undefined);
   });

   it('should return undefined', function(){
      assert.equal(mathEnforcer.sum(2, 'text'), undefined);
   });

   it('should return correct result', function(){
      assert.equal(mathEnforcer.sum(15 , 5), 20);
   });

   it('should return correct result with floation point', function(){
      assert.equal(mathEnforcer.sum(15.2 , 5.3), 20.5);
   });



 
   
 })