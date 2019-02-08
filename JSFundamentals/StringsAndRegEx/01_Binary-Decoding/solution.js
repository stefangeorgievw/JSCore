function solve() {
    let sum = 0;
  let numbers = document.getElementById('str').value;

    for (let i = 1; i < numbers.length - 1; i++) {
       sum += Number(numbers[i]);
    }

    let countToRemove = 0;
    while (sum) {
        countToRemove += sum % 10;
        sum = Math.floor(sum / 10);
    }

   numbers = numbers.slice(countToRemove + 1,numbers.length - countToRemove - 1);

    let arrayOfChars = [];

    while(numbers.length > 0){
        let segment = numbers.slice(0,8).toString();

        numbers = numbers.slice(8,numbers.length);
        arrayOfChars.push(parseInt(segment,2));
    }

    let result= '';
    arrayOfChars.forEach(x=> result += String.fromCharCode(x));
    let resultSpan = document.getElementById('result');
    resultSpan.textContent = result;


}