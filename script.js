// Create Initial Grid

const container = document.querySelector('.container');
createNewGrid(16);

// Event Listener for button

const gridButton = document.querySelector('button');
gridButton.addEventListener('click', (event) => {
    gridSize = prompt('How many squares per side?', 16);
    createNewGrid(gridSize);
});

// Function to create new grid

function createNewGrid(gridSize) {
    // Check for grid range
    if (gridSize > 100) {
        alert('WARNING: Grid size is too big. Bringing down to maximum size of 100 squares per side.');
        gridSize = 100;
    } else if (gridSize <= 0) {
        alert('WARNING: Grid size cannot be less than or equal to 0. Setting grid to 16 square per side.')
        gridSize = 16;
    }

    // Create new grid
    container.innerHTML = '';
    for (i = 0; i < gridSize; i++) {
        const rowContainer = document.createElement('div');
        rowContainer.setAttribute('class', 'row-container');
        container.appendChild(rowContainer);
        for (j = 0; j < gridSize; j++) {
            const grid = document.createElement('div');
            grid.setAttribute('class', 'grid');
            rowContainer.appendChild(grid);
        }
    }

    // Event Listener for hover
    const grids = document.querySelectorAll('.grid');
    grids.forEach((element) => {
        element.addEventListener('mouseover', (event) => {
            element.style.backgroundColor = getRandomRGB();
        });
    });
}

// Extra Credit: Randomize RGB values

function getRandomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}