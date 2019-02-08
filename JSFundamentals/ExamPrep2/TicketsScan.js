function solve(text, typeOfOutput) {
   if (typeOfOutput === 'all'){
       all(text);
   } else if(typeOfOutput === 'name'){
       name(text);
   } else if(typeOfOutput === 'flight'){
       flight(text);
   } else if(typeOfOutput === 'company'){
       company(text);
   }


   function all(text) {
     let regexName = /\s([A-Z][a-zA-Z]*)-(([A-Z][a-zA-Z]*).-)*([A-Z][a-zA-Z]*)\s/g;
     let name = regexName.exec(text)[0].toString().trim().split('-').join(' ');

       let regexFlight = / ([A-Z]{1,3}[0-9]{1,5}) /g;
       let flightNumber = regexFlight.exec(text)[1];

       let regexAirport = / ([A-Z]{3}\/[A-Z]{3}) /g;
       let matchAirport = regexAirport.exec(text);
       let airports = matchAirport[1].split('/');

       let regexCompany = /- ([A-Z][a-z]*\*[A-Z][a-z]*) /g;
       let company = regexCompany.exec(text)[1].split('*').join(' ');

       console.log(`Mr/Ms, ${name}, your flight number ${flightNumber} is from ${airports[0]} to ${airports[1]}. Have a nice flight with ${company}.`)


   }
   function name(text) {
       let regex = /\s([A-Z][a-zA-Z]*)-(([A-Z][a-zA-Z]*).-)*([A-Z][a-zA-Z]*)\s/g;

       let name = regex.exec(text)[0];
      name = name.toString().trim().split('-').join(' ');


       console.log(`Mr/Ms, ${name}, have a nice flight!`);
    }
    function flight(text) {
        let regexFlight = / ([A-Z]{1,3}[0-9]{1,5}) /g;
        let matchFlight = regexFlight.exec(text);
        let regexAirport = / ([A-Z]{3}\/[A-Z]{3}) /g;
        let matchAirport = regexAirport.exec(text);
        let airports = matchAirport[1].split('/');


        console.log(`Your flight number ${matchFlight[1]} is from ${airports[0]} to ${airports[1]}.`);

    }
    function company(text) {
     let regex = /- ([A-Z][a-z]*\*[A-Z][a-z]*) /g;
     let matches = regex.exec(text);
     console.log(`Have a nice flight with ${matches[1].split('*').join(' ')}.`);
    }

}

solve('ahah Second-Testov )*))&&ba SOF/VAR ela** FB973 - Bulgaria*Air -opFB900 pa-SOF/VAr//_- T12G12 STD08:45  STA09:35 ', 'all');