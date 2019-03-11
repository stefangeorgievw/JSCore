function acceptance() {
	let $shippingCompany = $('input[name="shippingCompany"]');
	let $productName = $('input[name="productName"]');
	let $productQuantity = $('input[name="productQuantity"]');
	let $productScrape = $('input[name="productScrape"]');
	let $wareHouse = $('#warehouse');

    if($shippingCompany.val() && $productName.val() && !isNaN($productQuantity.val()) && !isNaN($productScrape.val())){
	   let nonScrapedQuantity = $productQuantity.val() - $productScrape.val();
	   if(nonScrapedQuantity <= 0){
		   return;
	   }
	   let $productDiv = $('<div>');
	   let $productP = $(`<p>[${$shippingCompany.val()}] ${$productName.val()} - ${nonScrapedQuantity} pieces</p>`);
	   let $productBtn = $('<button type="button">Out of stock</button>');
	   $productBtn.on('click', function(){
          $productDiv.remove();
	   });

	   $productDiv.append($productP);
	   $productDiv.append($productBtn);
	   $wareHouse.append($productDiv);
       reset();
	}else{
		return;
	}

	function reset(){
		$shippingCompany.val('');
		$productName.val('');
		$productQuantity.val('');
		$productScrape.val('');
	}

}