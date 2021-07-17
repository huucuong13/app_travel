const dataUse = JSON.parse(localStorage.getItem("dataUse")); //lấy dữ liệu về
//đăng ký
validator({
  form: "#form-1",
  formGroupSelector: ".form-group",
  errorSelector: ".form-message",
  rules: [
    validator.isRequired("#fullname", "Vui lòng nhập tên đầy đủ"),
    validator.isRequired("#email"),
    validator.isEmail("#email"),
    validator.minLength("#password", 6),
    validator.isRequired("#password_confirmation"),
    validator.isConfirmed(
      "#password_confirmation",
      function () {
        return document.querySelector("#form-1 #password").value;
      },
      "Mật khẩu nhập lại không chính xác"
    ),
  ],
  onSubmit: function () {
    if (!dataUse) {
      // thêm acc vào hệ thống khi chưa có dữ liệu
      const dataUse2 = [
        {
          id: "", // id acc
          email: "",//email acc
          password: "",//pass acc
          fullName: "",//tên đầy đủ của chủ acc
          Status :0 // trạng thái hoạt động 
        },
      ];
      dataUse2[0].id = 1;
      dataUse2[0].email = document.getElementById("email").value;
      dataUse2[0].password = document.getElementById("password").value;
      dataUse2[0].fullName = document.getElementById("fullname").value;
      localStorage.setItem("dataUse", JSON.stringify(dataUse2));
      console.log(JSON.parse(localStorage.getItem("dataUse")));
      alert("Bạn đã đăng ký thành công"); // thông báo đăng ký thành công
      location.assign("./homePage.html"); // trở về homepage khi đăng ký thành công
    }
    if (dataUse) {
      //thêm acc vào hệ thống khi có dữ liệu
      let emailValueDK = document.getElementById("email").value;
      let passwordValueDK = document.getElementById("password").value;
      for (let i = 0; i < dataUse.length; i++) {
        //kiểm tra email có tồn tại hay chưa
        if (
          //email đã tồn tại
          emailValueDK == dataUse[i].email
        ) {
          alert("tai khoản đã tồn tại");
          alert("hãy đăng ký email khác");
          break;
        }
        if (i == dataUse.length - 1) {
          // email không tồn tại
          const objecNew = Object.assign({}, dataUse[0]); // thêm 1 objec mới
          delete objecNew.fullName; // tránh lập lại  fullname
          dataUse.push(objecNew); //thêm giá trị mới của array là objec
          dataUse[dataUse.length - 1].id = dataUse.length; //thêm id
          dataUse[dataUse.length - 1].email = emailValueDK; // thêm email
          dataUse[dataUse.length - 1].password = passwordValueDK; //thêm pass
          dataUse[dataUse.length - 1].fullname =
          document.getElementById("fullname").value;// thêm tên đầy đủ 
          console.log(dataUse);
          dataUse[dataUse.length - 1].Status = 0;
          localStorage.setItem("dataUse", JSON.stringify(dataUse)); // dưa lên chỗ lưu trữ( JSON.stringify(dataUse) : chuyển array thành dạng json )
          alert("Bạn đã đăng ký thành công"); // thông báo đăng ký thành công
          location.assign("./homePage.html"); // trở về homepage khi đăng ký thành công
          break;
        }
      }
    }
  },
});
