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

// scroll banner

let video = document.querySelector('section');
window.addEventListener('scroll', function () {
    let value = 1 + window.scrollY/ -600;
    video.style.opacity = value
})

// Start_user

var modal = document.getElementById("modal");
// var myModal = document.getElementById("myModal");
// function stopUser () {
//     modal.style.display ="none"
// }
function startUser () {
    modal.style.display ="block";
}

// layout

var startLayout = document.querySelectorAll(".content-box");
for (let i = 0; i < startLayout.length; i++) {
    startLayout[i].addEventListener("click", function() {
        window.location.href ="./vietcon.html"
    })
}

