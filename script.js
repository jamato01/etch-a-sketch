// Create Grid

const container = document.querySelector(".container");

for (i = 0; i < 16; i++) {
    const rowContainer = document.createElement("div");
    rowContainer.setAttribute("class", "row-container");
    container.appendChild(rowContainer);
    for (j = 0; j < 16; j++) {
        const grid = document.createElement("div");
        grid.setAttribute("class", "grid");
        rowContainer.appendChild(grid);
    }
}
