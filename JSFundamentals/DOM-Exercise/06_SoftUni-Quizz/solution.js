function solve() {
	let buttons = document.getElementsByTagName('button');
	buttons[0].addEventListener('click', firstQuestion);

	function firstQuestion(){
	  let sections = document.getElementsByTagName('section');

	  sections[1].style.display = 'block';
    }

    buttons[1].addEventListener('click', secondQuestion);

    function secondQuestion(){
        let sections = document.getElementsByTagName('section');

        sections[2].style.display = 'block';
    }


    let firstQuestionAnswer = 2013;
    let secondQuestionAnswer = "Pesho";
    let thirdQuestionAnswer = "Nakov";

    function GetResult(){
        let answers = [];
        let radios = document.querySelectorAll("input");
        let correctAnswersCount = 0;

        Array.from(radios).forEach(function(currentRadioBtn){
            if(currentRadioBtn.checked === true){
                answers.push(currentRadioBtn.value);
            }
        })

        if(answers.includes(firstQuestionAnswer.toString())){
            correctAnswersCount++;
        }

        if(answers.includes(secondQuestionAnswer)){
            correctAnswersCount++;
        }

        if(answers.includes(thirdQuestionAnswer)){
            correctAnswersCount++;
        }

        return correctAnswersCount;
    }

    buttons[2].addEventListener('click', thirdQuestion);

   function thirdQuestion() {
       let resultDiv = document.getElementById("result");



       let correctAnswersCount = GetResult();

       if(correctAnswersCount === 3){
           resultDiv.textContent = "You are recognized as top SoftUni fan!";
       }
       else{
           resultDiv.textContent = "You have " + correctAnswersCount + " right answers";
       }
   }



}