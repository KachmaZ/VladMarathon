const COLORS = [ '#b8212b', '#ab21b8', '#4921b8', '#21aeb8', '#21b83a', '#a4b821', '#b86021']

const startBtn = document.querySelector('#start');

const screens = document.querySelectorAll('.screen');

startBtn.addEventListener('click', (event) => {
    event.preventDefault();
    screens[0].classList.add('up');
})

const board = document.querySelector('#board');
let score = 0;

const timeList = document.querySelector('#time-list')
let time = 0;

const timeEl = document.querySelector('#time');

timeList.addEventListener('click', event => {
    if (event.target.classList.contains('time-btn')) {
        time = parseInt(event.target.getAttribute('data-time'));
        screens[1].classList.add('up');
        startGame();
    }
})

board.addEventListener('click', (event) => {
    if (event.target.classList.contains('circle')){
        score++;
        event.target.remove();
        createRandomCircle()
    }
})

function startGame() {
    setInterval(decreaseTime, 1000)
    createRandomCircle();
    setTime(time);
}

function finishGame() {
    timeEl.parentNode.classList.add('hide');
    board.innerHTML = `<h1> Cчёт <span class='primary'>${score}</span>! </h1>`;
    
}

function decreaseTime() {
    if (time === 0) {
        finishGame();
    } else {
        let current = --time;
        if (current < 10) {
            current = `0${current}`
        }
        setTime(current);   
    } 
}

function setTime(value) {
    timeEl.innerHTML = `00:${value}`
}

function createRandomCircle() {
    const circle = document.createElement('div');
    
    const size = getRandomNumber(10, 60)
    const {width, height} = board.getBoundingClientRect();
    const x = getRandomNumber(size, width - size);
    const y = getRandomNumber(size, height - size);
    const color = COLORS[getRandomNumber(0, COLORS.length-1)]

    circle.classList.add('circle');
    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.top = `${y}px`;
    circle.style.left = `${x}px`;
    circle.style.backgroundColor = `${color}`;

    board.append(circle);
}

function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}