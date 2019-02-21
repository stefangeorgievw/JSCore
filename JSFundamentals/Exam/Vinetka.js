function solve(inputArray) {
    let towns = [];
    inputArray.forEach(x=> {
        if (towns.some(y=> y.town === x.town)){
            if (towns.some(y => y.cars[x.model] === x.model)){
                let town = towns.filter(c=> c.town === x.town);
                town[0]['cars'][x.model].push({
                    'regNumber' : x.regNumber,
                    'vinetkaPrice': x.price
                });
            }else{
                let town = towns.filter(c=> c.town === x.town);
                town[0]['cars'][x.model] = [];
                town[0]['cars'][x.model].push({
                    'regNumber' : x.regNumber,
                    'vinetkaPrice': x.price
                });
                console.log(towns[0]['cars'][x.model]);
            }

        }else{
            let town = {
                'town' : x.town,
                 'cars' : {}

            };
            town['cars'][x.model] = [];

                town['cars'][x.model].push({
               'regNumber' : x.regNumber,
               'vinetkaPrice': x.price
            });



            towns.push(town);

        }

    });

//Most Profitable
    towns = towns.sort((a,b) => compareTowns(a,b));
    let profit = 0;
    for (let model in towns[0].cars){
        towns[0]['cars'][model].forEach(x=> profit += x.vinetkaPrice);
    }
    console.log(`${towns[0].town} is most profitable - ${profit} BGN`);

    //Most Driven Model

    let sortedArray = [];
    for (let model in towns[0].cars){
        let currentBest = towns[0]['cars'][model].length;
        sortedArray.push([model,towns[0]['cars'][model],currentBest])
    }

    sortedArray.sort((a,b) => compareMostDrivenCars(a,b));

    let mostDrivenCar = sortedArray[0][0];
    console.log(`Most driven model: ${mostDrivenCar}`);

    //List of towns
    let validTowns = [];
    towns.forEach(x=> {
        if (x.cars.hasOwnProperty(mostDrivenCar)){
            validTowns.push(`${x.town}`);
            x.cars[mostDrivenCar].forEach(c=> validTowns.push(c.regNumber));
        }
    });

    console.log(validTowns);

    function compareTowns(a,b){
        let aSum = 0;
        let bSum = 0;
        let aVinetkiCount = 0;
        let bVinetkiCount = 0;
        for (let car in a.cars){
            aVinetkiCount = a.cars[car].length;
            a.cars[car].forEach(x=> {
              aSum += x.vinetkaPrice;
            })
        }

        for (let car in b.cars){
            bVinetkiCount = b.cars[car].length;
            b['cars'][car].forEach(x=> {
                bSum += x.vinetkaPrice;
            })
        }



        if (aSum > bSum) {
            return -1;
        }else if(aSum === bSum){

            if (aVinetkiCount > bVinetkiCount){
                return - 1;
            } else if (aVinetkiCount === bVinetkiCount){
                return a.town - b.town;
            }
        }else{
            return 1;
        }






    }

    function compareMostDrivenCars(a,b){
        let aSum = 0;
        let bSum = 0;
      if (a[2] < b[2]){
          return -1;
      } else if(a[2] === b[2]){
          a[1].forEach(x=> {
              aSum += x.vinetkaPrice;
          });
          b[1].forEach(x=> {
              bSum += x.vinetkaPrice;
          });

          if (aSum > bSum){
              return -1;
          } else if (aSum === bSum){
              return a[0] - b[0];
          }
      }else {
          return 1;
      }
    }





}

solve([{ model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2}, { model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8}, { model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9}, { model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3}, { model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 3} ]);