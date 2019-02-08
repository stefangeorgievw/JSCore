function solve() {
    let buttons = Array.from(document.getElementsByTagName('td')).forEach(x => x.addEventListener('click', buyTicket));
    let textarea = document.getElementsByTagName('textarea')[0];
    let summaryButton = document.getElementsByTagName('button')[45].addEventListener('click', summary);


    let storage = {
        'Levski': {
            'A': 10,
            'B': 7,
            'C': 5
        },
        'Litex': {
            'A': 10,
            'B': 7,
            'C': 5
        },
        'VIP': {
            'A': 25,
            'B': 15,
            'C': 10
        },
        'summary': {
            'money': 0,
            'fans': 0
        }
    };

    function buyTicket(e) {
        let button = e.target;
        let sectionElement = button.parentNode.parentNode.parentNode.parentNode.parentNode;
        let section = sectionElement.classList[0];
        let zone;
        let cellIndex = button.parentNode.cellIndex;
        let seatNumber = button.textContent;
        if (cellIndex === 0) {
            zone = 'A';
        } else if (cellIndex === 1) {
            zone = 'B';
        } else {
            zone = 'C';
        }

        if (button.style.backgroundColor === '') {
            button.style.backgroundColor = 'rgb(255,0,0)';
            let price = storage[section][zone];
            storage.summary.money += price;
            storage.summary.fans += 1;
            textarea.textContent += ` Seat ${seatNumber} in zone ${section} sector ${zone} was taken.\n`


        } else {
            textarea.textContent += ` Seat ${seatNumber} in zone ${section} sector ${zone} is unavailable.\n`
        }
    }

    function summary() {
        let span = document.querySelector('#summary span');
        span.textContent = `${storage.summary.money} leva, ${storage.summary.fans} fans.`;

    }
}

