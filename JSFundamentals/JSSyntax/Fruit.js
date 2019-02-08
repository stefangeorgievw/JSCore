function Main(typeOfFruit, weight, pricePerKg) {
    let weightInKg = weight / 1000;
    let price = weightInKg * pricePerKg;

    console.log("I need " + Number(price).toFixed(2) + " leva to buy " + Number(weightInKg).toFixed(2)
        + " kilograms " + typeOfFruit + ".");
}

