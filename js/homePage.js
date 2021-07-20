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
function startLayout(id = 0) {
    var startLayout = document.querySelectorAll(".content-box");
    localStorage.setItem('detailPage', id);
    window.location.href ="./vietcon.html";
}


function thank() {
    window.location.href ="./thanks.html";
    
}

// API 
let dataTravel = localStorage.getItem('travel');
let obj = JSON.parse(dataTravel);

let templateHTML1 = ``;
for (let i = 0; i < obj.length; i++) {
    templateHTML1 += `<div  class="content-box" id="startLayout 1" data-id=${i} onclick="startLayout(${i})"  >
    <div class="box-img">
        <img src="${obj[i].photo1}" alt="">
    </div>
    <div class="box-text">
        <h3>${obj[i].location}</h3>
        <p>${obj[i].title}</p>
        <div class="box-like">
            <p>Reviewer: ${obj[i].reviewer}</p>
            <div class="box-like-icon">
                <i class="fas fa-heart"> </i> ${obj[i].heart}
                <i class="far fa-comment-alt"></i> ${obj[i].nutComment}
            </div>
        </div>
    </div>
</div>`
};
let reviewConntent = document.getElementById("review-content");
reviewConntent.innerHTML = templateHTML1;



/* searchBar */


function filter(e) {

let keyword = document.getElementById('searchbox');
    console.log(keyword.value)

   let arrayFilter =  obj.filter((item) => {
        return item.title.search(keyword.value) >= 0
    })
    let templateHTMLSearch = ``;
    if (arrayFilter.length > 0) {
        
        for (let i = 0; i < arrayFilter.length; i++) {
            templateHTMLSearch += `<div  class="content-box" id="startLayout 1" data-id=${i} onclick="startLayout(${i})"  >
            <div class="box-img">
                <img src="${arrayFilter[i].photo1}" alt="">
            </div>
            <div class="box-text">
                <h3>${arrayFilter[i].location}</h3>
                <p>${arrayFilter[i].title}</p>
                <div class="box-like">
                    <p>Reviewer: ${arrayFilter[i].reviewer}</p>
                    <div class="box-like-icon">
                        <i class="fas fa-heart"> </i> ${arrayFilter[i].heart}
                        <i class="far fa-comment-alt"></i> ${arrayFilter[i].nutComment}
                    </div>
                </div>
            </div>
        </div>`
        }

        
    }
    reviewConntent.innerHTML = templateHTMLSearch;

}

