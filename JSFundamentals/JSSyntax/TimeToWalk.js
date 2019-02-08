function solve(steps, footprint, speed){
    let distance = steps * footprint;
    let countOfTimeLost = Math.floor(distance / 500);
    let timeLost = countOfTimeLost * 60;
    let time = distance / 1000 / speed;
    
    time *= 3600;
    time += timeLost;
    
    let hh = Math.floor(time / 3600);
    let mm = Math.floor(time / 60);
    let sec = Math.ceil(time - mm * 60);
    if(hh < 10){
        hh = "0" + hh;
    }
    if(mm < 10){
        mm = "0" + mm;
    }
    if(sec < 10){
        sec = "0" + sec;
    }
    console.log(`${hh}:${mm}:${sec}`);
    
}

solve(2564, 0.70, 5.5);