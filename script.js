const container = document.querySelector(".container");
const generateCanvas = document.querySelector(".generate-canvas")
const currentSize = document.querySelector(".current-size")


const containerDimensions = 600;
let canvasSize = 20;
let colorChoice = "white"

drawCanvas(canvasSize)
currentSize.innerText = canvasSize + "x" + canvasSize
draw()


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

function clearCanvas() {
while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
    
}}

generateCanvas.addEventListener("click", () => {
    clearCanvas()
    canvasSize = Number(prompt("Please enter a size between 1 and 100"))

    while (!Number.isInteger(canvasSize) || canvasSize > 100) {
        canvasSize = Number(prompt("Please enter a size between 1 and 100"))
    }

    drawCanvas(canvasSize);
    currentSize.innerText = canvasSize + "x" + canvasSize
    draw()
})
    function draw() {

    //mouse events
    isMouseDown = "false"
    isMouseEnter = "false"

    const squares = document.querySelectorAll(".square")

    squares.forEach((div) => {div.addEventListener("mousedown", () => {isMouseDown = "true"
        div.style.backgroundColor = colorChoice
    })})

    squares.forEach((div) => {div.addEventListener("mouseup", () => {isMouseDown = "false"})})

    squares.forEach((div) => {div.addEventListener("mouseenter", () => {
        isMouseEnter = "true"
        if (isMouseDown === "true") {
        {div.style.backgroundColor = colorChoice}
    }})})

    squares.forEach((div) => {div.addEventListener("click", () => {div.style.backgroundColor = colorChoice})})

    }



// color buttons
const currentColor = document.querySelector(".current-color")
const redButton = document.querySelector(".red-button")
redButton.addEventListener("click", () => {
    colorChoice = "red"
    currentColor.style.backgroundColor = colorChoice})

const blueButton = document.querySelector(".blue-button")
blueButton.addEventListener("click", () => {
    colorChoice = "blue"
    currentColor.style.backgroundColor = colorChoice})

const yellowButton = document.querySelector(".yellow-button")
yellowButton.addEventListener("click", () => {
    colorChoice = "yellow"
    currentColor.style.backgroundColor = colorChoice})


