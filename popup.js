// grabing elements from the .html
const minutesEl   = document.getElementById("minutes");
const secondsEl   = document.getElementById("seconds");
const startBtn    = document.getElementById("startBtn");
const resetBtn    = document.getElementById("resetBtn");
const playBtn     = document.getElementById("playBtn"); 
const videoSelect = document.getElementById("videoSelect");
const brainRotVideo = document.getElementById("brainRotVideo");

let timeLeft     = 25 * 60;
let timerRunning = false;
let timerInterval = null;

// Update the timer display on the page
function updateTimerDisplay() {
  let minutes = Math.floor(timeLeft / 60);
  let seconds = timeLeft % 60;

  minutesEl.textContent = minutes < 10 ? "0" + minutes : minutes;
  secondsEl.textContent = seconds < 10 ? "0" + seconds : seconds;
}

// START 
startBtn.addEventListener("click", () => {
  if (!timerRunning) {
	timerRunning = true;
	timerInterval = setInterval(() => {
	  if (timeLeft > 0) {
		timeLeft--;
		updateTimerDisplay();
	  } else {
		clearInterval(timerInterval);
		timerRunning = false;
		// Timer ended, i want to add a beep and a 5 min break timer
	  }
	}, 1000);
  }
});

// RESET
resetBtn.addEventListener("click", () => {
  clearInterval(timerInterval);
  timerRunning = false;
  timeLeft = 25 * 60;
  updateTimerDisplay();
});

// PLAY video
playBtn.addEventListener("click", () => {
  let selectedVideo = videoSelect.value;   // the <option> value from dropdown
  // Add autoplay and mute
  brainRotVideo.src = selectedVideo + "?autoplay=1&mute=1";
});

// Initialize the display once on page load
updateTimerDisplay();
