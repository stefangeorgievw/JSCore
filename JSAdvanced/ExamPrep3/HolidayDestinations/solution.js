function addDestination(){
    let cityEl = Array.from($('.inputData'))[0];
    let countryEl = Array.from($('.inputData'))[1];
    if(!cityEl.value || !countryEl.value){
        return;
    }   
    
    let $seasonEl = $('#seasons');
    let $tBody = $('#destinationsList');
    let $tr = $('<tr>');
    let $destinationTd = $(`<td>${cityEl.value}, ${countryEl.value}</td>`);
    let $seasonTd = $(`<td>${$seasonEl.val().charAt(0).toUpperCase() + $seasonEl.val().slice(1)}</td>`);
    $tr.append($destinationTd);
    $tr.append($seasonTd);
    $tBody.append($tr);

    let seasonSum = $(`#${$seasonEl.val()}`);
    seasonSum.val(Number(seasonSum.val()) + 1);

    cityEl.value = '';
    countryEl.value = '';
    
}