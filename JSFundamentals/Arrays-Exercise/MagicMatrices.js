function main(matrix) {
    let rowSum = 0;
    let colSum = 0;
    let isMagic = true;
    for (let row = 0; row < matrix.length; row++) {
        let currentRowSum = matrix[row].reduce((a,b) => a + b);

        if (row === 0){
            rowSum = currentRowSum;
        }else if(currentRowSum !== rowSum){
            isMagic = false;

            break;
        }

        let currentColSum = 0;
        for (let col = 0; col < matrix[row].length; col++) {

            if (row === 0){
                currentColSum += matrix[row][col];
                colSum += matrix[row][col];
            } else {
                currentColSum +=matrix[row][col];
            }
        }

        if (colSum !== currentColSum){
            isMagic = false;
            break;
        }

    }

    console.log(isMagic);
    
}

