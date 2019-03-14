let HolidayPackage= require('./HolidayPackage');
let assert = require('chai').assert;

describe('HolidayPackage', function (){
    describe('constructor', function(){
       it('standard', function(){
          let holiday = new HolidayPackage('Sofia','Summer');
          assert.equal(holiday.destination, 'Sofia');
          assert.equal(holiday.season, 'Summer');
          assert.isArray(holiday.vacationers);
          assert.equal(holiday.insuranceIncluded, false);
       });
    });

    describe('insuranceIncluded', function(){
        it('standard get', function(){
           let holiday = new HolidayPackage('Sofia','Summer');
           assert.equal(holiday.insuranceIncluded, false);
        });
        it('standard set', function(){
            let holiday = new HolidayPackage('Sofia','Summer');
            holiday.insuranceIncluded = true;
            assert.equal(holiday.insuranceIncluded, true);
        });
        it('false set', function(){
            let holiday = new HolidayPackage('Sofia','Summer');
            assert.throws(() => holiday.insuranceIncluded = 5, 'Insurance status must be a boolean');
        });
     });


     describe('addVacationer', function(){
        it('standard', function(){
           let holiday = new HolidayPackage('Sofia','Summer');
           holiday.addVacationer('Petar Petrov');
           assert.equal(holiday.vacationers[0], 'Petar Petrov');
        });
        it('standard with 2 vacationers', function(){
            let holiday = new HolidayPackage('Sofia','Summer');
            holiday.addVacationer('Petar Petrov');
            holiday.addVacationer('Ivan Petrov');
            assert.equal(holiday.vacationers.length, 2);
         });
        it('with non string', function(){
            let holiday = new HolidayPackage('Sofia','Summer');
            assert.throws(() => holiday.addVacationer(1), 'Vacationer name must be a non-empty string');
         });
         it('with empty string', function(){
            let holiday = new HolidayPackage('Sofia','Summer');
            assert.throws(() => holiday.addVacationer(' '), 'Vacationer name must be a non-empty string');
         });
         it('with one name', function(){
            let holiday = new HolidayPackage('Sofia','Summer');
            assert.throws(() => holiday.addVacationer('Ivan'), 'Name must consist of first name and last name');
         });
        
     });

     describe('showVacationers', function(){
        it('standard', function(){
           let holiday = new HolidayPackage('Sofia','Summer');
           holiday.addVacationer('Ivan Ivanov');
           holiday.addVacationer('Petar Petrov');
           assert.equal(holiday.showVacationers(), 'Vacationers:\nIvan Ivanov\nPetar Petrov');
        });
        it('no vacationers', function(){
            let holiday = new HolidayPackage('Sofia','Summer');
            assert.equal(holiday.showVacationers(), 'No vacationers are added yet');
         });
     });

     describe('generateHolidayPackage', function(){
        it('no vacationers', function(){
           let holiday = new HolidayPackage('Sofia','Summer');
           assert.throws(() => holiday.generateHolidayPackage(), 'There must be at least 1 vacationer added');
        });
        it('standard spring with no insurance', function(){
            let holiday = new HolidayPackage('Sofia','Spring');
            holiday.addVacationer('Ivan Petrov');
            holiday.addVacationer('Petar Petrov');
            assert.equal( holiday.generateHolidayPackage(), 'Holiday Package Generated\nDestination: Sofia\nVacationers:\nIvan Petrov\nPetar Petrov\nPrice: 800');
         });
         it('standard spring with insurance', function(){
            let holiday = new HolidayPackage('Sofia','Spring');
            holiday.addVacationer('Ivan Petrov');
            holiday.addVacationer('Petar Petrov');
            holiday.insuranceIncluded = true;
            assert.equal( holiday.generateHolidayPackage(), 'Holiday Package Generated\nDestination: Sofia\nVacationers:\nIvan Petrov\nPetar Petrov\nPrice: 900');
         });
         it('standard summer with insurance', function(){
            let holiday = new HolidayPackage('Sofia','Summer');
            holiday.addVacationer('Ivan Petrov');
            holiday.addVacationer('Petar Petrov');
            holiday.insuranceIncluded = true;
            assert.equal( holiday.generateHolidayPackage(), 'Holiday Package Generated\nDestination: Sofia\nVacationers:\nIvan Petrov\nPetar Petrov\nPrice: 1100');
         });
         it('standard winter with insurance', function(){
            let holiday = new HolidayPackage('Sofia','Winter');
            holiday.addVacationer('Ivan Petrov');
            holiday.addVacationer('Petar Petrov');
            holiday.insuranceIncluded = true;
            assert.equal( holiday.generateHolidayPackage(), 'Holiday Package Generated\nDestination: Sofia\nVacationers:\nIvan Petrov\nPetar Petrov\nPrice: 1100');
         });
         it('standard winter with no insurance', function(){
            let holiday = new HolidayPackage('Sofia','Winter');
            holiday.addVacationer('Ivan Petrov');
            holiday.addVacationer('Petar Petrov');
            assert.equal( holiday.generateHolidayPackage(), 'Holiday Package Generated\nDestination: Sofia\nVacationers:\nIvan Petrov\nPetar Petrov\nPrice: 1000');
         });
     });
});