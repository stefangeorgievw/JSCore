class Vacationer{
    constructor(fullName, creditCard){
        this.fullName = fullName;
        this.wishList = [];
        this.idNumber = this.generateIDNumber();
        if(!creditCard){
            this.creditCard = {'cardNumber': 1111, 'expirationDate': '', 'securityNumber': 111};
        }else{
           this.addCreditCardInfo(creditCard);
        }
    }

    get fullName(){
        return this._fullName;
    }

    set fullName(value){
       if(value.length !== 3){
           throw Error('Name must include first name, middle name and last name');
       }

       value.forEach(x => {
           let regex = /^[A-Z]{1}[a-z]+$/g;
           if(regex.test(x) === false){
               throw Error('Invalid full name');
           }
       });

       this._fullName = 
       {
          'firstName' : value[0],
          'middleName' : value[1],
          'lastName' : value[2]
       };
    }

    generateIDNumber(){

        let fullName = this.fullName;
        let firstLetterCode = fullName.firstName.charCodeAt(0);
        let middleNameLength = fullName.middleName.length;

        let id = 231 * firstLetterCode + 139 * middleNameLength;
        let digitToAdd = '7';
        let vowels = ['a', 'e', 'o', 'i', 'u'];
        vowels.forEach(v => {
           if(v === fullName.lastName[fullName.lastName.length - 1]){
               digitToAdd = '8';
           }
        });

        id += digitToAdd;
        return id;
    }

    addCreditCardInfo(input){
        if(input.length < 3){
            throw Error('Missing credit card information');
        }
      
        if(typeof input[0] === 'string' || typeof input[2] === 'string' ){
            throw Error('Invalid credit card details');
        }

        this.creditCard = {'cardNumber':input[0], 'expirationDate': input[1], 'securityNumber': input[2]};
    }

    addDestinationToWishList(destination){
        if(this.wishList.includes(destination)){
            throw Error('Destination already exists in wishlist');
        }

        this.wishList.push(destination);
        this.wishList.sort((a,b) => a.length - b.length);
    }

    getVacationerInfo(){
        let result = `Name: ${this.fullName.firstName} ${this.fullName.middleName} ${this.fullName.lastName}\n`;
        result += `ID Number: ${this.idNumber}\n`;
        result += 'Wishlist:\n';
        if(this.wishList.length === 0){
            result += 'empty\n';
        }else{
            result += this.wishList.join(', ');
            result += '\n';
        }
        result += 'Credit Card:\n';
        result += `Card Number: ${this.creditCard.cardNumber}\n`;
        result += `Expiration Date: ${this.creditCard.expirationDate}\n`;
        result += `Security Number: ${this.creditCard.securityNumber}`;

        return result;
    }
}
