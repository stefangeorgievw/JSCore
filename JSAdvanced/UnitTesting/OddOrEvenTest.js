let isOddOrEven = require('../UnitTesting/OddOrEven');
let assert = require('chai').assert;


describe('isOddOrEven', function (){
    it('should return undefined',function (){
        assert.equal(isOddOrEven(13), undefined);
    });

    it('should return undefined',function(){
       assert.equal(isOddOrEven({name: 'Pesho'}));
    });

    it('should return odd', function(){
        assert.equal(isOddOrEven('Pesho'),'odd');
    });

    it('should return even', function(){
        assert.equal(isOddOrEven('Ivan'),'even');
    });

    it('should return even', function(){
        assert.equal(isOddOrEven('Ivan'),'even');

        assert.equal(isOddOrEven('Qnko'),'even');

        assert.equal(isOddOrEven('Pesho'),'odd');
    });
})