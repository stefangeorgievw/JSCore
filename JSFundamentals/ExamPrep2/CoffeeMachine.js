function solve(inputArray){

    let coffeeCaffeinPrice = 0.8;
    let coffeeDeCafPrice = 0.9;
    let teaPrice = 0.8;
    let income = 0;


    for(let order of inputArray){
        let change = 0;
        let price = 0;
        let milkPrice;
        let sugar = 0;
        order = order.split(', ');
        let coins = Number(order[0]);
        let typeOfDrink = order[1];

        if (typeOfDrink === 'coffee'){
            if (order[2] === 'caffeine'){
                price = coffeeCaffeinPrice;
            }else{
                price = coffeeDeCafPrice;
            }
            if (order.length === 5){
                 milkPrice = 0.1 * price;
                 price += Number(milkPrice.toFixed(1));
                sugar = Number(order[4]);
            }else{
                sugar = Number(order[3]);
            }

            if (sugar > 0){
                price += 0.1;
            }

        }else if (typeOfDrink === 'tea'){
            price = teaPrice;
            if (order[2] === 'milk'){
                milkPrice = 0.1 * price;
                price += Number(milkPrice.toFixed(1));
                sugar = Number(order[3]);
            }else{
                sugar = Number(order[2]);
            }


            if (sugar > 0){
                price += 0.10;
            }

        }

        if (coins >= price){
            change = coins - price;
            income += price;
            console.log(`You ordered ${typeOfDrink}. Price: ${price.toFixed(2)}$ Change: ${change.toFixed(2)}$`)
        }else{
            change = price - coins;
            console.log(`Not enough money for ${typeOfDrink}. Need ${change.toFixed(2)}$ more.`)
        }

    }

console.log(`Income Report: ${income.toFixed(2)}$`);

}



