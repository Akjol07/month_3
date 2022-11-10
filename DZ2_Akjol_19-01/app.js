// Задача номер 1
const btn = document.getElementById("btn");
const block = document.querySelector(".block");
const seconds = document.querySelector("h2");
let positionX = 0;
let positionY = 0;

const move = (interval) => {
    if (positionX <= 440 && positionY <= 0) {
        positionX += 16;
        block.style.left = `${positionX}px`;
        setTimeout(move, 200);
    } else if (positionX >= 440 && positionY <= 440) {
        positionY += 16;
        block.style.top = `${positionY}px`;
        setTimeout(move, 200);
    } else if (positionY === 448 && positionX !== 0) {
        positionX -= 16;
        block.style.left = `${positionX}px`;
        setTimeout(move, 200);
    } else {
        positionY -= 16;
        block.style.top = `${positionY}px`;
        setTimeout(move, 200);
    }
};


// Задача номер 2
btn.addEventListener('click', ()=>{
    time = 1;
    const interval = setInterval(()=>{
        seconds.innerText = time++;
    },1000)
    setTimeout(()=>clearInterval(interval),60000)
    move()
});