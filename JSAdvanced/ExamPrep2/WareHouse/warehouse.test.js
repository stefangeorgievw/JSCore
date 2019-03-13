let Warehouse = require('./warehouse');
let assert = require('chai').assert;

describe('WareHouse', function(){
  
    describe('constructor', function (){
        it('with negative value', function(){
            assert.throws(() => new Warehouse(-2), "Invalid given warehouse space");
        });
        it('with zero', function(){
            assert.throws(() => new Warehouse(0), "Invalid given warehouse space");
        });
        it('standard', function(){
            let warehouse = new Warehouse(5);
            assert.equal(warehouse.capacity, 5);
            assert.isTrue(warehouse.availableProducts !== undefined);
        });
        
    });

    describe('addProduct', function (){
        it('standard', function(){
            let warehouse = new Warehouse(5);
            warehouse.addProduct('Food', 'Burger', 2);
            assert.equal(warehouse.availableProducts['Food']['Burger'], 2);
        });
        it('standard increase quatity', function(){
            let warehouse = new Warehouse(5);
            warehouse.addProduct('Food', 'Burger', 2);
            warehouse.addProduct('Food', 'Burger', 1);
            assert.equal(warehouse.availableProducts['Food']['Burger'], 3);
        });
        it('no capacity', function(){
            let warehouse = new Warehouse(2);
            warehouse.addProduct('Food', 'Burger', 2);
            assert.throws(() => warehouse.addProduct('Food', 'Burger', 1), "There is not enough space or the warehouse is already full");
        });

        
    });

    describe('occupiedCapacity', function (){
        it('standard', function(){
            let warehouse = new Warehouse(5);
            warehouse.addProduct('Food', 'Burger', 2);
            warehouse.addProduct('Drink','Cola', 2);
            assert.equal(warehouse.occupiedCapacity(), 4);
        });
        it('with no products', function(){
            let warehouse = new Warehouse(5);
           
            assert.equal(warehouse.occupiedCapacity(), 0);
        });
    });

    describe('orderProducts', function (){
        it('standard with Food', function(){
            let warehouse = new Warehouse(10);
            warehouse.addProduct('Food','Eggs', 2);
            warehouse.addProduct('Food', 'Burger', 1);
            warehouse.addProduct('Food', 'Pizza', 5);
            warehouse.orderProducts('Food');
            assert.deepEqual(warehouse.availableProducts['Food'], {'Pizza': 5, 'Eggs': 2, 'Burger': 1});
        });
        it('standard with Drink', function(){
            let warehouse = new Warehouse(10);
            warehouse.addProduct('Drink','Cola', 2);
            warehouse.addProduct('Drink', 'Fanta', 1);
            warehouse.addProduct('Drink', 'Water', 5);
            warehouse.orderProducts('Drink');
            assert.deepEqual(warehouse.availableProducts['Drink'], {'Water': 5, 'Cola': 2, 'Fanta': 1});
        });
       
    });

    describe('revision', function (){
        it('no products', function(){
            let warehouse = new Warehouse(10);
            assert.equal(warehouse.revision(), 'The warehouse is empty');
        });
        it('standard', function(){
            let warehouse = new Warehouse(20);
            warehouse.addProduct('Drink', 'Fanta', 1);
            warehouse.addProduct('Drink', 'Water', 2);
            warehouse.addProduct('Food', 'Pizza', 3);
            warehouse.addProduct('Food', 'Burger', 6);
            assert.equal(warehouse.revision(), 'Product type - [Food]\n- Pizza 3\n- Burger 6\nProduct type - [Drink]\n- Fanta 1\n- Water 2');
        });
        it('standard with no drinks', function(){
            let warehouse = new Warehouse(20);
            warehouse.addProduct('Food', 'Pizza', 3);
            warehouse.addProduct('Food', 'Burger', 6);
            assert.equal(warehouse.revision(), 'Product type - [Food]\n- Pizza 3\n- Burger 6\nProduct type - [Drink]');
        });
        it('standard with no food', function(){
            let warehouse = new Warehouse(20);
            warehouse.addProduct('Drink', 'Water', 3);
            warehouse.addProduct('Drink', 'Cola', 6);
            assert.equal(warehouse.revision(), 'Product type - [Food]\nProduct type - [Drink]\n- Water 3\n- Cola 6');
        });
       
    });

    describe('scrape a product', function (){
        it('no product with that name', function(){
            let warehouse = new Warehouse(10);
            warehouse.addProduct('Drink', 'Fanta', 1);
            warehouse.addProduct('Drink', 'Water', 2);
            warehouse.addProduct('Food', 'Pizza', 2);
            assert.throws(() => warehouse.scrapeAProduct('Burger',1), 'Burger do not exists');
        });
        it('no products', function(){
            let warehouse = new Warehouse(10);
            assert.throws(() => warehouse.scrapeAProduct('Burger',1), 'Burger do not exists');
        });
        it('standard', function(){
            let warehouse = new Warehouse(20);
            warehouse.addProduct('Drink', 'Fanta', 1);
            warehouse.addProduct('Drink', 'Water', 2);
            warehouse.addProduct('Food', 'Pizza', 3);
            warehouse.addProduct('Food', 'Burger', 6);
            warehouse.scrapeAProduct('Water', 1);
            assert.equal(warehouse.availableProducts['Drink']['Water'],1);
        });
        it('standard with quantity becoming less tha 0', function(){
            let warehouse = new Warehouse(20);
            warehouse.addProduct('Drink', 'Fanta', 1);
            warehouse.addProduct('Drink', 'Water', 2);
            warehouse.addProduct('Food', 'Pizza', 3);
            warehouse.addProduct('Food', 'Burger', 6);
            warehouse.scrapeAProduct('Water', 3);
            assert.equal(warehouse.availableProducts['Drink']['Water'],0);
        });
       
    });
});