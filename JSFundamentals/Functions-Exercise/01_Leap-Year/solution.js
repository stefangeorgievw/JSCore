function leapYear() {
  let buttons = document.getElementsByTagName('button');
  let button = buttons[0];
  console.log(button);
  button.addEventListener('click',solve);

  function solve() {

      let years = document.getElementsByTagName('input');
      let year = years[0].value;

      let result = isLeapYear(year);

      if (result === true){
          let div = document.getElementById('year').childNodes;
          div[1].textContent = 'Leap Year';
          div[3].textContent = year;
      }else{
          let div = document.getElementById('year').childNodes;
          div[1].textContent = 'Not Leap Year';
          div[3].textContent = year;
      }

      years[0].value = '';

  }
    function isLeapYear(year) {

        return  ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);



    }
  }

