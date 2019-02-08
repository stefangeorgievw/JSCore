function solve() {
    let products = [];
    let buttons = document.querySelectorAll("div.product button");
    let textareas = document.getElementsByTagName("textarea");
    let textarea = textareas[0];

    let buyButton = document.querySelector("div#exercise > button");
    console.log(buyButton);
    buyButton.addEventListener('click', buy);

    let milkButton = buttons[0].addEventListener('click', addMilk);
    let breadButton = buttons[1].addEventListener('click', addBread);
    let tomatoesButton = buttons[2].addEventListener('click', addTomatoes);

    function addMilk() {

        let product = {name:'Milk', price:1.09};
        products.push(product);
        textarea.value += `Added ${product.name} for ${product.price.toFixed(2)} to the cart.` + '\n';
    }

    function addBread() {
        let product = {name:'Bread', price:0.80};
        products.push(product);
        textarea.value += `Added ${product.name} for ${product.price.toFixed(2)} to the cart.` + '\n';
    }

    function addTomatoes() {
        let product = {name:'Tomatoes', price:0.99};
        products.push(product);
        textarea.value += `Added ${product.name} for ${product.price.toFixed(2)} to the cart.` + '\n';
    }

    function buy() {
       let names = [];
       let sumPrice = 0;
       products.forEach(x=> sumPrice += Number(x.price));
       products.forEach(x=>{
           if (names.includes(x.name)){
           }else{
               names.push(x.name);
           }

       });

       textarea.value += `You bought ${names.join(', ')} for ${sumPrice.toFixed(2)}.` + '\n';


    }
}