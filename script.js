console.log("Initializing");

var colors = generateColorArray(6);

var squaresDisplay = document.querySelectorAll(".color-square");
var rgbDisplay = document.getElementById("rgb-value-display");
var headerSection = document.querySelector("#header");

var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");
var messageDisplay = document.querySelector("#message");

var correctColor = pickRandomColor();

rgbDisplay.textContent = correctColor.toUpperCase();

for (var i = 0; i < squaresDisplay.length; i++) {

    squaresDisplay[i].style.background = colors[i];

    squaresDisplay[i].addEventListener("click", function () {

        var clickedColor = this.style.background;

        console.log(correctColor);

        if (clickedColor === correctColor) {
            gameEnd();
        }

        else {
            this.style.opacity = "0";
            this.style.cursor = "default";
            messageDisplay.textContent = "Try Again";
        }
    })
}

easyButton.addEventListener("click", function () {
    messageDisplay.textContent = "";

    colors = generateColorArray(3);

    correctColor = pickRandomColor();

    rgbDisplay.textContent = correctColor.toUpperCase();

    for (var i = 0; i < colors.length; i++) {
        squaresDisplay[i].style.background = colors[i];
        squaresDisplay[i].style.opacity = "1";
        squaresDisplay[i].style.cursor = "pointer";
    }

    for (var i = 3; i < squaresDisplay.length; i++) {
        squaresDisplay[i].style.display = "none";
    }

    this.classList.add("button-selected");
    hardButton.classList.remove("button-selected");
})

hardButton.addEventListener("click", function () {
    messageDisplay.textContent = "";

    colors = generateColorArray(3);

    correctColor = pickRandomColor();

    rgbDisplay.textContent = correctColor.toUpperCase();

    for (var i = 0; i < squaresDisplay.length; i++) {
        squaresDisplay[i].style.display = "block";
        squaresDisplay[i].style.background = colors[i];
        squaresDisplay[i].style.opacity = "1";
        squaresDisplay[i].style.cursor = "pointer";
    }

    this.classList.add("button-selected");
    easyButton.classList.remove("button-selected")
})

resetButton.addEventListener("click", function () {
    messageDisplay.textContent = "";

    colors = generateColorArray(6);

    correctColor = pickRandomColor();

    rgbDisplay.textContent = correctColor.toUpperCase();

    for (var i = 0; i < squaresDisplay.length; i++) {
        squaresDisplay[i].style.background = colors[i];
        squaresDisplay[i].style.opacity = "1";
        squaresDisplay[i].style.cursor = "pointer";
    }

    resetButton.textContent = "NEW COLORS";

})

function gameEnd() {
    headerSection.style.background = correctColor;

    for (var i = 0; i < squaresDisplay.length; i++) {
        squaresDisplay[i].style.opacity = "1";
        squaresDisplay[i].style.background = correctColor;
    }

    messageDisplay.textContent = "You have selected the correct color!";
    resetButton.textContent = "PLAY AGAIN";
}

function pickRandomColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateColorArray(num) {

    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push(generateRandomColor());
    }

    return arr;
}

function generateRandomColor() {
    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);

    return "rgb(" + red + ", " + green + ", " + blue + ")";
}