class Vacation{
   constructor(organizer, destination, budget){
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
   }

   get numberOfChildren(){
       let _count = 0;
       for(let grade in this.kids){
             _count += this.kids[grade].length;
       }
       return _count;
   }

   registerChild(name, grade, budget){
       if(budget >= this.budget){
        if(this.kids[grade] === undefined){
            this.kids[grade] = [];
        }

           let kidExists = this.kids[grade].some(kid=> {
             let kidsParts =kid.split('-');
             if(kidsParts[0] === name){
                 return true;
             }
                 return false;
           });

           if(kidExists){
               return `${name} is already in the list for this ${this.destination} vacation.`
           }else{
               this.kids[grade].push(`${name}-${budget}`);
               return this.kids[grade];
           }
       }else{
           return `${name}'s money is not enough to go on vacation to ${this.destination}.`
       }
   }

   removeChild(name, grade){
       if(this.kids[grade] === undefined){
        return `We couldn't find ${name} in ${grade} grade.`;
       }
    let kidExists = this.kids[grade].some(kid=> {
        let kidsParts =kid.split('-');
        if(kidsParts[0] === name){
            return true;
        }
            return false;
      });

      if(kidExists){
         let kids = this.kids[grade].filter(kid => kid.split('-')[0] !== name);
         this.kids[grade] = kids;
         return kids;
      }else{
          return `We couldn't find ${name} in ${grade} grade.`;
      }
   }

   toString(){
       let result = `${this.organizer} will take ${this.numberOfChildren} children on trip to ${this.destination}`;
       result += '\n';
       Object.keys(this.kids).sort((a,b) => a - b);
       for(let grade in this.kids){
        
            result+= `Grade: ${grade}`;
            result += '\n';
            for(let i=0; i< this.kids[grade].length;i++){
                result += `${i + 1}. ${this.kids[grade][i]}`;
                result += '\n';
            }
           
       }

       return result;
   }
}