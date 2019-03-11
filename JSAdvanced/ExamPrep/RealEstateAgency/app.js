function realEstateAgency () {
	let $message = $('#message');
	let $rentPrice = $('input[name= "apartmentRent"]');
	let $apartmentType = $('input[name= "apartmentType"]');
	let $commissionRate = $('input[name= "agencyCommission"]');
	let $familyBudget = $('input[name= "familyBudget"]');
	let $familyApartmentType = $('input[name= "familyApartmentType"]');
	let $familyName = $('input[name= "familyName"]');
	let $agencyProfit = $('h1');
	let agencyProfitSum = 0;

	let $regOfferBtn = $('button[name="regOffer"]').on('click', function(){
		//validation
		if($rentPrice.val() <= 0 || isNaN($rentPrice.val())){
		  $message.text(`Your offer registration went wrong, try again.`);
		  return;
		} 

		if($commissionRate.val() < 0 || $commissionRate.val() > 100){
			$message.text(`Your offer registration went wrong, try again.`);
			return;
		}

		if(!$apartmentType.val() || $apartmentType.val().indexOf(':') > -1){;
			$message.text(`Your offer registration went wrong, try again.`);
			return;
		}

		let $buildingDiv = $('#building');
		let $apartmentDiv = $('<div class="apartment"></div');
		let $rentP = $(`<p>Rent: ${$rentPrice.val()}</p>`);
		let $typeP = $(`<p>Type: ${$apartmentType.val()}</p>`);
		let $commissionP = $(`<p>Commission: ${$commissionRate.val()}</p>`);

		$apartmentDiv.append($rentP);
		$apartmentDiv.append($typeP);
		$apartmentDiv.append($commissionP);
		$buildingDiv.append($apartmentDiv);

		$message.text('Your offer was created successfully.');

        resetRegOffer();
	});

	let $findOfferBtn = $('button[name="findOffer"]').on('click', function(){
        if($familyBudget.val() <= 0 || isNaN($familyBudget.val()) || !$familyApartmentType.val() || !$familyName.val()){
			$message.val('We were unable to find you a home, so sorry :(');
			return;
		}

		let apartments = Array.from($('.apartment'));
		
		let validApartment = apartments.find(a=> {
			let apartmentInfo = Array.from(a.children);
			
			let apartmentRent = apartmentInfo[0].textContent.split(' ')[1];
			let apartmentType = apartmentInfo[1].textContent.split(':')[1];
			let commissionPercent = apartmentInfo[2].textContent.split(' ')[1];

			let neededFamilySum = Number(apartmentRent)  + (apartmentRent * (commissionPercent / 100));
			
			if(neededFamilySum <= $familyBudget.val() && apartmentType === ' ' + $familyApartmentType.val()){
				return true;
			}else{
				return false;
			}
		});


		if(validApartment === undefined){
			$message.text('We were unable to find you a home, so sorry :(');
			resetFindOffer();
			return;
		}

		let apartmentRent = validApartment.children[0].textContent.split(' ')[1];
		let commissionPercent = validApartment.children[2].textContent.split(' ')[1];

		validApartment.innerHTML = '';
		validApartment.style['border'] = '2px solid red';
		let $familyP = $(`<p>${$familyName.val()}</p>`);
		let $secondP = $('<p>live here now</p>');
		let $moveOutBtn = $('<button>MoveOut</button>');

		$(validApartment).append($familyP);
		$(validApartment).append($secondP);
		$(validApartment).append($moveOutBtn);

		$message.text('Enjoy your new home! :))');
		agencyProfitSum += apartmentRent * (commissionPercent / 100);
		
		$agencyProfit.text(`Agency profit: ${agencyProfitSum} lv.`)

		$moveOutBtn.on('click', function(){
			let familyName = validApartment.firstChild.textContent;
			
			validApartment.parentElement.removeChild(validApartment);
			
			$message.text(`They had found cockroaches in ${familyName}\'s apartment`);
		});


		resetFindOffer();


	});


	function resetRegOffer(){
		 $rentPrice.val('');
		 $apartmentType.val('');
		 $commissionRate.val('');

	}

	function resetFindOffer(){
		$familyBudget.val('');
		$familyName.val('');
		$familyApartmentType.val('');

   }
	

}