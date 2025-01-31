
const timerDisplay = document.getElementById("timer");

const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");
//const videoFrame = document.getElementById("brainRotVideo");
const brainRotVideo = document.getElementById("brainRotVideo");

let timeLeft = 25 * 60;
let timerRunning = false;
let timerInterval;

loadVideoButton.addEventListener("click", function () {
    let selectedVideo = videoSelect.value;
    brainRotVideo.src = selectedVideo + "?autoplay=1&mute=1"; // Load and mute the video
});

startButton.addEventListener("click", function () {
    if (!timerRunning) {
        timerRunning = true; 
        videoFrame.src += "&autoplay=1&mute=1";
        timerInterval = setInterval(updateTimer, 1000); // Start countdown
    }
});

resetButton.addEventListener("click", function () {
    clearInterval(timerInterval); // Stop the timer
    timerRunning = false; // Mark timer as stopped
    timeLeft = 25 * 60; // Reset to 25 minutes
    timerDisplay.textContent = "25:00"; // Reset display
});


function updateTimer() {
    if (timeLeft > 0)
    {
        timeLeft--;
        let minutes = Math.floor(timeleft / 60);
        let seconds = timeLeft % 60;
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`; 
    }
    else {
        clearInterval(timerInterval);
        timerRunning = false;
    }
}