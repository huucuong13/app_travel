const dataUseDX = JSON.parse(localStorage.getItem("dataUse"));
let L = document.getElementById("login"); // kết nối với thẻ log in
let L1 = document.getElementById("login1"); // kết nối với thẻ con của thẻ log in
for (i = 0; i < dataUseDX.length; i++) {
  // hiện chữ đăng xuất nếu như đã có acc đăng nhập
  if (dataUseDX[i].Status == 1) {
    // chạy vòng for để  đi qua toàn bộ acc
    L1.remove(); // xóa thẻ con của thẻ log in
    L.onclick = () => {
      //khi click vào đăng xuất trở về trang chủ và thoát acc
      dataUseDX[i].Status = 0;
      localStorage.setItem("dataUse", JSON.stringify(dataUseDX));
      location.assign("./homePage.html");
    };
    L.innerHTML = "Log out"; // xóa chữ log in thay bằng chữ đăng xuất
    break;
  }
}



