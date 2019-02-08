function solve() {
  let people = [];

 let submitButton = document.getElementsByTagName('button')[0];
 submitButton.addEventListener('click', (e) => {
     e.preventDefault();
    let inputFields = document.getElementsByTagName('input');
     let username = inputFields[0].value;
    let password = inputFields[1].value;
    let email = inputFields[2].value;

    let checkboxes = Array.from(document.querySelectorAll("div.topics input"));
    let topics = [];
    for (let chechbox of checkboxes){
        if (chechbox.checked == true){
            topics.push(chechbox.value);
        }
    }

    let person = {'username':username, 'password': password, 'email': email, 'topics':topics};
    people.push(person);

    let tr = document.createElement('tr');
    let usernameTd = document.createElement('td');
    usernameTd.textContent = person.username;
    let emailTd = document.createElement('td');
    emailTd.textContent = person.email;
    let topicsTd = document.createElement('td');
    topicsTd.textContent = person.topics.join(' ');

     tr.appendChild(usernameTd);
     tr.appendChild(emailTd);
     tr.appendChild(topicsTd);

    let table = document.getElementsByTagName('tbody')[0];
    table.appendChild(tr);



 });

 let searchButton = document.getElementsByTagName('button')[1];
 searchButton.addEventListener('click', () => {
     let searchStr = document.getElementsByTagName('input')[7].value;

     let trs= Array.from(document.querySelectorAll('tbody tr'));

     for (let tr of trs){
         tr.style.visibility = 'hidden';
     }
     for (let tr of trs){
         if (tr.textContent.includes(searchStr)){
             tr.style.visibility = 'visible';
         }
     }
 })
}