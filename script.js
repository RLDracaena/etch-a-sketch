const container = document.querySelector(".container");

const containerDimensions = 600;
let canvasSize = 50;


function drawCanvas(canvasSize) {
for (i = 0; i < canvasSize * canvasSize; i++) {
    drawSquare();
}}

function drawSquare() {
    const square = document.createElement("div");
    square.classList.add("square");
    square.style.width = ((containerDimensions/canvasSize) + "px")
    square.style.height = ((containerDimensions/canvasSize) + "px")
    container.appendChild(square)}

drawCanvas(canvasSize)