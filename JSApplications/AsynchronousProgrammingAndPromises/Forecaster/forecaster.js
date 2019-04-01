function attachEvents(){
    const baseUrl = 'https://judgetests.firebaseio.com/';
    let weatherSymbols = {
        'Sunny': '&#x2600;',
        'Partly sunny': '&#x26C5;',
        'Overcast': '&#x2601;',
        'Rain': '&#x2614;',
        'Degrees': '&#176;'
    };

    $submitBtn = $('#submit').on('click', getWeather);

    async function getWeather(){
        try{
            let weather = await $.ajax({
                url: baseUrl + 'locations.json',
                method: 'GET',
            });

            let location = $('#location').val();
            let code = weather.filter(x=> x.name === location)[0].code;
            
            let weatherToday = await $.ajax({
              url: baseUrl + '/forecast/today/' + code + '.json'
              });

            let upcomingWeather = await $.ajax({
                url: baseUrl + '/forecast/upcoming/' + code + '.json'
              });
            
              //Forecast Today
              let $divForecast = $('#forecast');
              $divForecast.css('display', 'block');
              let $divCurrentCondition = $('#current');
              let $spanSymbolCurrent = $(`<span class="condition symbol">${weatherSymbols[weatherToday.forecast.condition]}</span>`);
              let $span = $('<span class="condition"></span>');
              let $spanCity = $(`<span class="forecast-data">${weatherToday.name}</span>`);
              let $spanDegrees = $(`<span class="forecast-data">${weatherToday.forecast.low}${weatherSymbols.Degrees}/${weatherToday.forecast.high}${weatherSymbols.Degrees}</span>`);
              let $spanCondition = $(`<span class="forecast-data">${weatherToday.forecast.condition}</span>`);

              $span.append($spanCity).append($spanDegrees).append($spanCondition);
              $divCurrentCondition.append($spanSymbolCurrent).append($span);

              //Upcoming Forecast
              upcomingWeather.forecast.forEach(f => {
                  let $spanUpcoming = $('<span class="upcoming"></span>');
                  let $spanSymbol = $(`<span class="symbol">${weatherSymbols[f.condition]}</span>`);
                  let $spanDegrees = $(`<span class="forecast-data">${f.low}${weatherSymbols.Degrees}/${f.high}${weatherSymbols.Degrees}</span>`);
                  let $spanCondition = $(`<span class="forecast-data">${f.condition}</span>`);

                  $spanUpcoming.append($spanSymbol).append($spanDegrees).append($spanCondition);
                  $('#upcoming').append($spanUpcoming);
              });   
        }catch(err){
            $divForecast.css('display', 'block');
            $divForecast.text('Error');
        }
    }
}