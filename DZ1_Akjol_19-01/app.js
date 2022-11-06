// Задача номер 1
const EnterInput = document.querySelector("#enterInput");
const EnterInn = document.querySelector(".enterInn");
const EnterResult = document.querySelector(".enterResult");

const EnterRegExp = /^0\d{13}$/;

EnterInn.addEventListener("click", () => {
    if (EnterRegExp.test(EnterInput.value)){
        EnterResult.innerText = "OK";
        EnterResult.style.color = "Blueviolet";
    } else {
        EnterResult.innerText = "Not Ok!!";
        EnterResult.style.color = "red";
    }
});


// Задача номер 2
const button = document.getElementById("btn")

let positionX = 0
let positionXR = 0
let positionY = 0

button.addEventListener("click", () => {
    const warp = document.querySelector(".warp")
    const cube = document.querySelector(".cube")

    const runBlockToLeft = () => {
        if (positionX < (warp.clientWidth - cube.clientWidth)) {
            positionX += 16
            cube.style.left = positionX + "px"
            console.log(`left: ${positionX}`)
            runBlockToLeft()
        }
    }
    const runBlockToDown = () => {
        if (positionY < (warp.clientHeight - cube.clientHeight)) {
            positionY += 16
            cube.style.top = positionY + "px"
            console.log(`top: ${positionY}`)
            runBlockToDown()
        }
    }
    const runBlockToRight = () => {
        if (positionXR < positionX) {
            positionXR += 16
            cube.style.left = `${positionX - positionXR}px`
            console.log(`right: ${positionXR}`)
            runBlockToRight()
        }
    }
    const runBlockToUp = () => {
        if (positionY > 0) {
            positionY -= 16
            positionX -= 16
            positionXR -= 16
            cube.style.left = positionX + "px"
            cube.style.top = positionY + "px"
            console.log(`top: ${positionY}`)
            runBlockToUp()
        }
    }
    if (positionX < (warp.clientWidth - cube.clientWidth)) {
        runBlockToLeft()
    } else if (positionXR >= (warp.clientWidth - cube.clientWidth)) {
        runBlockToUp()
    } else if (positionY >= (warp.clientHeight - cube.clientHeight)) {
        runBlockToRight()
    } else if (positionX >= (warp.clientWidth - cube.clientWidth)) {
        runBlockToDown()
    }
});

