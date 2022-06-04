const randomColor = Math.floor(Math.random()*16777215).toString(16);const container = document.querySelector('.container');

const layout = document.querySelector('.layout');
layout.addEventListener('click', promptNumber);

const grid = document.querySelector('.grid');
grid.addEventListener('click', toggleGrid);

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    const squares = Array.from(document.querySelectorAll('.row div'));
    squares.forEach(square => {
        square.style.backgroundColor = '';
    });
});

const black = document.querySelector('.black');
const rainbow = document.querySelector('.rainbow');
const shadow = document.querySelector('.shadow');
const eraser = document.querySelector('.eraser');
black.style.backgroundColor = 'black';
black.style.color = 'white';

black.addEventListener('click', () => {
    black.style.backgroundColor = 'black';
    black.style.color = 'white';

    rainbow.style.animation = '';
    rainbow.style.color = '';
    shadow.style.backgroundColor = '';
    shadow.style.color = '';
    eraser.style.backgroundColor = '';
    eraser.style.color = '';
})

rainbow.addEventListener('click', () => {
    rainbow.style.animation = 'colorRotate 5s linear infinite';
    rainbow.style.color = 'white';
    
    black.style.backgroundColor = '';
    black.style.color = '';
    shadow.style.backgroundColor = '';
    shadow.style.color = '';
    eraser.style.backgroundColor = '';
    eraser.style.color = '';
})

shadow.addEventListener('click', () => {
    shadow.style.backgroundColor = 'grey';
    shadow.style.color = 'white';
    
    rainbow.style.animation = '';
    rainbow.style.color = '';
    black.style.backgroundColor = '';
    black.style.color = '';
    eraser.style.backgroundColor = '';
    eraser.style.color = '';
})

eraser.addEventListener('click', () => {
    eraser.style.backgroundColor = 'red';
    eraser.style.color = 'white';
    
    rainbow.style.animation = '';
    rainbow.style.color = '';
    black.style.backgroundColor = '';
    black.style.color = '';
    shadow.style.backgroundColor = '';
    shadow.style.color = '';
})

function toggleGrid() {
    const squares = Array.from(document.querySelectorAll('.row div'));

    if (grid.style.backgroundColor === 'black') {
        this.style.backgroundColor = '';
        this.style.color = '';
        squares.forEach(square => {
                square.classList.remove('toggledGrid');
        });
    }      
    else {
        this.style.backgroundColor = 'black';
        this.style.color = 'white';
        squares.forEach(square => {
            square.classList.add('toggledGrid');
        });
    }
};

let number = 16;

createGrid();

function promptNumber() {
    number = prompt('Choose the number of squares per side for the new grid.', '')

    if (number > 100)
        promptNumber();
    else if (number === '')
        promptNumber();
    else if (number === null) {
        number = 16;
        createGrid();
    }
    else {
        createGrid();
    }
};

function createGrid() {
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

    const squares = Array.from(document.querySelectorAll('.row div'));
    squares.forEach(square => {
        square.addEventListener('mousemove', e => {
            if (e.buttons === 1) {
                const randomColor = Math.floor(Math.random()*16777215).toString(16);
                if (black.style.color === 'white')
                    square.style.backgroundColor = 'black';
                if (rainbow.style.color === 'white')
                    square.style.backgroundColor = "#" + randomColor;
                if (eraser.style.color === 'white')
                    square.style.backgroundColor = ''
                if (shadow.style.color === 'white')
                    square.style.backgroundColor = 'rgb(0,0,0,' + 40 + '%)';
            }
        });
    });
    squares.forEach(square => {
        square.addEventListener('click', () => {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            if (black.style.color === 'white')
                square.style.backgroundColor = 'black';
            if (rainbow.style.color === 'white')
                square.style.backgroundColor = "#" + randomColor;
            if (eraser.style.color === 'white')
                square.style.backgroundColor = ''
            if (shadow.style.color === 'white')
                square.style.backgroundColor = 'rgb(0,0,0,' + 40 + '%)'
        });
    });

    if (grid.style.backgroundColor === 'black') {
        squares.forEach(square => {
                square.classList.add('toggledGrid');
        });
    };
}