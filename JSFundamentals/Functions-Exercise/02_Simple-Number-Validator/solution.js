function validate() {
  let buttons = document.getElementsByTagName('button');
  let button = buttons[0];
    button.addEventListener('click', validateNumber);

  function validateNumber() {
      let input = document.querySelector('#main input').value;
      let lastDigit = input[9];
      let weightArray = [2, 4, 8, 5, 10, 9, 7, 3, 6];
      let sum = 0;

      for (let i=0; i< weightArray.length;i++){
          sum += Number(input[i]) * weightArray[i];
      }
      console.log(sum);

      let reminder = sum % 11;

      if (reminder === 10){
          reminnder = 0;
      }


      let response = document.getElementById('response');

      if (reminder === +lastDigit){
           response.textContent = 'This number is Valid!';
      }else{
          response.textContent = 'This number is NOT Valid!';
      }

  }
}