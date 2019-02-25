function solve(requirements){
  let car = {};
  car.model = requirements.model;
  if(requirements.power <= 90){
      car.engine = {
          power : 90,
          volume : 1800,
      };
  } else if(requirements.power <=120){
      car.engine = {
        power : 120,
        volume : 2400,
      };
  } else{
    car.engine = {
        power : 200,
        volume : 3500,
      };
  }
  car.carriage = {
      type : requirements.carriage,
      color : requirements.color
  };
  let wheel = 0;
  if(requirements.wheelsize % 2 === 0){
     wheel = requirements.wheelsize - 1;
  }else{
      wheel = requirements.wheelsize;
  }

  car.wheels = [wheel, wheel, wheel, wheel];

  return car;
}

solve({ model: 'Opel Vectra', 

power: 110, 

color: 'grey', 

carriage: 'coupe', 

wheelsize: 17 } );