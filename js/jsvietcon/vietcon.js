function addComment(){
    let userComment = document.getElementById("userComment").value;
	document.getElementById("ui-state-default").innerHTML = userComment;
}
// slide
let counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);


let detailId = localStorage.getItem('detailPage');
let listTravel = JSON.parse(localStorage.getItem('travel'));
let dataDetail = listTravel[detailId];

title = document.getElementById('title');
reviewer =  document.getElementById('reviewer');
location_txt =  document.getElementById('location');
vung =  document.getElementById('vung');
tinh =  document.getElementById('tinh');
diahinh =  document.getElementById('diahinh');
khihau =  document.getElementById('khihau');
diadiem =  document.getElementById('diadiem');
tongquan =  document.getElementById('tongquan');
time =  document.getElementById('time');
smalltitle =  document.getElementById('smalltitle');
review1 =  document.getElementById('review1');
photo1 =  document.getElementById('photo1');
review2 =  document.getElementById('review2');
photo2 =  document.getElementById('photo2');
review3 =  document.getElementById('review3');
img1 =  document.getElementById('img1');
img2 =  document.getElementById('img2');
img3 =  document.getElementById('img3');
img4 =  document.getElementById('img4');
right_card =  document.getElementById('right_card');
img5 =  document.getElementById('img5');
img6 =  document.getElementById('img6');
img7 =  document.getElementById('img7');
danhgia =  document.getElementById('danhgia');
heart =  document.getElementById('heart');
nutComment =  document.getElementById('nutComment');
user1a =  document.getElementById('user1a');
user1b =  document.getElementById('user1b');
user1c =  document.getElementById('user1c');
user2a =  document.getElementById('user2a');
user2b =  document.getElementById('user2b');
user2c =  document.getElementById('user2c');
user3a =  document.getElementById('user3a');
user3b =  document.getElementById('user3b');
user3c =  document.getElementById('user3c');
per1 =  document.getElementById('per1');
per2 =  document.getElementById('per2');
per3 =  document.getElementById('per3');
per4 =  document.getElementById('per4');
per5 =  document.getElementById('per5');
per6 =  document.getElementById('per6');
per7 =  document.getElementById('per7');
per8 =  document.getElementById('per8');
per9 =  document.getElementById('per9');
per10 =  document.getElementById('per10');
per11 =  document.getElementById('per11');
per12 =  document.getElementById('per12');
per13 =  document.getElementById('per13');
per14 =  document.getElementById('per14');
per15 =  document.getElementById('per15');
per16 =  document.getElementById('per16');
per17 =  document.getElementById('per17');
per18 =  document.getElementById('per18');
per19 =  document.getElementById('per19');
per20 =  document.getElementById('per20');


title.innerHTML = dataDetail.title;
reviewer.innerHTML = dataDetail.reviewer;
vung.innerHTML = dataDetail.text.vung;
diahinh.innerHTML = dataDetail.text.diahinh;
khihau.innerHTML = dataDetail.text.khihau;
tongquan.innerHTML = dataDetail.text.tongquan;
diadiem.innerHTML = dataDetail.text.diadiem;
tinh.innerHTML = dataDetail.text.tinh;
location_txt.innerHTML = dataDetail.location;
time.innerHTML = dataDetail.time;
smalltitle.innerHTML = dataDetail.smalltitle;
review1.innerHTML = dataDetail.review1;
photo1.src = dataDetail.photo1;
review2.innerHTML = dataDetail.review2;
photo2.src = dataDetail.photo2;
review3.innerHTML = dataDetail.review3;
img1.src = dataDetail.img1;
img2.src = dataDetail.img2;
img3.src = dataDetail.img3;
img4.src = dataDetail.img4;
right_card.innerHTML = dataDetail.right_card;
img5.src = dataDetail.img5;
img6.src = dataDetail.img6;
img7.src = dataDetail.img7;
danhgia.innerHTML = dataDetail.danhgia;
heart.innerHTML = dataDetail.heart;
nutComment.innerHTML = dataDetail.nutComment;
user1a.src = dataDetail.user1a;
user1b.innerHTML = dataDetail.user1b;
user1c.innerHTML = dataDetail.user1c;
user2a.src = dataDetail.user2a;
user2b.innerHTML = dataDetail.user2b;
user2c.innerHTML = dataDetail.user2c;
user3a.src = dataDetail.user3a;
user3b.innerHTML = dataDetail.user3b;
user3c.innerHTML = dataDetail.user3c;
user3c.innerHTML = dataDetail.user3c;
per1.src = dataDetail.per1;
per2.innerHTML = dataDetail.per2;
per3.innerHTML = dataDetail.per3;
per4.innerHTML = dataDetail.per4;

per5.src = dataDetail.per5;
per6.innerHTML = dataDetail.per6;
per7.innerHTML = dataDetail.per7;
per8.innerHTML = dataDetail.per8;

per9.src = dataDetail.per9;
per10.innerHTML = dataDetail.per10;
per11.innerHTML = dataDetail.per11;
per12.innerHTML = dataDetail.per12;

per13.src = dataDetail.per13;
per14.innerHTML = dataDetail.per14;
per15.innerHTML = dataDetail.per15;
per16.innerHTML = dataDetail.per16;

per17.src = dataDetail.per17;
per18.innerHTML = dataDetail.per18;
per19.innerHTML = dataDetail.per19;
per20.innerHTML = dataDetail.per20;


let dataUser = localStorage.getItem('dataUse');
dataUser = JSON.parse(dataUser);

let dataLogin = dataUser.filter( function(e, index) {
        return e.Status == 1;
    });
    
    
    
let divContentUser = document.getElementById("comment-fake");

if (dataDetail.comments.length > 0) {
    let list = '<div>';
    dataDetail.comments.forEach(element => {
        list += `<div class="person-1">
    <div class="img-person"><img  src="https://i.pinimg.com/originals/18/60/64/186064435781b1d78013dcb4ba9208a4.jpg"></div>
    <div class="comment-fake-content">
        <h2 >${ element.name }</h2>
        <span >${ element.date }</span>
        <p ><i class="fas fa-quote-left"></i> ${element.content}</p></div></div> `;
    });
    list +='</div>';

    divContentUser.innerHTML = list;
}


// push comments 
function submitComment() {
    let divContent = document.getElementById('content-comment');
    let content = divContent.value;
    let date = new Date();
    let dateTime = date.getFullYear() +'/'+ date.getMonth() + '/' + date.getDay() +' ' + date.getHours() + ':' + date.getMinutes();
    let nameComment = '';
    if (dataLogin.length > 0) {
        nameComment = dataLogin[0].fullname;
    }   

    listComments = dataDetail.comments;
    let dataContent = {
        'content' : content,
        'date' : dateTime,
        'name' : nameComment,
    };
    listTravel[detailId].comments.push(dataContent);
    divContent.value = '';
 

    comment = document.createElement('div');
    htmlContent = '<div class="person-1">'+
    '<div class="img-person"><img  src="https://i.pinimg.com/originals/18/60/64/186064435781b1d78013dcb4ba9208a4.jpg"></div>'+
    '<div class="comment-fake-content">'+
        '<h2 >' + nameComment +'</h2>'+
        '<span >' + dateTime +'</span>'+
        '<p ><i class="fas fa-quote-left"></i> ' +content+'</p></div></div> ';

    comment.innerHTML = htmlContent;
    divContentUser.appendChild(comment);
    console.log(detailId);
     localStorage.setItem("travel", JSON.stringify(listTravel));
   
    
}



