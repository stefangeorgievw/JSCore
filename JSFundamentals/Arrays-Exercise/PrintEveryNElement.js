function main(arr) {
    let step = +arr.pop();

    for (let index = 0; index < arr.length; index += step) {
        console.log(arr[index]);
    }
}