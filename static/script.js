
const DEFAULTSIZE = 16;

let currentSize = DEFAULTSIZE;

let drawArea = document.querySelector(".rightSection");

function createGrid(currentSize) {
    drawArea.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`;
    drawArea.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`;
    
    for (let i = 1; i <= (currentSize ** 2); i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        drawArea.appendChild(square);
    }
}

createGrid(currentSize);