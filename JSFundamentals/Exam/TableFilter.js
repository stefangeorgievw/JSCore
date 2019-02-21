function solve(array, command) {
   let table = Array.from(array);
   let commandInput = command.split(' ');
   let commandHeader = commandInput[1];
   let sortedRows = [];
   let sortTable = [];

   let headers  = table[0].filter(x=> x === commandHeader);
   let header = headers[0];
   let headerIndex= table[0].indexOf(header);
   if (commandInput[0] === 'hide'){
       for (let i = 0; i < table.length; i++) {
           table[i].splice(headerIndex,1);

       }
       for (let i = 0; i < table.length; i++) {
           console.log(table[i].join(' | '));

       }

   } else if(commandInput[0] === 'filter'){
       console.log(table[0].join(' | '));
       table.forEach(x=> {
           if (x[headerIndex] === commandInput[2]){
               console.log(x.join(' | '));
           }
       })
   } else if(commandInput[0] === 'sort'){
       for (let i = 1; i < table.length; i++){
           sortedRows.push(table[i][headerIndex]);
       }

      sortedRows = sortedRows.sort((a,b) => a.localeCompare(b));
       sortTable.push(table[0]);

         while(sortedRows.length > 0){
             for (let i = 1; i < table.length; i++) {
                 if (table[i][headerIndex] === sortedRows[0]){
                     sortTable.push(table[i]);
                     sortedRows.splice(0,1);
                 }
             }

         }

       for (let i = 0; i < sortTable.length; i++) {
           console.log(sortTable[i].join(' | '))
       }

   }




}

solve([['name', 'age', 'grade'],

        ['Peter', '25', '5.00'],

        ['George', '34', '6.00'],

        ['Marry', '28', '5.49']],

    'hide name');