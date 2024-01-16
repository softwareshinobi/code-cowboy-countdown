const countdownTimer = document.getElementById('countdown-timer');

const totalSeconds = 8 * 60; // 8 minutes in seconds
let secondsRemaining = totalSeconds;

function updateTimer() {
    const minutes = Math.floor(secondsRemaining / 60);
    const seconds = secondsRemaining % 60;
    const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    countdownTimer.textContent = formattedTime;

    secondsRemaining--;
    if (secondsRemaining >= 0) {
        setTimeout(updateTimer, 1000);
    } else {
        countdownTimer.textContent = 'Time\'s up, partner!';
    }
}

updateTimer();
