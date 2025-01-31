document.getElementById("startApp").addEventListener("click", function() {
    chrome.storage.local.set({ firstTime: false }); // Store that the user has opened the app
    window.location.href = "popup.html"; // Redirect to the main Pomodoro page
});
