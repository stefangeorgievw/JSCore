function solution() {
		let $toyType = $('#toyType');
		let $toyPrice = $('#toyPrice');
		let $toyDescription = $('#toyDescription');

		if($toyType.val() && !isNaN($toyPrice.val()) && $toyDescription.val()){
			let $giftSection = $('#christmasGiftShop');
		let $giftDiv = $('<div class="gift"></div>');
		let $giftImg = $('<img src="gift.png">');
		let $giftHeader = $(`<h2></h2>`).text($toyType.val());
		let $giftP = $(`<p></p>`).text($toyDescription.val());
		let $giftBtn = $(`<button></button>`).text(`Buy it for $${$toyPrice.val()}`);
		
		$giftBtn.on('click', function(){
			$giftDiv.remove();
		});
		$giftDiv.append($giftImg);
		$giftDiv.append($giftHeader);
		$giftDiv.append($giftP);
		$giftDiv.append($giftBtn);
		$giftSection.append($giftDiv);

		$toyType.val('');
		$toyPrice.val('');
		$toyDescription.val('');
    }		
}