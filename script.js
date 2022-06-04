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

