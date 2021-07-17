const dataUse = JSON.parse(localStorage.getItem("dataUse")); //lấy dữ liệu về
//đăng ký
validator({
  form: "#form-1",
  formGroupSelector: ".form-group",
  errorSelector: ".form-message",
  rules: [
    // validator.isRequired("#fullname", "Vui lòng nhập tên đầy đủ"),
    validator.isRequired("#email"),
    validator.isEmail("#email"),
    validator.minLength("#password", 6),
    // validator.isRequired("#password_confirmation"),
    // validator.isConfirmed(
    //   "#password_confirmation",
    //   function () {
    //     return document.querySelector("#form-1 #password").value;
    //   },
    //   "Mật khẩu nhập lại không chính xác"
    // ),
  ],
  onSubmit: function () {
    if (!dataUse) {
      alert("Tài khoản không tồn tại , hãy tạo tài khoản mới ngay");
    }

    if (dataUse) {
      let emailValueDN = document.getElementById("email").value;
      let passwordValueDN = document.getElementById("password").value;
      for (let x = 0; x < dataUse.length; x++) {
        //chạy vòng for để đăng nhập
        if (
          passwordValueDN == dataUse[x].password &&
          emailValueDN == dataUse[x].email &&
          dataUse[x].Status == 0
        ) {
          dataUse[x].Status = 1; // chuyển trạng thái hoạt động acc từ off thành on
          localStorage.setItem("dataUse", JSON.stringify(dataUse));
          alert("Đăng nhập thành công");
          location.assign("./homePage.html"); //trở về homepage
          break;
        }
        if (dataUse[x].Status == 1) {
          alert("đã có tài khoản hiện đang đăng nhập");
          break;
        }
        if (x == dataUse.length - 1) {
          alert("Sai email hoặc mật khẩu , vui lòng nhập lại ");
          break;
        }
      }
    }
  },
});
