function timer() {
   let time = 0;
   let isRunning = false;
   let interval;
   let startBtn = $('#start-timer');
   let stopBtn = $('#stop-timer');

   startBtn.on('click',function(){
     if(!isRunning){
        interval = setInterval(incrementTime,1000);
        isRunning = true;
     };
   });

   stopBtn.on('click', function (){
      clearInterval(interval);
      isRunning = false;
   });

   function incrementTime(){
      time++;
      $('#hours').text(("0" + Math.trunc(time/3600)).slice(-2));
        $('#minutes').text(("0" + Math.trunc((time/60)%60)).slice(-2));
$('#seconds').text(("0" + Math.trunc(time%60)).slice(-2));
   }
}