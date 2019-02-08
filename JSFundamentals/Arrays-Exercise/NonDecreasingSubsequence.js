function main(input){

    let currentBiggestNumber = +input[0];
    console.log(currentBiggestNumber);

    for (let i = 1; i < input.length; i++) {
        if (+input[i] >= currentBiggestNumber){
            currentBiggestNumber = +input[i];
            console.log(currentBiggestNumber);
        }
    }
}

main(['1', '3', '8', '4', '10', '12', '3','2','24']);