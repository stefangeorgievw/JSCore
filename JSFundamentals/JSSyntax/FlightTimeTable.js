function Main(array) {

    let type = array[0];
    let destination = array[1];
    let time = array[2];
    let flight = array[3];
    let gate = array[4];

    console.log(`${type}: Destination - ${destination}, Flight - ${flight}, Time - ${time}, Gate - ${gate}`)
}

Main(['Departures', 'London',
'22:45', 'BR117', '42']);