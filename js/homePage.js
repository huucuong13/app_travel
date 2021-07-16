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



// layout

var startLayout = document.querySelectorAll(".content-box");
for (let i = 0; i < startLayout.length; i++) {
    startLayout[i].addEventListener("click", function() {
        window.location.href ="./vietcon.html"
    })
}

// API 
// let layoutReview = [
//     {
//         id: 1,
//         h3: 'da lat',
        
//     }
// ]

// let templateHTML = ``;
// for (let i = 0; i < layoutReview.length; i++) {
//     templateHTML += `<div  class="content-box" id="startLayout 1" onclick="startLayout(${i})"  >
//     <div class="box-img">
//         <img src="./image/img-cuong/review_img.png" alt="">
//     </div>
//     <div class="box-text">
//         <h3>Sa Pa</h3>
//         <p>Chia sẻ lại bài Review phượt SAPA 3 ngày 2 đêm của bạn Ngọc Vũ</p>
//         <div class="box-like">
//             <p>Reviewer: Ngọc Vũ</p>
//             <div class="box-like-icon">
//                 <i class="fas fa-heart"> </i> 200
//                 <i class="far fa-comment-alt"></i> 300
//             </div>
//         </div>
//     </div>
// </div>`
// };

// function changeLayout(index) {
//     localStorage.setItem('ad',1);
// }
// reviewDiv.innerHTML = templateHTML;

// const layoutReview = JSON.parse(localStorage.getItem(layoutReview));

// layoutReview[1].comment.push({
//     id:1

// })

// document.getElementById("").appendChild();
// localStorage.setItem("layoutReview", JSON.stringify(layoutReview));