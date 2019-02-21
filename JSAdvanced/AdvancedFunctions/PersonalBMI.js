function solve(name, age, weight, height){
    let bmi = Math.round(weight / (height / 100) / (height / 100));

    let person = {
        'name' : name,
        'personalInfo' : {
            'age' : age,
            'weight' : weight,
            'height' : height
        },
        'BMI' : bmi,
        'status' : '' 
    }

    if(bmi < 18.5){
        person.status = 'underweight';
    }else if(bmi >= 18.5 && bmi < 25){
        person.status = 'normal';
    }else if(bmi < 30){
        person.status = 'overweight';
    }else if(bmi >= 30){
        person.status = 'obese';
        person.recommendation = 'admission required'
    }

    return person;
}
