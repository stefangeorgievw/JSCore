function main(input){
    let countOfRotations = input[input.length - 1];
    input.pop();

    if (countOfRotations % input.length === 0) {
        console.log(input.join(' '));
        return;
    }

    for (let i = 0; i < countOfRotations; i++) {
        let element = input[input.length - 1];

        input.unshift(input.pop());
    }

    console.log(input.join(' '));
}

main(['1','2','3','4','2']);