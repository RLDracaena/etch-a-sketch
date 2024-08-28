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

    while (!Number.isInteger(canvasSize) || canvasSize > 100 || canvasSize < 1) {
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

    // squares.forEach((div) => {div.addEventListener("mouseenter", () => {
    //     isMouseEnter = "true"
    //     if (isMouseDown === "true") {
    //     {div.style.backgroundColor = colorChoice}
    // }})})

    squares.forEach((div) => {div.addEventListener("click", () => {div.style.backgroundColor = colorChoice})})

    //clear button
    const clearButton = document.querySelector(".clear-button")
    clearButton.addEventListener("click", clearBoard)

    function clearBoard() {
    squares.forEach((div) => {div.style.backgroundColor = "white"}) }

    


//rainbow button

    const rainbowButton = document.querySelector(".rainbow-button")
    rainbowButton.addEventListener("click", rainbowChoice)

    function rainbowChoice() {
        
    squares.forEach((div) => {div.addEventListener("mouseenter", () => {
        let rainbow = ["red", "blue", "yellow", "green", "purple"]
        let random = Math.floor(Math.random() * rainbow.length)
        colorChoice = rainbow[random]
        isMouseEnter = "true"
        if (isMouseDown === "true") {
        {div.style.backgroundColor = colorChoice}
    }})})
    currentColor.innerText = "?"
    currentColor.style.backgroundColor = "white"
}

// color buttons
const currentColor = document.querySelector(".current-color")
const redButton = document.querySelector(".red-button")
redButton.addEventListener("click", () => {
    colorChoice = "red"
    squares.forEach((div) => {div.addEventListener("mouseenter", () => {
        colorChoice = "red"
        isMouseEnter = "true"
        if (isMouseDown === "true") {
        {div.style.backgroundColor = colorChoice}
        
    }})})
    currentColor.innerText = ""
    currentColor.style.backgroundColor = colorChoice
    })

const blueButton = document.querySelector(".blue-button")
blueButton.addEventListener("click", () => {
    colorChoice = "blue"
    squares.forEach((div) => {div.addEventListener("mouseenter", () => {
        colorChoice = "blue"
        isMouseEnter = "true"
        if (isMouseDown === "true") {
        {div.style.backgroundColor = colorChoice}
        
    }})})
    currentColor.innerText = ""
    currentColor.style.backgroundColor = colorChoice
})

const yellowButton = document.querySelector(".yellow-button")
yellowButton.addEventListener("click", () => {
    colorChoice = "yellow"
    squares.forEach((div) => {div.addEventListener("mouseenter", () => {
        colorChoice = "yellow"
        isMouseEnter = "true"
        if (isMouseDown === "true") {
        {div.style.backgroundColor = colorChoice}
        
    }})})
    currentColor.innerText = ""
    currentColor.style.backgroundColor = colorChoice
})

const greenButton = document.querySelector(".green-button")
greenButton.addEventListener("click", () => {
    colorChoice = "green"
    squares.forEach((div) => {div.addEventListener("mouseenter", () => {
        colorChoice = "green"
        isMouseEnter = "true"
        if (isMouseDown === "true") {
        {div.style.backgroundColor = colorChoice}
        
    }})})
    currentColor.innerText = ""
    currentColor.style.backgroundColor = colorChoice

})

const purpleButton = document.querySelector(".purple-button")
purpleButton.addEventListener("click", () => {
    colorChoice = "purple"
    squares.forEach((div) => {div.addEventListener("mouseenter", () => {
        colorChoice = "purple"
        isMouseEnter = "true"
        if (isMouseDown === "true") {
        {div.style.backgroundColor = colorChoice}
        
    }})})
    currentColor.innerText = ""
    currentColor.style.backgroundColor = colorChoice

})


}




    

