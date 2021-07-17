const dataUseDX = JSON.parse(localStorage.getItem("dataUse"));
      for (i = 0; i < dataUseDX.length; i++) {
        // hiện chữ đăng xuất nếu như đã có acc đăng nhập
        let L = document.getElementById("login");// kết nối với thẻ log in 
        let L1 = document.getElementById("login1"); // kết nối với thẻ con của thẻ log in
        if (dataUseDX[i].Status == 1) {// chạy vòng for để  đi qua toàn bộ acc
          L1.remove()// xóa thẻ con của thẻ log in
          L.onclick = () =>{ //khi click vào đăng xuất trở về trang chủ và thoát acc
            for (let x = 0; x < dataUse.length; x++) {
            dataUse[x].Status = 0;
            localStorage.setItem("dataUse", JSON.stringify(dataUse));
            console.log("oki");}
            location.assign("./homePage.html");
          }         
         L.innerHTML = "Đăng xuất";// xóa chữ log in thay bằng chữ đăng xuất 
          break
        }
      }
      