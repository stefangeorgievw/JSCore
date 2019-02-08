function solve() {

    let inputNumbers = document.getElementsByTagName('input');
    let inputNumber = inputNumbers[0];
    let num = 0;
    let output = document.getElementById('output');

    function getNum(){

        num  = Number(output.textContent) || inputNumber.value;

    }

    function cookingNumbers(){
        let buttons = document.getElementsByTagName('button');

        buttons[0].addEventListener('click', chop);
        buttons[1].addEventListener('click', dice);
        buttons[2].addEventListener('click', spice);
        buttons[3].addEventListener('click', bake);
        buttons[4].addEventListener('click', fillet);


    }

    cookingNumbers();

    function chop(){
      getNum();
      num = num /  2;
        output.textContent = num;
    }

    function dice(){
      getNum();
      num = Math.sqrt(num);
      output.textContent = num;
    }

    function spice(){
        getNum();
        num = num + 1;
        output.textContent = num;
    }

    function bake(){
        getNum();
        num = num * 3;
        output.textContent = num;
    }

    function fillet(){
        getNum();
        num = num * 0.8;
        output.textContent = num;
    }
}
