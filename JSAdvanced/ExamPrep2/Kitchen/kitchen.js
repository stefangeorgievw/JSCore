class Kitchen{
  constructor(budget){
    this.budget = budget;
    this.menu = {};
    this.productsInStock = {};
    this.actionsHistory = [];
  }

  loadProducts(products){
   
    let resultText = [];
    Array.from(products).forEach(product =>{
       let productsInfo = product.split(' ');
       let productName = productsInfo[0];
       if(this.budget >= productsInfo[2]){
          if(this.productsInStock[productName] === undefined){
            this.productsInStock[productName] = Number(productsInfo[1]);
          }else{
            this.productsInStock[productName] += Number(productsInfo[1]);
          }

          this.actionsHistory.push(`Successfully loaded ${productsInfo[1]} ${productName}`);
          resultText.push(`Successfully loaded ${productsInfo[1]} ${productName}`);
          this.budget -= productsInfo[2];
       }else{
          this.actionsHistory.push(`There was not enough money to load ${productsInfo[1]} ${productName}`);
          resultText.push(`There was not enough money to load ${productsInfo[1]} ${productName}`);
       }
    });

    return resultText.join('\n');
  }

  addToMenu(meal, neededProducts, price){
    if(this.menu[meal] === undefined){
       let products = Array.from(neededProducts).map(pr => {
          let productParts = pr.split(' ');
          let productObject = {'name': productParts[0], 'quatity': productParts[1]};
          return productObject;
       });

       this.menu[meal] = {'products': products, 'price': price};

       return `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
    }else{
       return `The ${meal} is already in the our menu, try something different.`
    }
  }

  showTheMenu(){
    let result = [];
    if(Object.keys(this.menu).length === 0){
      return 'Our menu is not ready yet, please come later...';
    }else{
    for(let meal in this.menu){
       result.push(`${meal} - $ ${this.menu[meal]['price']}`);
    }
    return result.join('\n').trim();
    }
  }

  makeTheOrder(meal){
    if(this.menu[meal] === undefined){
      return `There is not ${meal} yet in our menu, do you want to order something else?`;
    }else{
       let validProducts =this.menu[meal].products.filter(product => {
          if(this.productsInStock[product.name] !== undefined){
            if(this.productsInStock[product.name] >= product.quatity){
               return product;
            }
          }
       });
       

       if(validProducts.length === this.menu[meal].products.length){
         this.budget += this.menu[meal].price;

         this.menu[meal].products.forEach(product=> {
          if(this.productsInStock[product.name] !== undefined){
            this.productsInStock[product.name] -= product.quatity;
          }
         });

         return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;

       }else{
         return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
       }
    }
  }


}

let testProducts = [
  'Banana 10 5', 
  'Banana 20 10', 
  'Strawberries 50 30', 
  'Yogurt 10 10', 
  'Yogurt 500 1500', 
  'Honey 5 50'];

let dummyKitchen = new Kitchen(1000);
dummyKitchen.loadProducts(testProducts);
dummyKitchen.addToMenu('frozenYogurt', ['Yogurt 0.1', 'Honey 0.1', 'Banana 0.1', 'Strawberries 1'], 9.99);
dummyKitchen.addToMenu('frozenYogurt', ['Yogurt 0.1', 'Honey 0.1', 'Banana 0.1', 'Strawberries 1'], 9.99);
dummyKitchen.addToMenu('frozenYogurt', ['Yogurt 0.1', 'Honey 0.1', 'Banana 0.1', 'Strawberries 1'], 9.99);
dummyKitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55);
console.log(dummyKitchen.makeTheOrder('frozenYogurt'));