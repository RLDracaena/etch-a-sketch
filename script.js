const container = document.querySelector(".container");

let containerWidth = 32;

for (i = 0; i < containerWidth * containerWidth; i++) {
    drawContainer();
    drawSquare();
}

//don't know why but there is 2px added in browser
function drawContainer() {
    container.style.width = (containerWidth * 15 + 2) + "px";
}

function drawSquare() {
    const square = document.createElement("div");
    square.classList.add("square");
    container.appendChild(square)}
