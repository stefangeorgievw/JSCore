class Stringer{
    constructor(string, length){
        this.innerString = string;
        this.innerLength = length;
        
    }

    increase(length){
      this.innerLength += length;
    }

    decrease(length){
      if(this.innerLength - length >= 0){
          this.innerLength = this.innerLength - length;
      }else{
          this.innerLength = 0;
      }
    }

    toString(){
        if(this.innerString.length > this.innerLength){
        return this.innerString.substring(0,this.innerLength) +'...';
        }else{
        return this.innerString.substring(0,this.innerLength)
        }
    }
}


let s = new Stringer("Viktor", 6);
s.decrease(3);
console.log(s.innerLength);