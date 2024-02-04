let intervalId;

let secondsRemaining;

let defaultMinutes=8;

$(document).ready(function () {

    $("#minuteSlider").val(defaultMinutes);
    
    let secondsRemaining = $("#minuteBox").value * 60;

    resetTimer();

});

// stopwatch event handling //////

function resetTimer() {

    console.log("did reset");

    clearInterval(intervalId);

    secondsRemaining = defaultMinutes * 60;

    $("#countdownBanner").text("--:--");

    enableButtons('start');

}

function startTimer() {

    console.log("secondsRemaining / " + secondsRemaining);

    $("#buttonWatchStart").disabled = true;

    $("#buttonWatchPause").disabled = false;

    $("#buttonWatchReset").disabled = true;

    intervalId = setInterval(updateTimer, 1000);

    $("#minuteBox").disabled = true;

}

function updateTimer() {

    console.log("secondsRemaining / " + secondsRemaining);

    const minutes = Math.floor(secondsRemaining / 60);

    console.log("minutes / " + minutes);

    const seconds = secondsRemaining % 60;

    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

    console.log("formattedTime / " + formattedTime);



    secondsRemaining--;

    if (secondsRemaining >= 0) {

        $("#countdownBanner").text(formattedTime);

    } else {

        $("#countdownBanner").textContent = 'Time\'s up, partner!';

        enableButtons('reset');

        resetTimer();

    }

}

function pauseTimer() {

    clearInterval(intervalId);

    startButton.disabled = false;

    pauseButton.disabled = true;

    resetButton.disabled = false;

    timeInput.disabled = false;

}

// stopwatch display handling //////

function enableButtons(action) {

    $("#buttonWatchStart").disabled = action !== 'start';

    $("#buttonWatchPause").disabled = action !== 'pause';

    $("#buttonWatchReset").disabled = action !== 'reset';

    $("#minuteBox").disabled = action !== 'start';

}
