function addItem(){
    let $newItemText = $('#newItemText');
    let $newItemValue = $('#newItemValue');

    let optionElement = document.createElement('option');
    optionElement.setAttribute('value', $newItemValue.val());
    optionElement.textContent = $newItemText.val();

    let $selectElement = $('#menu');
    $selectElement.append(optionElement);

    $newItemText.val('');
    $newItemValue.val('');

}