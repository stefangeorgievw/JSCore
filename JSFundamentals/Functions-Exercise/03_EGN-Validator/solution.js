function validate() {
    let buttons = document.getElementsByTagName('button');
    let button = buttons[0];
    button.addEventListener('click', Generate);


    function Generate() {
        let year = document.getElementById('year').value;

        let yearDigits = year.toString().slice(2,4);


        let month = document.getElementById('month').value;

        let monthDigit = getMonthDigit(month);

        let date = document.getElementById('date').value;
        let dateDigits = getDateDigit(date);

        let regionCode = document.getElementById('region').value;

        let isYearInvalid = year < 1900 || year > 2100 || year.trim() === '';
        let isRegioCodeInvalid = regionCode < 43 || regionCode > 999 || regionCode.trim() === '';

        if (isYearInvalid || isRegioCodeInvalid) {
            return;
        }

        let regionDigits = regionCode.slice(0,2);

        let genderDigits = genderDigit();

        let EGN = yearDigits + monthDigit + dateDigits + regionDigits + genderDigits;
        let remainder = calcutaleRemainder(EGN) > 9 ? 0 : calcutaleRemainder(EGN);
        EGN += remainder;

        let output = document.getElementById('egn');
        output.textContent = `Your EGN is: ${EGN}`;

    }

    function getMonthDigit(month){
        let months = ['fake', 'January', 'February', 'March', 'April', "May", 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];

        let monthDigit = months.indexOf(month);
        if (monthDigit < 10){
            monthDigit = `0${monthDigit}`;
        }

        return monthDigit;

    }

    function getDateDigit(date){
        let dateDigits = 0;
        if (date < 10){
            dateDigits = `0${date}`;
        }else{
            dateDigits = date;
        }

        return dateDigits;
    }

    function genderDigit() {
        let male = document.getElementById('male');

        let genderDigit;
        if (male.checked === false){
            genderDigit = 1;
        } else{
            genderDigit = 2;
        }

        return genderDigit;

    }

    function calcutaleRemainder(number) {
        let weightPosition = [2, 4, 8, 5, 10, 9, 7, 3, 6];
        let sum = 0;

        for (let i = 0; i < weightPosition.length; i++) {
            if (Number(number[i]) !== 0) {
                sum += (Number(number[i]) * Number(weightPosition[i]));
            }
        }
        return sum % 11;
    }
}