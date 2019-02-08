function solve() {
    let buttons = document.getElementsByTagName('button');
    let tiresDiv = document.querySelectorAll('fieldset div')[5];
    let trucksDiv = document.querySelectorAll('fieldset div')[6];
    let trucks = [];
    let spareTires = [];

    buttons[0].addEventListener('click',addNewTruck);
    buttons[1].addEventListener('click',addNewTires);
    buttons[2].addEventListener('click',goToWork);
    buttons[3].addEventListener('click',endOfShift);

    function addNewTruck() {
        let plateNumber = document.getElementById('newTruckPlateNumber').value;
        let tires = document.getElementById('newTruckTiresCondition').value;
        trucks.push({
            'plateNumber': plateNumber,
            'tires': tires,
            'distance': 0
        });

        let div = document.createElement('div');
        div.classList.add('truck');
        div.textContent = plateNumber;
        trucksDiv.appendChild(div);
    }

    function addNewTires() {
        let tyres = document.getElementById('newTiresCondition').value;
        spareTires.push(tyres);

        let div = document.createElement('div');
        div.classList.add('tireSet');
        div.textContent = tyres;
        tiresDiv.appendChild(div);
    }

    function goToWork() {
        let plateNumber = document.getElementById('workPlateNumber').value;
        let distance = +document.getElementById('distance').value;
        let truck = trucks.filter(x=> x.plateNumber === plateNumber)[0];
        if (truck === undefined){
            return;
        }

        let currentTiresArray = truck.tires.split(' ').map(x=> Number(x));

        if (Math.min(...currentTiresArray) * 1000 >= distance){
            truck.distance += distance;
            truck.tires = truck.tires.split(' ').map(x=> Number(x) - distance / 1000).join(' ');

        } else{
            truck.tires = spareTires.shift();
            let currentTiresArray = truck.tires.split(' ').map(x=> Number(x));

            if (Math.min(...currentTiresArray) * 1000 >= distance){
                truck.distance += distance;
                truck.tires = truck.tires.split(' ').map(x=> Number(x) - distance / 1000).join(' ');

                document.getElementsByClassName('tireSet')[0].textContent = '';

            }
        }
    }

    function endOfShift() {
        let textareaElement = document.getElementsByTagName('textarea')[0];

        trucks.forEach(x=> textareaElement.textContent += `Truck ${x.plateNumber} has traveled ${x.distance}.\n`);
        textareaElement.textContent += `You have ${spareTires.length} sets of tires left.\n`
    }
}