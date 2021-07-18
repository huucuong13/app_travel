const dataUseDX  = JSON.parse(localStorage.getItem("dataUse"));

// hiện chữ đăng xuất nếu như đã có acc đăng nhập
let L2 = document.getElementById("login2");// kết nối với thẻ log in 
let L3 = document.getElementById("login3"); // kết nối với thẻ con của thẻ log in
for (i = 0; i < dataUseDX.length; i++) {
    if (dataUseDX[i].Status == 1) {// chạy vòng for để  đi qua toàn bộ acc
      L3.remove()// xóa thẻ con của thẻ log in
      L2.onclick = () =>{ //khi click vào đăng xuất trở về trang chủ và thoát acc
        dataUseDX[i].Status = 0;
        localStorage.setItem("dataUse", JSON.stringify(dataUseDX));
        location.assign("./homePage.html");
      }         
     L2.innerHTML = "Log out";// xóa chữ log in thay bằng chữ đăng xuất 
      break
    }
  }
