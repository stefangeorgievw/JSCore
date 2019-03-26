function attachEvents(){
    let $sendBtn = $('#submit');
    let $refreshBtn = $('#refresh');
    let baseUrl = 'https://messenger-b1af6.firebaseio.com/messages.json';

    $refreshBtn.on('click', getMesseges);

    $sendBtn.on('click', function (){
       let $author = $('#author');
       let $content = $('#content');

       let obj = {
           "author": $author.val(),
           "content": $content.val(),
           "timestamp": Date.now()
       };

       $.ajax({
           url:baseUrl,
           method: 'POST',
           data: JSON.stringify(obj),
           
       })

       $author.val('');
       $content.val('');

    });

    function getMesseges(){
        $.ajax({
            url:baseUrl,
            success: printMessages
        })
    }

    function printMessages(data){
        let messages = document.getElementById('messages');
        for(let message in data){
            messages.textContent += `${data[message].author}: ${data[message].content}\n`;
        }
    }
}