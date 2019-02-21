class SortedList{
    constructor(){
        this.size = 0;
        this.numbers = [];
    }

    add(element){
      if(!isNaN(element)){
          this.numbers.push(element);
          this.numbers.sort((a,b) => a - b);
          this.size++;
          return this.numbers;
         
      }
      return this.numbers;
    }

    remove(index){
        if(index < 0 || index >= this.numbers.length){
            return;
        }
        this.size--;
        return this.numbers.splice(index, 1);
       
    }

    get(index){
        if(index < 0 || index >= this.numbers.length){
            return;
        }

        return this.numbers[index];
    }
}

let test = new SortedList();
console.log(test.add(4));