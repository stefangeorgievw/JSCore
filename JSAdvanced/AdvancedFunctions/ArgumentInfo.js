function argumentsInfo() {
    let metaData = new Map();

    for (const arg of arguments) {
        let currentType = typeof arg;
        console.log(`${currentType}: ${arg}`);

        let test = metaData.get(currentType)
        if (metaData.get(currentType)) {
            metaData.set(currentType, metaData.get(currentType) + 1);
        } else {
            metaData.set(currentType, 1);
        }
    }

    [...metaData]
        .sort((a, b) => b[1] - a[1])
        .forEach(md => {
            console.log(`${md[0]} = ${md[1]}`);
        });
}


solve({ name: 'bob'}, 3.333, 9.999);