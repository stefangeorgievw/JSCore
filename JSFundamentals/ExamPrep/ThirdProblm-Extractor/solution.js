function solve() {
    let inputElement = document.getElementById('input');
    let outputElement = document.getElementById('output');
    let button = document.getElementsByTagName('button')[0].addEventListener('click', f);

    function f(){
        let inputString = inputElement.value;
        let numberOfChars = inputString.match(/[0-9]+/)[0];
        inputString = inputString.substr(numberOfChars.length, Number(numberOfChars));
        let separator = inputString.substr(inputString.length - 1, 1);
        let regexString = inputString.split(separator)[0];
        let regex = new RegExp(`[${regexString}]+`, 'g');
        let realString = inputString.split(separator)[1];
       let result = realString.split(regex).join('').split('#').join(' ');

       outputElement.value = result;
    }

}