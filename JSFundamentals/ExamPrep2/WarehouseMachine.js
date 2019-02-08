function solve(inputArray){

    let brands = {};

 for (let line of inputArray){
     line = line.split(', ');
    if (line[0] === 'IN'){
        inf(line);
    }else if(line[0] === 'OUT'){
        out(line);
    }else if(line[0] === 'REPORT'){
        report(line);
    }else if(line[0] === 'INSPECTION'){
        inspection(line);
    }
 }


 function inf(line) {

     let brandName = line[1];
     let coffeeName = line[2];
     let expireDate = line[3];
     let quantity = Number(line[4]);

     if (brands[brandName] !== undefined){


         if (brands[brandName][coffeeName] !== undefined){

             if (expireDate > brands[brandName][coffeeName].expireDate){
                 brands[brandName][coffeeName].expireDate = expireDate;
                 brands[brandName][coffeeName].quantity = quantity;
             }else if(expireDate === brands[brandName][coffeeName].expireDate){
                 brands[brandName][coffeeName].quantity += quantity
             }

         }else{
             brands[brandName][coffeeName] = {
                 'expireDate': expireDate,
                 'quantity': quantity
             };
         }
     }else {
         brands[brandName] = {};
         brands[brandName][coffeeName] = {
             'expireDate': expireDate,
             'quantity': quantity
         };



     }


 }
 function out(line) {

     let brandName = line[1];
     let coffeeName = line[2];
     let expireDate = line[3];
     let quantity = Number(line[4]);

     let brandObject = brands[brandName];

     if (brands[brandName] !== undefined && brandObject[coffeeName]){
         if (brandObject[coffeeName].expireDate > expireDate && brandObject[coffeeName].quantity >= quantity){
             brandObject[coffeeName].quantity -= quantity;
         }
     } 
 }
 function report(line) {
     console.log('>>>>> REPORT! <<<<<');
     for (let brand in brands){
         console.log(`Brand: ${brand}:`);
         for (let coffee in brands[brand]){
             console.log(`-> ${coffee} -> ${brands[brand][coffee].expireDate} -> ${brands[brand][coffee].quantity}.`);
         }



     }
 }
 function inspection(line) {
     console.log('>>>>> INSPECTION! <<<<<');
     let keysSorted = Object.keys(brands).sort(function(a,b){return brands[a]-brands[b]});
     for (let i = 0; i < keysSorted.length; i++) {
         console.log(`Brand: ${keysSorted[i]}:`);
         for (let coffee in brands[keysSorted[i]]){
             console.log(`-> ${coffee} -> ${brands[keysSorted[i]][coffee].expireDate} -> ${brands[keysSorted[i]][coffee].quantity}.`);
         }
     }

 }


}

solve([

    "IN, Batdorf & Bronson, Espresso, 2025-05-25, 20",

    "IN, Folgers, Black Silk, 2023-03-01, 14",

    "IN, Lavazza, Crema e Gusto, 2023-05-01, 5",

    "IN, Lavazza, Crema e Gusto, 2023-05-02, 5",

    "IN, Folgers, Black Silk, 2022-01-01, 10",

    "IN, Lavazza, Intenso, 2022-07-19, 20",

    "OUT, Dallmayr, Espresso, 2022-07-19, 5",

    "OUT, Dallmayr, Crema, 2022-07-19, 5",

    "OUT, Lavazza, Crema e Gusto, 2020-01-28, 2",

    "INSPECTION"
]);