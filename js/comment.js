const dataUseComment  = JSON.parse(localStorage.getItem("dataUse"));
let comment = document.getElementById("comment")
for (let i = 0; i < dataUseComment.length; i++) {
    if (dataUseComment[i].Status == 1 ){
        break
    }
    if (i == dataUseComment.length-1){
        comment.style.display = "none"
    }
}