function attachEvents(){
    const baseUrl= 'https://baas.kinvey.com/';
    const appKey = 'kid_r1cjdr9_4';
    const username = 'stefan';
    const password = '123456';
    const endPoint = 'biggestCatches';
    const headers = {
        'Authorization' : `Basic ${btoa(username + ':' + password)}`,
        'Content-Type' : 'application/json'
    };

    $('.load').on('click', loadCatches);
    $('.add').on('click', addCatch);

    async function loadCatches(){
        $('#catches').empty();
        try{
            let catches = await $.ajax({
                url: baseUrl + 'appdata/' + appKey + '/biggestCatches',
                method: 'GET',
                headers: headers
            });

            catches.forEach(c => {
                let $divcatch = $(`
                <div class="catch" data-id="${c._id}"> 
            <label>Angler</label> 
            <input type="text" class="angler" value="${c.angler}"/> 
            <label>Weight</label> 
            <input type="number" class="weight" value="${c.weight}"/> 
            <label>Species</label> 
            <input type="text" class="species" value="${c.species}"/> 
            <label>Location</label> 
            <input type="text" class="location" value="${c.location}"/> 
            <label>Bait</label> 
            <input type="text" class="bait" value="${c.bait}"/> 
            <label>Capture Time</label> 
            <input type="number" class="captureTime" value="${c.captureTime}"/>  
        </div> 
                `);
            let $updateBtn = $('<button class="update">Update</button>');
            $updateBtn.on('click', updateCatch);
            let $deleteBtn = $('<button class="delete">Delete</button>');
            $deleteBtn.on('click', deleteCatch);

            $divcatch.append($updateBtn).append($deleteBtn);
             $('#catches').append($divcatch);
            });
        }catch(err){
            console.log(err);
        }
         
    }

    async function updateCatch(e){
        let catchParent = e.target.parentElement;

        let catchId = $(e.target).parent().attr("data-id");

        let angler = catchParent.querySelector(".angler").value;
        let weight = catchParent.querySelector(".weight").value;
        let species = catchParent.querySelector(".species").value;
        let location = catchParent.querySelector(".location").value;
        let bait = catchParent.querySelector(".bait").value;
        let captureTime = catchParent.querySelector(".captureTime").value; 

        let obj= {
            angler,
            weight,
            species,
            location,
            bait,
            captureTime
        };

       await $.ajax({
            url: baseUrl + 'appdata/' + appKey + '/biggestCatches/' + catchId,
            method: 'PUT',
            headers: headers,
            data: JSON.stringify(obj)
        });

        loadCatches();
    }

    async function deleteCatch(e){
        let catchParent = e.target.parentElement;
        let catchId = $(e.target).parent().attr("data-id");

       await $.ajax({
            url: baseUrl + 'appdata/' + appKey + '/biggestCatches/' + catchId,
            method: 'DELETE',
            headers: headers,
        });

        loadCatches();
    }

    async function addCatch(){
        let angler = $('#addForm .angler').val();
        let weight = +$('#addForm .weight').val();
        let species = $('#addForm .species').val();
        let location = $('#addForm .location').val();
        let bait = $('#addForm .bait').val();
        let captureTime = +$('#addForm .captureTime').val();

        let obj= {
            angler,
            weight,
            species,
            location,
            bait,
            captureTime
        };

       await $.ajax({
            url: baseUrl + 'appdata/' + appKey + '/biggestCatches',
            method: 'POST',
            headers: headers,
            data: JSON.stringify(obj)
        });

        loadCatches();
    }
}