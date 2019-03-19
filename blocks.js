const container = document.getElementById("container");
const button = document.getElementById("reset");

var grid = [];

for (i = 0; i < 16; i++){
    var block = document.createElement("div");
    block.classList.add('block');
    container.appendChild(block);
    grid.push(block);
}

function resetGrid() {
    var gridSize = prompt("How big do you want the grid?(n x n)")

    grid = [];

    for (i = 0; i < Math.pow(gridSize, 2); i++) {
        var block = document.createElement("div");
        block.classList.add('block');
        container.appendChild(block);
        grid.push(block);
    }
}

button.addEventListener("click", resetGrid);
