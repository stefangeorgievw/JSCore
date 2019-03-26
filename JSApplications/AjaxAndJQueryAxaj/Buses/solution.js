function getInfo() { 
    const baseUrl = 'https://judgetests.firebaseio.com/businfo/';
    let busStopNumber = $('#stopId').val();
    $.ajax({
        url:baseUrl + busStopNumber + '.json',
        method: 'GET',
        success: generateResult,
        error: handleError
    });

    function generateResult(data){
        let $stopName = $('#stopName');
        $stopName.text(data.name);
        let $busses = $('#buses');
        for(let bus in data.buses){
            $busses.append(`<li>Bus ${bus} arrives in ${data.buses[bus]} minutes</li>`);
           
        }
    }
    function handleError(error){
        let $stopName = $('#stopName');
        $stopName.text('Error');
    }
  } 