// Thanh header
window.addEventListener("scroll", function() {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

// VIDEO
var videoPlayer = document.getElementById("videoPlayer");
var myVideo = document.getElementById("myVideo");
function stopVideo () {
    videoPlayer.style.display="none";
}
function playVideo (file) {
    myVideo.src = file;
    videoPlayer.style.display = "block";

}