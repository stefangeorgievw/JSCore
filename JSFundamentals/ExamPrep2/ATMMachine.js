function solve(inputArray) {
    let banknotes = [];
    let bankBalance = 0;


 for (let array of inputArray){
   if (array.length > 2){
       insert(array);
   }else if (array.length === 2){
       withdraw(array);
   } else if (array.length === 1){
       report(array);
   }
 }

 
 function insert(array) {;
     banknotes.push(...array);
     banknotes = banknotes.sort((a,b) => b - a);

     let insertedCash = array.reduce((a,b) => a+ b);
     bankBalance += insertedCash;
     console.log(`Service Report: ${insertedCash}$ inserted. Current balance: ${bankBalance}$.`)
 }

 function withdraw(array) {
     let balance = array[0];
     let moneyToWithdraw = array[1];


     if (moneyToWithdraw > balance){
         console.log(`Not enough money in your account. Account balance: ${balance}$.`)
     }else if(bankBalance < moneyToWithdraw){
          console.log('ATM machine is out of order!');
     } else{
         for (let i = 0; i < banknotes.length; i++) {
             if (moneyToWithdraw - banknotes[i] >= 0){
                 moneyToWithdraw -= banknotes[i];
                 banknotes[i] = 0;

             }
         }

         banknotes = banknotes.filter(x=> x !== 0);

         console.log(`You get ${array[1]}$. Account balance: ${balance - array[1]}$. Thank you!`);

         bankBalance -= array[1];
     }
    }

    function report(array) {
       let banknote = array[0];
       let result = banknotes.filter(x=> x === banknote);
       console.log(`Service Report: Banknotes from ${banknote}$: ${result.length}.`)
    }



}

solve([[10, 20, 10, 50, 5, 10], [100, 30], [20], [20, 10, 10], [5, 10], [150, 150]]);