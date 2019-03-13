function dart(){
	let homePoints = Array.from($('#points #Home p'))[0];
	let awayPoints = Array.from($('#points #Away p'))[0];
	let homeName = Array.from($('#points #Home p'))[1];
	let awayName = Array.from($('#points #Away p'))[1];
	let turn = Array.from($('#turns p'))[0];
	let next = Array.from($('#turns p'))[1];
	let isGameFinished = false;
	let realHomePoints = 0;
	let realAwayPoints = 0;

	let $scores = $('td');
	let scoresTds = Array.from($scores).filter((x,i,a)=> i % 2 !== 0);
	let scorePoints = scoresTds.map(x=> x.textContent.split(' ')[0]);
	
	let layers = Array.from($('#playBoard div'));
	for (let i = 0; i < layers.length; i++) {
		layers[i].addEventListener('click',function(e){
			e.stopPropagation();
			let sumToAdd = scorePoints[i];
			if(!isGameFinished){
               if(turn.textContent === 'Turn on Home'){
				   realHomePoints += Number(sumToAdd);
				   homePoints.textContent = realHomePoints;
				   turn.textContent = 'Turn on Away';
				   next.textContent = 'Next is Home';
			   }else{
				   realAwayPoints += Number(sumToAdd);
				awayPoints.textContent = realAwayPoints;
				turn.textContent = 'Turn on Home';
				next.textContent = 'Next is Away';
			   }

			   if(realHomePoints >= 100){
				  homeName.style['background'] = 'green';
				  awayName.style['background'] = 'red';
				  isGameFinished = true;
			   }else if(realAwayPoints >= 100){
				homeName.style['background'] = 'red';
				awayName.style['background'] = 'green';
				isGameFinished = true;
			   }
			}
		});
		
	}
	
}