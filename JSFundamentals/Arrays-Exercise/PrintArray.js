function main(input){
    let delimeter = input[input.length - 1];
    input.pop();

    console.log(input.join(delimeter));
}

