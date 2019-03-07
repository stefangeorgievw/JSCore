function attachEventsListeners(){
     let $days = $('#days');
     let $hours = $('#hours');
     let $minutes = $('#minutes');
     let $seconds = $('#seconds');

    $('input[type="button"]').on('click', function(){
      let unit = $(this).attr('id').replace('Btn', '');
      switch(unit){
          case 'days':
          $hours.val(Number($days.val() * 24));
          $minutes.val(Number($days.val() * 1440));
          $seconds.val(Number($days.val() * 86400));
          break;
          case 'hours':
          $days.val(Number($hours.val() / 24));
          $minutes.val(Number($hours.val() * 60));
          $seconds.val(Number($hours.val() * 3600));
          break;
          case 'minutes':
          $days.val(Number($minutes.val() / 1440));
          $hours.val(Number($minutes.val() / 60));
          $seconds.val(Number($minutes.val() * 60));
          break;
          case 'seconds':
          $days.val(Number($seconds.val() / 86400));
          $hours.val(Number($seconds.val() / 3600));
          $minutes.val(Number($seconds.val() / 60));
          break;
          
      }
    });
}