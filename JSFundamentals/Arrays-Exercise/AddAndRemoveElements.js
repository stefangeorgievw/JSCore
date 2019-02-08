function main(commands){
    let outputArray = [];
    let currentNumber = 1;
    for (let i = 0; i < commands.length; i++) {
        if (commands[i] === 'add'){
            outputArray.push(currentNumber);
            currentNumber++;
        }else{
            outputArray.pop();
            currentNumber++;
        }

    }

    if (outputArray.length === 0){
        console.log('Empty');
    } else {
        for (let num of outputArray) {
            console.log(num);
        }
    }
}

main(['add','add','remove','add','add']);