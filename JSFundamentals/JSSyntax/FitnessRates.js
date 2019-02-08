function Main(day, service, time) {
    let price ;

    if (service === "Fitness"){

        if (time <= 15.00){
           if (day === "Monday" || day === "Tuesday" || day === "Wednesday" ||day ==="Thursday" ||day === "Friday" ){
               price = 5;
           }else {
               price = 8;
           }
        }else if(time <= 22.00){
            if (day === "Monday" || day === "Tuesday" || day === "Wednesday" ||day === "Thursday" ||day === "Friday" ){
                price = 7.5;
            }else {
                price = 8;
            }
        }

    }else if (service === "Sauna"){

        if (time <= 15.00){
            if (day === "Monday" || day === "Tuesday" || day === "Wednesday" ||day ==="Thursday" ||day === "Friday" ){
                price = 4;
            }else {
                price = 7;
            }
        }else if(time <= 22.00){
            if (day === "Monday" || day === "Tuesday" || day === "Wednesday" ||day === "Thursday" ||day === "Friday" ){
                price = 6.5;
            }else {
                price = 7;
            }
        }

    }else if(service === "Instructor"){
        if (time <= 15.00){
            if (day === "Monday" || day === "Tuesday" || day === "Wednesday" ||day ==="Thursday" ||day === "Friday" ){
                price = 10;
            }else {
                price = 15;
            }
        }else if(time <= 22.00){
            if (day === "Monday" || day === "Tuesday" || day === "Wednesday" ||day === "Thursday" ||day === "Friday" ){
                price = 12.5;
            }else {
                price = 15;
            }
        }
    }

    console.log(price);
}

