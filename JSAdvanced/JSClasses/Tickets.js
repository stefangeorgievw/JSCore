function solve(arr, sortBy){
   class Ticket{
       constructor(destination, price, status){
           this.destination = destination;
           this.price = Number(price);
           this.status = status;
       }
   }

   let tickets = [];

   arr.forEach(x => {
      x = x.split('|');
      let ticket = new Ticket(x[0], x[1], x[2]);
      tickets.push(ticket);    
   });

   if(sortBy === 'destination'){
     return tickets.sort((a,b) => a.destination.localeCompare(b.destination));

   }else if(sortBy === 'price'){
    return  tickets.sort((a,b) => a.price - b.price);

   }else if(sortBy === 'status'){
    return  tickets.sort((a,b) => a.status.localeCompare(b.status));
   }

   
}


solve(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'destination');