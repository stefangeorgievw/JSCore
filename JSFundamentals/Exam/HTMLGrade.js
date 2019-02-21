function solve(examPoints, homeworkCompleted, totalHomework){
    if (examPoints === 400){
        console.log(6.00.toFixed(2));
        return;``
    }
    let procentFromExam = (examPoints / 400) * 90;
    let maxPoints = 100;
    let homeworkBonus = (homeworkCompleted / totalHomework) * 10;

    let totalPoints = ((procentFromExam + homeworkBonus) / 100) * maxPoints;

    let grade = 3 + 2 * (totalPoints - maxPoints / 5) / (maxPoints / 2);
    if (grade < 3){
        console.log(2.00.toFixed(2));
    } else if (grade > 6){
        console.log(6.00.toFixed(2));
    } else{
        console.log(grade.toFixed(2));
    }


}

solve(400, 0, 5);
