const countdownTimer = document.getElementById('countdown-timer');

const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');
const resetButton = document.getElementById('reset-button');
const timeInput = document.getElementById('time-input');

let intervalId;
let secondsRemaining = timeInput.value;

//

$(document).ready(function () {

//    $("#intention").val("");
    
    resetTimer();

});

function resetTimer() {

    alert("interval id / " + intervalId);

    clearInterval(intervalId);

    secondsRemaining = timeInput.value;

    countdownTimer.textContent = '--:--';

    enableButtons('start');

}

function enableButtons(action) {

    startButton.disabled = action !== 'start';

    pauseButton.disabled = action !== 'pause';

    resetButton.disabled = action !== 'reset';

    timeInput.disabled = action !== 'start';

}

function startTimer() {

    alert("start timer!");

    intervalId = setInterval(updateTimer, 1000);

    startButton.disabled = true;

    pauseButton.disabled = false;

    resetButton.disabled = true;

    timeInput.disabled = true;

}

function pauseTimer() {

    alert("pauses timer!");

    clearInterval(intervalId);

    startButton.disabled = false;

    pauseButton.disabled = true;

    resetButton.disabled = false;

    timeInput.disabled = false;

}


function updateTimer() {

    const minutes = Math.floor(secondsRemaining / 60);

    const seconds = secondsRemaining % 60;

    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    countdownTimer.textContent = formattedTime;


    secondsRemaining--;

    if (secondsRemaining >= 0) {

//    setTimeout(updateTimer, 1000);

    } else {

    countdownTimer.textContent = 'Time\'s up, partner!';

//    clearInterval(intervalId);

    enableButtons('reset');
resetTimer();
    }

    }






startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
timeInput.addEventListener('change', () => resetTimer());
