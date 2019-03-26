function attachEvents(){
    let $phonebookUl = $('#phonebook');
    let $loadBtn = $('#btnLoad');
    let $createBtn = $('#btnCreate');
    let $personEl = $('#person');
    let $phoneEl = $('#phone');
    const baseUrl = 'https://phonebook-cd550.firebaseio.com/Phonebook.json';

    $createBtn.on('click', create);
    $loadBtn.on('click', load);

    function load(){
        $.ajax({
           url: baseUrl,
           success: loadPhonebook
        });
    }

    function loadPhonebook(data){
      for(let contact in data){
          let $li = $(`<li id="${contact}">${data[contact].person}: ${data[contact].phone} </li>`);
          let $btn = $(`<button id="${contact}">Delete</button>`).on('click',deleteContact);

          $li.append($btn)
          $phonebookUl.append($li);
          
      }
    }

    function deleteContact(e){
        let contactId = e.target.id;
        let $li = $(`#${contactId}`);
        $li.remove();

        $.ajax({
            url: 'https://phonebook-cd550.firebaseio.com/Phonebook/' + contactId +'.json',
            method: 'DELETE',
            success: result,
            error: notResult
        })
    }

    function result(data){
        console.log(data);
    }
    function notResult(data){
        console.log(data);
    }

    function create(){
       let obj = {
           "person": $personEl.val(),
           "phone": $phoneEl.val()
       };

       $.ajax({
         url : baseUrl,
         method: "POST",
         data: JSON.stringify(obj),
         success: load
       });

     $personEl.val('');
     $phoneEl.val('');
    }
}