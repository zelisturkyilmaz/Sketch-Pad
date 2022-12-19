let currentSize = 16;
let currentColor = "black";

const drawArea = document.querySelector(".gridArea");
const sizeValue = document.getElementById("sizeValue");
const sizeSlider = document.getElementById("sizeSlider");
const colorValue = document.getElementById("colorPicker");
const clearButton = document.getElementById("clearButton");


sizeSlider.onchange = (e) => changeSize(e.target.value);
sizeSlider.onmousemove = (e) => sizeValue.innerText = `Grid size: ${e.target.value} x ${e.target.value}`;



let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


function createGrid(currentSize) {
    drawArea.style.gridTemplateColumns = `repeat(${currentSize}, 1fr)`;
    drawArea.style.gridTemplateRows = `repeat(${currentSize}, 1fr)`;
    
    for (let i = 1; i <= (currentSize ** 2); i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.addEventListener("mousedown", colorSquare);
        square.addEventListener("mouseover", colorSquare);
        drawArea.appendChild(square);
    }
}

function colorSquare(e) {
    if (e.type === "mouseover" && !mouseDown) return;
    e.target.style.backgroundColor = currentColor;
}

function changeSize(value) {
    currentSize = value;
    clearGrid();
}

colorValue.addEventListener("input", updateColor);

function updateColor(e) {
    currentColor = e.target.value;
}

clearButton.addEventListener("click", clearGrid)

function clearGrid() {
    drawArea.innerText = "";
    createGrid(currentSize);
}

createGrid(currentSize);