const minutesInput = document.querySelector('.minutes');
const secondsInput = document.querySelector('.seconds');
const millisecondsInput = document.querySelector('.milliseconds');
const dots = document.querySelectorAll('.dots');

const startButton = document.querySelector('.btn-start');
const stopButton = document.querySelector('.btn-stop');
const resetButton = document.querySelector('.btn-reset');

millisecondsInput.textContent = '00';
secondsInput.textContent = '00';
minutesInput.textContent = '00';

dots.forEach(dots => {
    dots.textContent = ' : ';
})


let minutes = 00;
let seconds = 00;
let milliseconds = 00;

let stopWatch;

const renderFormat = function(elapsedTime) {
    return elapsedTime < 10 ? `0${elapsedTime}` : `${elapsedTime}`;
};

const timeRunning = function() {
   
    milliseconds++;
   
    if (milliseconds > 99) {
        milliseconds = 0;
        seconds++;  
    }

    if (seconds > 59) {
        seconds = 0
        minutes++;  
    }

    millisecondsInput.textContent = renderFormat(milliseconds);
    secondsInput.textContent = renderFormat(seconds);
    minutesInput.textContent = renderFormat(minutes);
};

const startStopWatch = function() {
    clearInterval(stopWatch);
    stopWatch = setInterval(timeRunning, 10);
};


const stopStopWatch = function() {
    clearInterval(stopWatch);
}

const resetStopWatch = function() {
    clearInterval(stopWatch);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    millisecondsInput.textContent = '00';
    secondsInput.textContent = '00';
    minutesInput.textContent = '00';
}

startButton.addEventListener('click', startStopWatch);
stopButton.addEventListener('click', stopStopWatch);
resetButton.addEventListener('click', resetStopWatch);