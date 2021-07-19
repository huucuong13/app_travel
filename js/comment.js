const dataUseComment  = JSON.parse(localStorage.getItem("dataUse"));
let commentUse = document.getElementById("commentUse")
for (let i = 0; i < dataUseComment.length; i++) {
    if (dataUseComment[i].Status == 1 ){
        break
    }
    if (i == dataUseComment.length-1){
        commentUse.style.display = "none"
    }
}