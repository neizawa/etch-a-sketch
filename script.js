const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    const row = document.createElement('div');
    row.classList.add('row')
    container.appendChild(row);
}
const rows = Array.from(document.querySelectorAll('.row'));
rows.forEach(row => {
    for (let i = 0; i < 16; i++) {
        const square = document.createElement('div');
        row.appendChild(square);
    }
});

const button = document.querySelector('button');
button.addEventListener('click', createGrid);

let number = 0;

function promptNumber() {
    number = prompt('Choose the number of squares per side for the new grid.', '')

    if (number > 100)
        promptNumber();
    else if (number === '')
        promptNumber();
    else if (number === null)
        return 16;
    else 
        return number;
};

function createGrid() {
    number = promptNumber();
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    };

    for (let i = 0; i < number; i++) {
        const row = document.createElement('div');
        row.classList.add('row')
        container.appendChild(row);
    }
    const rows = Array.from(document.querySelectorAll('.row'));
    rows.forEach(row => {
        for (let i = 0; i < number; i++) {
            const square = document.createElement('div');
            row.appendChild(square);
        }
    });
};