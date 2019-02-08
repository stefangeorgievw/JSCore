function solve(number){
    let str = number.toString();
    let firstDigit = str[0];
    let sum = +firstDigit;
    let result = "true";
    for(i = 1; i < str.length; i++){
        sum += + str[i];
        if(firstDigit != str[i]){
            result = "false";
        }
    }
    console.log(result);
    console.log(sum);   
}
solve(1234);