let lookupChar = require('../UnitTesting/LookUpChar');
let assert = require('chai').assert;

describe('lookupChar', function(){
   it('should return undefined', function(){
      assert.equal(lookupChar(5,2), undefined);
   });

   it('should return undefined', function(){
    assert.equal(lookupChar('text','fake'), undefined);
   });

   it('should return undefined', function(){
    assert.equal(lookupChar('text',2.12), undefined);
   });

   it('should return Incorrect index', function(){
    assert.equal(lookupChar('text', 6), 'Incorrect index');
   });

   it('should return Incorrect index', function(){
    assert.equal(lookupChar('text', 4), 'Incorrect index');
   });

   it('should return Incorrect index', function(){
    assert.equal(lookupChar('text', -1), 'Incorrect index');
   });

   it('should return corrent answer', function(){
    assert.equal(lookupChar('text', 0), 't');
   });

   it('should return corrent answer', function(){
    assert.equal(lookupChar('Pesho', 1), 'e');
   });
})