function printGreatestCommonDivisor(firstNumber, secondNumber) {
    while (firstNumber != secondNumber)  
    {  
        if (firstNumber > secondNumber) {
            firstNumber -= secondNumber;
        } else {
            secondNumber -= firstNumber;
        }
    }  
    
    return firstNumber;
}