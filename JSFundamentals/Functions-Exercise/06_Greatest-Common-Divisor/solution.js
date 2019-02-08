function greatestCD() {

    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let result = gcd(num1,num2);
    let output = document.getElementById('result');
    output.textContent = result;

    function gcd(num1, num2) {
        if ( ! num2) {
            return num1;
        }

        return gcd(num2, num1 % num2);
    };
}