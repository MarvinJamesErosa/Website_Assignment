
// video control
const video = document.getElementById("myVideo");
const playPauseButton = document.getElementById("playPauseButton");

playPauseButton.addEventListener("click", function() {
    if (video.paused) {
        video.play();
        playPauseButton.className = "pause";
    } else {
        video.pause();
        playPauseButton.className = "play";
    }
});