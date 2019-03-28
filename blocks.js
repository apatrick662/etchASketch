var container = document.getElementById("container");
var button = document.getElementById("reset");
var color = document.getElementById("color-select");
var blocks = document.getElementsByClassName("block");
var mouse = document.getElementById("mouse-select");

var grid = [];
container.style.height = "160px";
container.style.width = "160px";

for (i = 0; i < Math.pow(16, 2); i++){
    var block = document.createElement("div");
    block.classList.add('block');
    block.addEventListener("click", changeColor);
    block.addEventListener("mousemove", changeColor);
    container.appendChild(block);
    grid.push(block);
}

function changeColor() {

    var etchColor = color.value;
    this.style.backgroundColor = etchColor;
}

function resetGrid() {

    while(container.firstChild){
        container.removeChild(container.firstChild)
    }

    var gridSize = prompt("How big do you want the grid?(n x n)")

    container.style.height = gridSize*10 + "px";
    container.style.width = gridSize*10 + "px";    

    grid = [];

    for (i = 0; i < Math.pow(gridSize, 2); i++) {
        var block = document.createElement("div");
        block.classList.add('block');
        block.addEventListener("mouseover", changeColor);
        container.appendChild(block);
        grid.push(block);
    }
}

button.addEventListener("click", resetGrid);

