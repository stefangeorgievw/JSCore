function makeReservation(){
    let $fullNameEl = $('#fullName');
    let $emailEl = $('#email');
    let $phoneNumberEl = $('#phoneNumber');
    let $addressEl = $('#address');
    let $postalCodeEl = $('#postalCode');
    let $infoPreviewUl = $('#infoPreview');
    let $editBtnEl = $('#edit');
    let $continueBtnEl = $('#continue');
    let $divContainerE = $('#container');
    
    let $submitBtnEl = $('#submit').on('click', function(){
        
        let $nameLi = $(`<li>Name: ${$fullNameEl.val()}</li>`);
        let $emailLi = $(`<li>E-mail: ${$emailEl.val()}</li>`);
        let $phoneLi = $(`<li>Phone: ${$phoneNumberEl.val()}</li>`);
        let $addressLi = $(`<li>Address: ${$addressEl.val()}</li>`);
        let $postalCodeLi = $(`<li>Postal Code: ${$postalCodeEl.val()}</li>`);
    
        $infoPreviewUl.append($nameLi).append($emailLi).append($phoneLi).append($addressLi).append($postalCodeLi);
        $submitBtnEl.prop('disabled',true);
        $editBtnEl.prop('disabled',false);
        $continueBtnEl.prop('disabled',false);
    
        resetInput();
    });

    $editBtnEl.on('click', function(){
        let arr= Array.from($('#infoPreview li'));
        console.log(arr);
       $fullNameEl.val(arr[0].textContent.split(': ')[1]);
       $emailEl.val(arr[1].textContent.split(': ')[1]);
       $phoneNumberEl.val(arr[2].textContent.split(': ')[1]);
       $addressEl.val(arr[3].textContent.split(': ')[1]);
       $postalCodeEl.val(arr[4].textContent.split(': ')[1]);

       $('#infoPreview').html('');

       $submitBtnEl.prop('disabled',false);
        $editBtnEl.prop('disabled',true);
        $continueBtnEl.prop('disabled',true);
    });

    $continueBtnEl.on('click', function(){
        $submitBtnEl.prop('disabled',true);
        $editBtnEl.prop('disabled',true);
        $continueBtnEl.prop('disabled',true);

        $h2 = $('<h2>Payment details</h2>');
        $select = $('<select id= "paymentOptions" class= "custom-select"></select>');
        $defaultOption = $('<option selected disabled hidden>Choose</option>');
        $creditCardOption = $('<option value= "creditCard">Credit Card</option>');
        $bankOption = $('<option value= "bankTransfer">Bank Transfer</option>');
        let $extraDetailsEl = $('<div id= "extraDetails"></div>');
        $select.append($defaultOption).append($creditCardOption).append($bankOption);
        $divContainerE.append($h2).append($select).append($extraDetailsEl);

        $select.on('change', function(e){
            if($('#extraDetails').html()){
                $('#extraDetails').html('');
            }

            if(e.target.value === 'creditCard'){
                
                let $divCardEl = $('<div class="inputLabel">Card Number</div><br>');
                $divCardEl.append($('<input>'));
                let $divExDateEl = $('<div class="inputLabel">Expiration Date</div><br>');
                $divExDateEl.append($('<input>'));
                let $divSecNumberEl = $('<div class="inputLabel">Security Number</div><br>');
                $divSecNumberEl.append($('<input>'));
                let $br = $('<br>');
    
                let $checkOutBtn = $('<button id="checkOut">Check Out</button>');
    
                $('#extraDetails').append($divCardEl).append($divExDateEl)
                .append($divSecNumberEl).append($checkOutBtn);

                

                $checkOutBtn.on('click', checkOut);
    
            }else{
                let $p = $('<p>You have 48 hours to transfer the amount to:</p>');
                $p.append($('<br>'));
                $p.append('IBAN: GR96 0810 0010 0000 4567 890');
                let $checkOutBtn = $('<button id="checkOut">Check Out</button>');
                $('#extraDetails').append($p).append($checkOutBtn);
                
                $checkOutBtn.on('click', checkOut);

            }
           

            
        });

    });
    
    
    function resetInput(){
      $fullNameEl.val('');
      $emailEl.val('');
      $phoneNumberEl.val('');
      $addressEl.val('');
      $postalCodeEl.val('');
    }

    function checkOut(){
        let $wrapper = $('#wrapper');
        $wrapper.html('');
        $wrapper.append($('<h4>Thank you for your reservation!</h4>'));
    }
}

