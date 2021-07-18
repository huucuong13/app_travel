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

const travel = [
    {
        
        title:"Review Trải nghiệm khám phá Hồ Trị An 2 ngày 1 đêm",
        reviewer:"Tuấn David", 
        location:"Khu vực Hồ Trị An",
        text: {
            vung: "- Vùng: Tây Nam Bộ",
            tinh:"- Tỉnh: Đồng Nai",
            diahinh: "- Địa hình: Sông Hồ",
            khihau: "- Khí hậu: Nhiệt độ tầm 30-33 độ",
            diadiem: "- Địa điểm: hồ Trị An",
            mota: "- Hồ Trị An là một hồ nước nhân tạo nằm trên sông Đồng Nai, thuộc các huyện Vĩnh Cửu, Định Quán, Thống Nhất và Trảng Bom, tỉnh Đồng Nai, Việt Nam. Hồ là nơi trữ nước để cung cấp cho Nhà máy thủy điện Trị An. Hồ Trị An được khởi công vào năm 1984 và hoàn thành đầu năm 1987",
        },
        smalltitle: "Hồ Trị An review",
        review1:"Những chuyến đi phát sinh ngẫu nhiên luôn mang đến cho chúng ta những cảm xúc khó ta. Chuyến đi Hồ Trị An của Ghiền review cũng vậy. Đang say giấc ngủ nướng vào một ngày thứ 7 đẹp trời, thằng bạn nó gọi điện thoại rủ kêu đi Hồ Trị An chơi không? Mơ mơ màng màng mình đồng ý cái rụp rồi ngủ tiếp . Ấy thế mà không biết sao, 11h mình đã có mặt ở nhà tên bạn ở bên Quận 2 để đi xe máy lên Vĩnh Cửu – Đồng Nai nè.",
        photo1: "https://ghienreview.com/wp-content/uploads/2020/02/Ghien-review-Ho-Tri-An-06-1536x862.jpg",
        review2:"Như các bạn đã được xem trong video trải nghiệm của mình ở trên, Ghiền review và những người bạn chạy thuyền hơi lòng vòng mấy cái bè ở gần bờ để mua cá lăng cho bữa tối nè. Sau đó, cả nhóm đi tìm một “miền đất hứa” để neo đậu và dựng lều. Đảo qua đảo lại, cuối cùng tụi mình tìm đến Đảo Năm Bầu (Đảo của chú Năm, đã sinh sống tách biệt ở đây hơn 30 năm), cách đất liền 5km.",
        photo2: "Đồng Nai",
        review3:"Cuối cùng màn thú vị nhất đã đến. Chiếc thuyền hơi sẽ kéo những chiếc thuyền Sup tung tăng đi giữa làn nước của Hồ Trị An. Ghiền review tin rằng mới đầu bạn sẽ khá gặp khó khăn trong việc giữ thăng bằng thuyền Sup theo chiều kéo của thuyền hơi và chắc chắn bạn sẽ ngã vài cú sấp mặt vào làn nước trong mát của hồ. Tuy nhiên sau vài lần can đảm đứng lên từ sự vấp ngã, bạn sẽ trải nghiệm được một cảm giác cực phê và chưa bao giờ bạn được trải nghiệm trong đời. Chơi mệt rồi thì các bạn chỉ cần nằm lên Sup và để thuyền hơi kéo đi, ngắm nhìn thiên nhiên hùng vĩ, cảm giác ấy tuyệt vời ông mặt trời lắm luôn í.",
    },
    {
        title:"Kinh nghiệm du lịch Quảng Trị – Huế 3 ngày 2 đêm siêu rẻ",
        reviewer:"Hoàng Long", 
        location:"Khu vực Quảng Trị – Huế",
        text: {
            vung: "- Vùng: Miền Trung",
            tinh:"- Tỉnh: Quảng Trị",
            diahinh: "- Địa hình: Di tích lịch sử",
            khihau: "- Khí hậu: Mát mẻ quanh 28-29 độ",
            diadiem: "- Địa điểm: TP. Đông Hà",
            tongquan: "- Hoàng thành Huế hay còn được gọi là Đại Nội, là vòng thành thứ hai bên trong Kinh thành Huế, có chức năng bảo vệ các cung điện quan trọng nhất của triều đình, các miếu thờ tổ tiên nhà Nguyễn và bảo vệ Tử Cấm thành - nơi dành riêng cho vua và hoàng gia. Người ta thường gọi chung Hoàng thành và Tử Cấm thành là Đại Nội.",
        },
        smalltitle: "Khu vực Kinh thành Huế review",
        review1:"Nhắc tới Quảng Trị, chúng ta thường nghĩ rằng đây là vùng đất anh hùng  gắn liền với nhiều nghĩa trang liệt sĩ cũng như thời tiết vô cùng khắc nghiệt vì chịu ảnh hưởng trực tiếp của gió Lào. Chính vì vậy rất ít người lựa chọn nơi đây làm địa điểm du lịch, đặc biệt là trong những tháng mùa hè. Tuy nhiên sau chuyến đi Quảng Trị – Huế 3 ngày 2 đêm với chi phí chỉ 2 triệu đồng (đã bao gồm vé máy bay), Ghiền review nhận thấy rằng những ai đam mê khám phá thiên nhiên, lịch sử, văn hóa và tôn giáo thì nên tìm đến miền đất này một lần trong đời. Nào, hãy cùng mình tìm hiểu một số kinh nghiệm hữu ích cho chuyến đi tới đây nhé.",
        photo1: "https://ghienreview.com/wp-content/uploads/2020/07/Ghien-review-Quang-Tri.jpg",
        review2:"Thành cổ Quảng Trị: Sau khi tham quan xong Đức mẹ La Vang, các bạn nhớ ghé thăm Thành cổ Quảng Trị,  cách Đức mẹ La Vang khoảng 6km. Toàn bộ Thành cổ bây giờ đã được quy hoạch thành một công viên siêu rộng và mát mẻ với nhiều cây cối. Ở giữa của công viên này là Đài tưởng niệm được thiết kế như một nén hương sừng sửng giữa đất trời để tri ân những người đã ngã xuống vì màu cờ dân tộc. Đến Thành cổ vào buổi chiều là thời điểm phù hợp nhất để các bạn có thể cảm nhận được trọn vẹn vẻ đẹp của nơi đây. Đừng quên chụp hình với cổng Thành lúc hoàng hôn các bạn nhé.",
        photo2: "https://lh3.googleusercontent.com/proxy/HLq33ZgK1Fcz7sqgtVwPrXqB43FEHK8nESxZewthCQ-_C2RmF0RbOsdQUdg9tzlAlNoUVup9Fgm_PjI52_elw035y--eRhF0721cbVoG_UngAoeGarREoIomwLWssisR8Tb7SJzvWhNBwxkmwZYL9-za7utbRmWRNuaLOU9zxORWTErz5BtOuAR5ir75pjsqpBACKW3Tg5x4IOa3Ep79IkzaAOez5lX3",
        review3:"Tóm lại, trên đây là một số kinh nghiệm mà Ghiền review muốn chia sẻ với các bạn. Do thời tiết ban ngày ở Quảng Trị rất nóng nên các bạn nhớ chuẩn bị đồ dùng chống nắng đầy đủ nhé. Ngoài ra, nếu như các bạn có nhiều thời gian hơn , các bạn có thể lựa chọn hành trình Huế – Quảng Trị – Quảng Bình để có thêm những trải nghiệm mới mẻ và tuyệt vời hơn.",
    },
    {
        title:"Một vài kinh nghiệm hữu ích khi du lịch tại Ninh Thuận",
        reviewer:"Linh Đan", 
        location:"Khu vực Ninh Thuận",
        text: {
            vung: "- Vùng:Nam Trung Bộ",
            tinh:"- Tỉnh:Ninh Thuận",
            diahinh: "- Địa hình:Đồng Bằng",
            khihau: "- Khí hậu:Nhiệt đới 30-31 độ",
            diadiem: "- Địa điểm: TP.Ninh Thuận",
            tongquan: "- Ninh Thuận là một tỉnh ven biển thuộc vùng Duyên hải Nam Trung Bộ của Việt Nam",
        },
        smalltitle: "Ninh Thuận review",
        review1:"Trong bài review trước, Ghiền review đã giới thiệu cho các bạn về những lý do tại sao nên đi du lịch Ninh Thuận rồi phải không nào? Miền đất đầy nắng và gió nhưng lại ẩn chứa một vẻ đẹp hiếm gặp này chỉ cách Thành phố Hồ Chí Minh hơn 300km nên cực kỳ thuận tiện để các bạn làm một chuyến du lịch từ 2 đến 3 ngày và mang về cho mình vô số hình ảnh đẹp cũng như trải nghiệm thú vị. Ở bài review này, mình sẽ chia sẻ cho các bạn một số kinh nghiệm thú vị để các bạn tự tin hơn khi đến với Ninh Thuận nhé.",
        photo1: "https://ghienreview.com/wp-content/uploads/2020/05/Ghien-review-Ninh-Thuan-KN-02.jpg",
        review2:"Từ Thành phố Hồ Chí Minh, có rất nhiều nhà xe để đưa các bạn đi Ninh Thuận và ngược lại với nhiều khung giờ khác nhau, bao gồm cả sáng chiều tối. Nếu các bạn thích sự riêng tư, sang trọng thì nên lựa chọn loại xe Limousine 22 giường với giá vé thời điểm 2020 khoảng 400k/người. Rẻ hơn một xíu thì các bạn đi xe Limousine 32 giường với giá khoảng 270k/người và thấp nhất là xe giường nằm 44 chỗ với giá vé cỡ 220k/người.",
        photo2: "https://ghienreview.com/wp-content/uploads/2020/05/Ghien-review-Ninh-Thuan-KN-05.jpg",
        review3:"Tóm lại, trên đây là tất tần tật các kinh nghiệm hay ho mà Ghiền review đã tích lũy được trong chuyến đi Ninh Thuận 3 ngày 3 đêm vừa rồi. Hy vọng những chia sẻ này sẽ giúp ích cho các bạn có thể lên kế hoạch cho chuyến đi của mình tốt hơn cũng như mang đến cho các bạn sự hài lòng và nhiều trải nghiệm thú vị khi đến với mảnh đất mang nhiều vẻ đẹp tiềm ẩn này nhé.",
    },
    {
        title:"Chia sẻ lại bài Review phượt SAPA 3 ngày 2 đêm của bạn Ngọc Vũ, một nhà thiết kế thời trang đến từ Sài gòn",
        reviewer:"Nguyễn Hữu Cường", 
        location:"Khu vực Sa Pa",
        text: {
            vung: "- Vùng: Tây Bắc Bộ",
            tinh:"- Tỉnh: Lào Cai",
            diahinh: "- Địa hình: Đồi núi",
            khihau: "- Khí hậu: Ôn đới - nhiệt độ trung binh 15-18 Độ",
            diadiem: "- Địa điểm: Phan Xi Phăng; Bản Cát Cát; Vườn Hoa Hàm Rồng, Thung Lũng Mường Hoa; ...",
            tongquan: "- Sa Pa là một huyện vùng cao của tỉnh Lào Cai, nằm ở phía Tây Bắc của Việt Nam, thị trấn Sa Pa ở độ cao 1.600 mét so với mực nước biển, cách thành phố Lào Cai 38 km và 376 km tính từ Hà Nội. Ngoài con đường chính từ thành phố Lào Cai, để tới SaPa còn một tuyến giao thông khác, quốc lộ 4D nối từ xã Bình Lư, Lai Châu.",
        },
        smalltitle: "Sapa Review",
        review1:"Mùa xê dịch đến rồi, hôm nay Ngọc review chuyến đi phượt Sapa 3N2Đ của Ngọc và cô bạn Nguyễn Thúy thực hiện vào đầu tháng 3 cho các bạn nào muốn đi Sapa mà chưa biết đi đâu nhé. Do 2 đứa đi du lịch sapa tự túc chứ không book tour Sapa nên tự tìm hiểu các địa điểm và khách sạn. May mắn khi tìm hiểu thì được gặp anh Bùi Quyết – admin của Group #Sapa_Tất_Tần_Tật giúp đỡ, hehe.",
        photo1: "https://buiquyet.com/wp-content/uploads/2019/03/Review-phuot-Sapa-21.jpg",
        review2:"Đẹp nhất là khoảng thời gian sau Tết đến hè nhé (Tầm tháng 3 – 11). Các tháng cuối năm thì thường sẽ lạnh và mưa ấy, đôi khi có tuyết nữa. Nếu các bạn chịu lạnh được thì đi, chứ Ngọc thấy đi mùa nắng là được ngắm toàn cảnh rừng núi hùng vĩ mới đã con mắt. Book vé máy bay: Do 2 đứa đi từ Sài Gòn thì canh book vé máy bay giá rẻ. Khứ hồi thì chỉ có ~1tr9 thôi, không bao gồm hành lý nhé nhưng nên mua hành lý chiều về (vì khi đi về lúc nào cũng xách đùm đề quà cáp các thứ). Đó là bay cuối tuần, chứ nếu các bạn sắp xếp đi được trong tuần thì giá rẻ hơn nữa ấy.",
        photo2: "https://buiquyet.com/wp-content/uploads/2019/03/Review-phuot-Sapa-19.jpg",
        review3:"Hành trang manh theo: Giày thể thao: Phượt mà, tuyệt đối không nên mang giày cao gót nhé, nếu có thì bỏ bịch cầm theo để chụp hình thôi, chứ đường đi khó khăn và phải đi bộ nhiều nên đi giày là tiện nhất. Áo khoác: Cho dù là mùa nắng thì vẫn nên mang theo áo khoác nhé, vì trên Sapa rất cao, nên lúc nào thời tiết cũng như “mùa thu/đông Hà Nội”. Kem chống nắng: Cái này cực quan trọng nhé, nếu đi về ko muốn “tha thu” thì phải xài nha. Gì nữa nhỉ, ah, 1 vali quần áo màu mè tắc kè (càng nổi càng tốt), vì giữa 1 khung cảnh nên thơ như thế mà mặc màu đen thì bị chìm mất, thế nên là cứ mặc những cái gì mà có nhiều màu sắc để mà sống ảo nhé, review có tâm chưa        ",
    },
    {
        title:"Review trải nghiệm khám phá Đá voi cha ở Đăk Lăk",
        reviewer:"Vũ Thúy", 
        location:"Khu vực Dak Lak",
        text: {
            vung: "- Vùng: Tây nguyên",
            tinh:"- Tỉnh: Dak Lak",
            diahinh: "- Địa hình: Đồi núi",
            khihau: "- Khí hậu: Mát mẻ 20-25 độ",
            diadiem: "- Địa điểm: Vườn quốc gia Yok Don - Yok Don National Park",
            tongquan: "- Đắk Lắk là một tỉnh có diện tích lớn thứ 4 nằm ở trung tâm vùng Tây Nguyên, miền Trung Việt Nam. Năm 2019, Đắk Lắk là đơn vị hành chính Việt Nam đông thứ 10 về số dân, xếp thứ 22 về Tổng sản phẩm trên địa bàn, xếp thứ 41 về GRDP bình quân đầu người, đứng thứ 37 về tốc độ tăng trưởng GRDP",
        },
        smalltitle: "Dak Lak review",
        review1:"Đi men theo đường chính đi Đá Voi Mẹ thêm 8km nữa, các bạn sẽ đến được Đá Voi Cha. Quãng đường không quá xa này lại mang đến cho mình khá nhiều bất ngờ vì cảnh 2 bên đường thực sự rất rất đẹp với những cánh đồng lúa trải dài bát ngát, đan xen với những rặng muồng hoa vàng thấp thấp, xa xa là những ngọn núi hùng vĩ và hồ Lăk bao la, tất cả hòa quyện với nhau mang đến một khung cảnh rất thơ, rất tình, rất Việt Nam, đến nỗi mà chỉ nhìn hình, bạn không thể biết đây là vùng đất thuộc tỉnh nào đâu nè.",
        photo1: "https://ghienreview.com/wp-content/uploads/2019/08/Ghien-review-Da-voi-cha-cover-1024x683.jpg",
        review2:"Để đi lên được Đá Voi Cha, bạn phải men theo những con đường nhỏ của ruộng lúa. Hãy cố gắng giữ thăng bằng thật tốt để tránh bị ướt giày và quần áo nhé. Đá Voi Cha nhỏ hơn Đá Voi Mẹ rất nhiều nhưng việc leo lên cũng khá khó (đòi hỏi giày bạn đi phải có độ bám dính tốt) và vẻ đẹp khi leo lên được trên đỉnh Đá Voi Cha cũng rất khác so với cảm giác mà Đá Voi Mẹ mang lại. Xung quanh Đá Voi Cha là mênh mông các cánh đồng lúa xanh ngắt, nối dài nhau đến thẳng chân trời, mang đến cho lữ khách nhiều xúc cảm khó tả các bạn ạ.",
        photo2: "https://ghienreview.com/wp-content/uploads/2019/08/Ghien-review-Da-voi-cha-1.jpg",
        review3:"Tóm lại, trải nghiệm chinh phục Đá Voi Cha ở Đăk Lăk cũng mang đến cho Ghiền review nhiều cảm xúc tuyệt vời. Mặc dù không hùng vĩ, hoành tráng như Đá Voi Mẹ nhưng cảnh sắc ở hai bên đường đi và lúc lên đến đỉnh Đá Voi Cha thực sự rất đẹp và xứng đáng với việc lặn lội để đến được đây. Nếu có dịp đến xứ sở cà phê, các bạn đừng quên ghé Đá Voi Cha và Đá Voi Mẹ nhé, đẹp lắm á.",
    },
    {
        title:"Review trải nghiệm Skylight Nha Trang",
        reviewer:"Khoa BUG", 
        location:"Khu vực Nha Trang",
        text: {
            vung: "- Vùng: Miền Nam",
            tinh:"- Tỉnh: Khánh Hòa",
            diahinh: "- Địa hình: Bãi biển",
            khihau: "- Khí hậu: Nắng nóng 37-39 độ",
            diadiem: "- Địa điểm: tòa Skylight Nha Trang",
            tongquan: "- Với độ cao 151m (495ft) cùng nguồn ánh sáng đèn hiệu bao quát toàn bộ bầu trời vịnh Nha Trang, #SkylightLightHouse được xem là một trong những ngọn hải đăng cao nhất thế giới, có thể được nhìn thấy ở bất cứ nơi nào trong thành phố.",
        },
        smalltitle: "Skylight Nha Trang review",
        review1:"Nếu có người hỏi ban đêm thì chơi gì ở Nha Trang, chắc hẳn 50% câu trả lời bạn nhận được sẽ là đến Skylight Nha Trang đó. Vậy Skylight Nha Trang là gì và có gì thú vị? Hãy cùng Ghiền review trải nghiệm nơi đây và tìm hiểu nơi đây có nên đến khi bạn ghé thăm thành phố biển xinh đẹp này không nhé!Không gian trên Skylight cực kỳ rộng nhé các bạn, cứ như một công viên thu nhỏ trên này vậy. Ngoài không gian sân khâu cho DJ chà đĩa và các bạn quẩy tung tóe thì còn có khu vực quầy bar, quán cà phê, cây cối, ghế ngồi rải rác khắp nơi và thậm chí còn có cả hồ bơi nữa. Đặc biệt hơn, ở trên này có một khu được ốp nền bằng kính trong suốt, vì vậy các bạn có thể thấy cả thành phố ngay dưới chân mình và sống ảo với lũ bạn khá hay ho đó.",
        photo1: "https://ghienreview.com/wp-content/uploads/2018/10/Ghien-review-Skylight-Nha-Trang-01.jpg",
        review2:"Về âm nhạc, có lẽ do không gian quá thoáng nên âm thanh không đã lắm, nghe nó cứ nhỏ nhỏ, chưa thể kích động khiến bạn quẩy banh nóc được. Nhạc chơi ở đây cũng không hay lắm, ít dựa trên bài gốc đang hot để remix lại nên khán giả quẩy quẩy vậy chứ vẫn thấy thiếu thiếu chút gì đó cũng như khó lòng hát theo để cùng feel the beat được. Mặc dù không khí nhảy nhộn nhịp với các cây đèn led nhiều màu nhưng âm nhạc và DJ vẫn là thứ mà Skylight cần cải thiện để trải nghiệm của khách tốt hơn.",
        photo2: "https://ghienreview.com/wp-content/uploads/2018/10/Ghien-review-Skylight-06.jpg",
        review3:"Tóm lại, Skylight là một trải nghiệm khá thú vị mà bạn nên thử khi đến với Nha Trang nhưng nếu có người hỏi bạn có quay lại nơi này không thì chắc có lẽ câu trả lời của mình là không. Âm nhạc và không khí của Skylight chưa đủ hấp dẫn và cuốn hút để mình cảm thấy được xả stress thực sự và điều tuyệt vời nhất của nơi đây đọng lại trong mình có lẽ chỉ là khôn gian mà thôi. Lần sau đến với Nha Trang, mình sẽ thử trải nghiệm 1 địa điểm được recommend khá nhiều – đó là Sailing Club. Hãy cùng chờ đón các bạn nhé.",
    },
    {
        title:"Review vẻ đẹp tiềm ẩn của Bảo Lộc",
        reviewer:"Trang David", 
        location:"Khu vực Bảo lộc",
        text: {
            vung: "- Vùng: Tây Nguyên",
            tinh:"- Tỉnh: Lâm Đồng",
            diahinh: "- Địa hình: Cao Nguyên",
            khihau: "- Khí hậu: Nhiệt độ mát mẻ 23-24 độ",
            diadiem: "- Địa điểm: đồi núi",
            mota: "- Bảo Lộc là một thành phố trực thuộc tỉnh Lâm Đồng, vùng Tây Nguyên, Việt Nam. Hiện nay, thành phố Bảo Lộc không phải là tỉnh lỵ của tỉnh Lâm Đồng, mà tỉnh lỵ là thành phố Đà Lạt. Thành phố Bảo Lộc có độ cao trung bình là 900m so với mực nước biển và nằm trọn trên cao nguyên Di Linh",
        },
        smalltitle: "TP. Bảo Lộc review",
        review1:"Từ trước đến nay, nhắc đến Lâm Đồng, người ta hầu như chỉ biết đến Đà Lạt. Phải đến những năm gần đây, khi MV “Lạc trôi” trở thành hiện tượng, Bảo Lộc mới được nhắc tới nhiều hơn qua hình ảnh Cổng Trời (Quán Chiếu đường) của Linh Quy Pháp Ẩn tự. Thế nhưng ít ai biết rằng, ngoài Cổng Trời huyền ảo, Bảo Lộc còn có rất nhiều cảnh quan thơ mộng khác. Hãy cùng Ghiền review điểm đến này để cảm nhận những vẻ đẹp tiềm ẩn và nếu thích thì đừng bỏ qua Bảo Lộc trong lịch trình những chuyến đi sắp tới nhé.",
        photo1: "https://ghienreview.com/wp-content/uploads/2018/09/Ghien-review-Bao-Loc-Cong-troi.jpg",
        review2:"Đến thăm Bảo Lộc vào một buổi chiều những tháng vào thu, bạn sẽ cảm nhận được làn không khí se se mát lạnh của vùng đất này. Bởi vì có sự chênh lệch vài độ so với Đà Lạt, nên cái lạnh ở Bảo Lộc khá vừa phải, đủ xua tan nóng bức ở Sài Thành nhưng lại không khiến bạn phải rùng mình, co ro như vùng đất của những trái dâu tây. Do chưa được phát triển về mặt du lịch như Đà Lạt nên Bảo Lộc hiện chưa có các khu nghỉ dưỡng sang trọng hay các khu du lịch nhân tạo như Ma Rừng Lữ Quán, Làng Cù Lần…Tuy nhiên, các điểm bạn có thể dừng chân ở Bảo Lộc tương đối đa dạng và bạn dễ dàng có 1 chuyến hành trình 3 ngày 2 đêm thoải mái mà không lo hết cảnh đẹp để ngắm.        ",
        photo2: "https://ghienreview.com/wp-content/uploads/2018/09/Ghien-review-Bao-Loc-Cay-co-don.jpg",
        review3:"Như vậy, có thể nhận xét rằng Bảo Lộc không lãng mạn như Đà Lạt cũng không xô bồ như Sài Gòn mà cảm giác Bảo Lộc mang lại đó chính là sự thanh bình. Nếu Đà Lạt như một nàng thơ của ai đó, thì với mình, Bảo Lộc có dáng dấp của một người phụ nữ đẹp từng trải. Cô gái ấy không mang vẻ đẹp u buồn, nhàm chán, mà vẻ đẹp ấy khiến chúng ta ngẩn ngơ suy nghĩ về hình ảnh một ngôi nhà nhỏ trên thảo nguyên xanh, một buổi chiều lộng gió, bạn ngồi nhâm nhi tách trà ấm cùng nàng và chia sẻ những câu chuyện phiếm nhẹ nhàng….Yên bình và mộc mạc sống thôi.",
    },
    {
        title:"Vi vu Miền Tây dịp cuối tuần",
        reviewer:"Linh Thiếu Áo", 
        location:"Khu vực Miền Tây",
        text: {
            vung: "- Vùng: Tây Nam Bộ",
            tinh:"- Tỉnh: Cà Mau",
            diahinh: "- Địa hình: Sông Hồ",
            khihau: "- Khí hậu: Nhiệt độ tầm 35-36 độ",
            diadiem: "- Địa điểm: sông nước Cà Mau",
            mota: "- Chợ nổi Cà Mau là một chợ nổi trên sông Gành Hào, cách cầu Gành Hào khoảng hơn 200 m, thuộc địa bàn phường 8 ở trung tâm thành phố Cà Mau. Ngày trước, chợ ở giữa ngã ba chùa Bà cách đó khoảng hơn chục cây số. Xưa kia, đây là nơi tụ tập kiếm sống của người tứ xứ và bán nhiều loại hàng hóa khác nhau",
        },
        smalltitle: "Miền tây review",
        review1:"Nếu như bạn đang băn khoăn không biết nên xách ba lô lên và đi dâu dịp cuối tuần hoặc bạn đã chán ngán đi với các tỉnh lân cận Sài Gòn thì đừng e dè gì mà hãy đọc từ đầu đến cuối bài viết này để có thêm kinh nghiệm lên kế hoạch cho hành trình cuối tuần đầy thú vị sắp tới của mình nhé. Nào, hãy cùng Ghiền review vi vu Miền Tây nhé.Nhóm của Ghiền review lên kế hoạch đi Cà Mau nhưng chỉ có 2 ngày thứ 7 và chủ nhật để thực hiện điều đó với quãng đường cả đi và về gần 800 km thì quả thực không dễ dàng chút nào. Vì vậy, mình đã lựa chọn hướng đi xe khách xuống Cà Mau vào tối thứ sáu, ăn chơi ở Cà Mau ngày thứ 7 và sáng chủ nhật chạy xe máy (gửi kèm theo xe khách về lại Sài Gòn).",
        photo1: "https://ghienreview.com/wp-content/uploads/2018/05/maxresdefault.jpg",
        review2:"Đây là lần thứ 2 mà Ghiền review đến với mảnh đất Cà Mau. Chuyến đi này cũng khá ngẫu hứng khi một, hai người bạn của Ghiền review chưa đến cực Nam tổ quốc lần nào nên Ghiền đã lên lịch trình như trên để các bạn ấy được dịp sống ảo và mọi người có những trải nghiệm mới. Kinh nghiệm xương máu đầu tiên mà mình học được là việc gửi xe máy ở quầy gửi hàng hóa của Phương Trang. Do vị trí địa lý khá xa nên xe máy không được đưa kèm lên xe khách mà phải đưa qua xe tải chuyên chở và chỉ về đến Thành phố Cà Mau (không đến được điểm xa nhất của nhà xe Phương Trang là Năm Căn đâu nha).",
        photo2: "https://ghienreview.com/wp-content/uploads/2018/05/5-1.jpg",
        review3:"Vì trong nhóm có một bạn ở Đồng Nai, nên nhiệm vụ của tụi mình là phải đưa bạn ấy ra bến xe Bus ở ngã tư Hàng Xanh trước 16h30. Tụi mình đi theo hướng Quốc lộ 22 để về với Sài Gòn và lúc ấy Sài Gòn lại mưa thay phần Cần Thơ tối hôm trước. Một lần nữa nhóm Ghiền review lại chạy trong mưa trắng xóa, sấm chớp đùng đùng và thêm đường ngập tới nửa bánh xe. Cũng may là mưa to thì đỡ kẹt xe nên bạn mình lên xe Bus lúc 16h10 phút và trở về được nhà lúc 18h00 hơn. Các bạn còn lại cũng có mặt ở nhà lúc 16h30, kết thúc một chuyến hành trình vi vu Miền Tây đáng nhớ và đầy mưa gió.",
    },
    {
        title:"Review Du lịch Đảo Nam Du của Bus Tour",
        reviewer:"Nam Hai Ngón", 
        location:"Khu vực đảo Nam Du",
        text: {
            vung: "- Vùng: Nam Trung Bộ",
            tinh:"- Tỉnh: Rạch Giá",
            diahinh: "- Địa hình: Biển đảo",
            khihau: "- Khí hậu: Nhiệt độ tầm 29-30 độ",
            diadiem: "- Địa điểm: Đảo Nam Du",
            mota: "- Quần đảo Nam Du là một quần đảo nằm về phía đông nam đảo Phú Quốc trong vịnh Thái Lan, cách bờ biển Rạch Giá 65 hải lý. Quần đảo nằm dưới sự quản lý của xã An Sơn và xã Nam Du thuộc huyện Kiên Hải, tỉnh Kiên Giang.",
        },
        smalltitle: "Đảo Nam Du review",
        review1:"Nam Du được đánh giá là một thiên đường biển hấp dẫn vào mùa hè mà mọi du khách không thể bỏ qua. Ghiền review cũng vừa mới trải nghiệm quần đảo này do Bus Tour tổ chức và không để mọi người đợi lậu nữa, mình sẽ review Nam Du và Bus Tour để mọi người tham khảo khi có dự định ghé đảo thiên đường này nhé.",
        photo1: "https://ghienreview.com/wp-content/uploads/2018/02/1039140396_12277475_1088105664553606_1373867996_n-1024x768.jpg",
        review2:"Thứ nhất, tàu cao tốc Nam Du được bố trí chỗ ngồi rất trật tự, gọn gàng, không có cảm giác xô bồ từ ngoài cảng hay ở bên trong tàu. Thứ hai, khoảng cách đi lại tầm khoảng 2 tiếng đồng hồ tương đối vừa sức và sẽ không gây mệt mỏi cho hành khách. Thứ 3, do tàu chạy trong vùng biển thuộc Vịnh Thái Lan nên sóng biển tương đối nhẹ, do đó hành khách ít bị say sóng hơn. Thứ 4, nhân viên trên tàu cao tốc đi Nam Du được đào tạo bài bản với đồng phục lịch sự, phân chia nhiệm vụ rõ ràng và thái độ phục vụ tốt, tạo nên sự chuyên nghiệp không thua kém gì các hãng xe lớn như Phương Trang, Thành Bưởi…đảo Nam Du vẫn là một sự lựa chọn cực kỳ hợp lý cho mọi lứa tuổi để đi thưởng thức những bãi biển cát trắng với nước biển xanh ngọc quyến rũ, in bóng những hàng dừa xanh lả lơi khiến bạn như đang lạc vào xứ Hawaii hay Maldives lúc nào mà không hay biết. Nơi đây cũng sẽ mang đến cho bạn cảm giác thỏa mãn cực kỳ cao khi thưởng thức những món hải sản tươi sống và đa dạng bậc nhất. Tuy nhiên, do đã đi rất nhiều đảo đẹp ở Việt Nam nên cảm xúc của Ghiền review với Nam Du không còn Ghiền như lần đầu mới đi các đảo khác nữa. Việc khá ít các địa điểm check in và tình trạng rác rải chưa được xử lý chính là những điểm mà Nam Du cần phải cải thiện để thu hút thêm nhiều khách du lịch trong thời gian tới.",
        photo2: "https://ghienreview.com/wp-content/uploads/2018/03/IMG_1521954692942_1522053522236.jpg",
        review3:"Tóm lại, với ý nghĩa và mức giá tour mà Bus Tour đưa ra cho hành khách thì thực sự đây là một tour cực kỳ đáng đi và trải nghiệm. Tuy nhiên, với cách tổ chức còn mang nhiều tính tự phát, chưa thực sự chuyên nghiệp và chưa được đào tạo bài bản của hướng dẫn viên, Bus Tour cần phải cải thiện nhiều hơn để ngày càng đáp ứng tốt hơn nhu cầu của hành khách. Hi vọng sau nay các chương trình du lịch nói chung và chương trình Nam Du của Bus Tour sẽ được nâng cấp và thú vị hơn.",
    },
]



let templateHTML1 = ``;
for (let i = 0; i < travel.length; i++) {
    templateHTML1 += `<div  class="content-box" id="startLayout 1" onclick="startLayout(${travel[i]})"  >
    <div class="box-img">
        <img src="./image/img-cuong/review_img.png" alt="">
    </div>
    <div class="box-text">
        <h3>Sa Pa</h3>
        <p>Chia sẻ lại bài Review phượt SAPA 3 ngày 2 đêm của bạn Ngọc Vũ</p>
        <div class="box-like">
            <p>Reviewer: Ngọc Vũ</p>
            <div class="box-like-icon">
                <i class="fas fa-heart"> </i> 200
                <i class="far fa-comment-alt"></i> 300
            </div>
        </div>
    </div>
</div>`
};


localStorage.setItem("travel", JSON.stringify(travel));
const upTravel = localStorage.getItem("travel");
const obj = JSON.parse(upTravel);
let templateHTML = ``
for (let i = 0; i < travel.length; i++) {
  templateHTML = `<div class="main" id="vietcon">
  <div class="container">

      
      <div class="container-title">
          <h2>${travel[i].title}</h2>
          <p>${travel[i].reviewer}</p>
      </div>
  
      <div class="row1">
          <div class="slider">
              <div class="slides">
              

              <input type="radio" name="radio-btn" id="radio1">
              <input type="radio" name="radio-btn" id="radio2">
              <input type="radio" name="radio-btn" id="radio3">
              <input type="radio" name="radio-btn" id="radio4">
              
              <div class="slide first">
              <img src="https://dulichsapa.org.vn/wp-content/uploads/Ruong-Bac-Thang-Sapa.jpg" alt="">
              </div>
              <div class="slide">
              <img src="https://tranhtreotuonghanoi.com/wp-content/uploads/2020/06/nhung-buc-tranh-phong-canh-lao-cai-sapa-dep-nhat.jpg" alt="">
              </div>
              <div class="slide">
              <img src="https://didauchoigi.net/wp-content/uploads/2020/10/dinh-o-quy-ho.jpg" alt="">
              </div>
              <div class="slide">
              <img src="https://www.chudu24.com/wp-content/uploads/2017/02/CongTroiThienMon.jpg" alt="">
                  </div>
                  
                  <div class="navigation-auto">
                      <div class="auto-btn1"></div>
                      <div class="auto-btn2"></div>
                      <div class="auto-btn3"></div>
                      <div class="auto-btn4"></div>
                      </div>
                  
              </div>
              
              <div class="navigation-manual">
                  <label for="radio1" class="manual-btn"></label>
                  <label for="radio2" class="manual-btn"></label>
                  <label for="radio3" class="manual-btn"></label>
                  <label for="radio4" class="manual-btn"></label>
              </div>
             
          </div>
          

          <div class="col-1">
          
              <div class="col-1-title">
                  <h1>Khu vực Sa Pa</h2>
              </div>
              <div class="danh_gia">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"> </i>

                  <p> <h5> 4.69/5 trong 360 đánh giá</h5></p> 
                  </div>
              <div class="col-1-comment">
                  <i class="fas fa-eye"> 377</i>
                  <a href="#" class=" nut--yeuthich"><i class="fas fa-heart"> 150</i></a>
                  <a href="#" class="nut--binhluan"><i class="fas fa-comments"> 300</i> </a>
              </div>

              <div class="col-1-content_p">
                  <ul>
                      <li>- Vùng:  Tây Bắc Bộ</li>
                      <li>- TỈnh:  Lào Cai</li>
                      <li>- Địa hình: Đồi núi</li>
                      <li>- Khí hậu: Ôn đới - nhiệt độ trung binh 15-18 Độ </li>
                      <li>- Địa điểm: Phan Xi Phăng; Bản Cát Cát; Vườn Hoa Hàm Rồng, Thung Lũng Mường Hoa; ... </li>
                  </ul>

              </div>
              
              <div class="col-1-content">
                  <h2>Tổng quan:</h2>
                  <p>- Sa Pa là một huyện vùng cao của tỉnh Lào Cai, nằm ở phía Tây Bắc của Việt Nam, thị trấn Sa Pa ở độ cao 1.600 mét so với mực nước biển, cách thành phố Lào Cai 38 km và 376 km tính từ Hà Nội. Ngoài con đường chính từ thành phố Lào Cai, để tới SaPa còn một tuyến giao thông khác, quốc lộ 4D nối từ xã Bình Lư, Lai Châu.</p>
                  
              </div>
              </div>

      </div>
      
      <!-- Review User -->
      <div class="row">
      <div class="left-column">
              <div class="card">
                  
              <h2>Sapa Review</h2>
                  <h5>Ngọc Vũ, Mar 7, 2008</h5>
                  <br>
                  <p> Chuyến đi được thực hiện vào đầu tháng 3/2018,<br>
                  Mùa xê dịch đến rồi, hôm nay Ngọc review chuyến đi phượt Sapa 3N2Đ của Ngọc và cô bạn Nguyễn Thúy thực hiện vào đầu tháng 3 cho các bạn nào muốn đi Sapa mà chưa biết đi đâu nhé.
                  Do 2 đứa đi du lịch sapa tự túc chứ không book tour Sapa nên tự tìm hiểu các địa điểm và khách sạn. May mắn khi tìm hiểu thì được gặp anh Bùi Quyết – admin của Group #Sapa_Tất_Tần_Tật giúp đỡ, hehe.</p>
                  <br>
                  <img src="https://buiquyet.com/wp-content/uploads/2019/03/Review-phuot-Sapa-21.jpg" alt="blog " />
                  <br>
                  <p>Đẹp nhất là khoảng thời gian sau Tết đến hè nhé (Tầm tháng 3 – 11). Các tháng cuối năm thì thường sẽ lạnh và mưa ấy, đôi khi có tuyết nữa. Nếu các bạn chịu lạnh được thì đi, chứ Ngọc thấy đi mùa nắng là được ngắm toàn cảnh rừng núi hùng vĩ mới đã con mắt.
                  Book vé máy bay: Do 2 đứa đi từ Sài Gòn thì canh book vé máy bay giá rẻ. Khứ hồi thì chỉ có ~1tr9 thôi, không bao gồm hành lý nhé nhưng nên mua hành lý chiều về (vì khi đi về lúc nào cũng xách đùm đề quà cáp các thứ). Đó là bay cuối tuần, chứ nếu các bạn sắp xếp đi được trong tuần thì giá rẻ hơn nữa ấy.</p>
                  <br>
                  <img src="https://buiquyet.com/wp-content/uploads/2019/03/Review-phuot-Sapa-19.jpg" alt="blog " />
                  <br>
                  <p>Hành trang mang theo: <br>
                  Giày thể thao: Phượt mà, tuyệt đối không nên mang giày cao gót nhé, nếu có thì bỏ bịch cầm theo để chụp hình thôi, chứ đường đi khó khăn và phải đi bộ nhiều nên đi giày là tiện nhất.
                  Áo khoác: Cho dù là mùa nắng thì vẫn nên mang theo áo khoác nhé, vì trên Sapa rất cao, nên lúc nào thời tiết cũng như “mùa thu/đông Hà Nội”.
                  Kem chống nắng: Cái này cực quan trọng nhé, nếu đi về ko muốn “tha thu” thì phải xài nha.
                  Gì nữa nhỉ, ah, 1 vali quần áo màu mè tắc kè (càng nổi càng tốt), vì giữa 1 khung cảnh nên thơ như thế mà mặc màu đen thì bị chìm mất, thế nên là cứ mặc những cái gì mà có nhiều màu sắc để mà sống ảo nhé, review có tâm chưa </p>
                  <br>
                  <div class="icon_share">
                      <a href="https://www.facebook.com/sharer/sharer.php?u=http://127.0.0.1:5501/vietcon.html" target="_blank" ><div class="icon fb"><i class="fab fa-facebook-f"> Share</i></div></a>
                      <a href="https://twitter.com/share?text=ReviewTravel&url=http://127.0.0.1:5501/vietcon.html" target="_blank" ><div class="icon tw"><i class="fab fa-twitter"> Twitter</i></div></a>
                      <div class="icon heart"><i class="fas fa-heart"> Heart</i></div>
                  </div>
                  </div>
              
          </div>

          <div class="right-column">
              <div class="card">
                  <h2>Khóa học lập trình</h2>
                  <a href="https://mindx.edu.vn/" target="_blank"><img src="https://doanhnghiep.quocgiakhoinghiep.vn/wp-content/uploads/2020/10/1594126158307-1577762085284-1571027713600-logo-techkids-moi-7-1-05.png" alt="me"/></a>
                  <p>Bạn muốn trở thành lập trình viên !!!
                  </p>
                  </div>
              <div class="card">
                  <h3>My video</h3>
                  <iframe width="100%" height="300"
                  src="https://www.youtube.com/embed/tgbNymZ7vqY">
                  </iframe>
                  <br>
                  <br>
                  <h3> Sa Pa:</h3>
                  <br>
                  <img src="http://divui.com/blog/wp-content/uploads/2017/11/kinh-nghiem-du-lich-sapa-1.jpg" alt="popular" />
                  <img src="https://haidanggo.com/wp-content/uploads/2019/08/Sapa7.jpg" alt="popular" />
                  <img src="http://bizweb.dktcdn.net/thumb/grande/100/101/075/articles/tour-du-lich-thai-binh-sapa.jpg?v=1604714426730" alt="popular" />
              </div>
              <div class="card">
              <h3>Follow Me</h3>
                  <p>@copyright</p>
              </div>
              </div>
      </div>

      <!-- comment start -->

      <div class="comment">
          <div class="comment-title">
              <h1> <i class="fas fa-quote-left"></i>  Comment nổi bật</h1>
          </div>
          <div class="comment-hot">
          <div class="user">
                  <img src="./image/anhvietcon/caothaison.jpg"
                  class="img-user" alt="" >
                  <div class="user-icon">
                      &#9733&#9733&#9733&#9733&#9733
                  </div>
                  <h4>Cao Thái Sơn</h4>
                  <p>&#10075 Công nhận là đi du lịch ở đây thích cực kì, nhưng rất tiếc mình chuẩn men, ko nói
                      nhiều </p>
                      </div>
              <div class="user">
                  <img src="./image/anhvietcon/nogctrinh.jpg" class="img-user" >
                  <div class="user-icon">
                      &#9733&#9733&#9733&#9733&#9733
                  </div>
                  <h4>Ngọc Trinh</h4>
                  <p>&#10075 Mấy hôm nữa mình có show chụp ảnh ở đây đi trên rôn roy màu hồng, các bạn thích thì đua xe!</p>
              </div>
              <div class="user">
                  <img src="./image/anhvietcon/unnamed-16216504337271534727568-1625186563783350914602.jpeg"
                      class="img-user" alt="" >
                      <div class="user-icon">
                      &#9733&#9733&#9733&#9733&#9733
                  </div>
                  <h4>Khắc Việt</h4>
                  <p>&#10075 Những chỗ này khung cảnh rất đẹp, mình đã sáng tác ra bài "Như Vậy Nhé" khi đến Sapa</p>
                  </div>
          </div>

          <div class="comment-user">
          
              <hr>
              <h1><i class="fas fa-quote-left"></i> Comment: </h1>
              <div class="comment-fake">
                  <div class="person-1">
                  <div class="img-person"><img src="./image/anhvietcon/lemiho.jpg"></div>
                      
                      <div class="comment-fake-content">
                          <h2>Thái Tuấn Công - 26 tuổi</h2>
                          <span>7 phút trước</span>
                          
                          <p><i class="fas fa-quote-left"></i> Muốn tới Phú Quốc bạn có thể lựa chọn di chuyển bằng nhiều phương tiện khác nhau. Tụi mình chọn di chuyển bằng Máy bay từ Đà Nẵng tới Phú Quốc của hãng Bamboo (Vé 1tr2/khứ hồi/người – tổng 2tr4 tiền vé cho 2ng – đặt trước khoảng 2 tuần)</p>
                      </div>
                  </div>
                  
                  <div class="person-1">
                      <div class="img-person"><img src="https://kenh14cdn.com/2019/5/6/e4-1556804137280996840619-15571599881272003882952.jpg" ></div>
                      <div class="comment-fake-content">
                          <h2>Thái Tuấn Công - 26 tuổi</h2>
                          <span>7 phút trước</span>
                          
                          <p><i class="fas fa-quote-left"></i> Muốn tới Phú Quốc bạn có thể lựa chọn di chuyển bằng nhiều phương tiện khác nhau. Tụi mình chọn di chuyển bằng Máy bay từ Đà Nẵng tới Phú Quốc của hãng Bamboo (Vé 1tr2/khứ hồi/người – tổng 2tr4 tiền vé cho 2ng – đặt trước khoảng 2 tuần)</p>
                      </div>
                      </div>

                  <div class="person-1">
                      <div class="img-person"><img src="https://media-cdn.laodong.vn/storage/newsportal/2021/3/24/892486/Rose-Blackpink-Sinh-.jpg?w=720&crop=auto&scale=both"></div>
                      <div class="comment-fake-content">
                      <h2>Thái Tuấn Công - 26 tuổi</h2>
                          <span>7 phút trước</span>
                          
                          <p><i class="fas fa-quote-left"></i> Muốn tới Phú Quốc bạn có thể lựa chọn di chuyển bằng nhiều phương tiện khác nhau. Tụi mình chọn di chuyển bằng Máy bay từ Đà Nẵng tới Phú Quốc của hãng Bamboo (Vé 1tr2/khứ hồi/người – tổng 2tr4 tiền vé cho 2ng – đặt trước khoảng 2 tuần)</p>
                      </div>
                  </div>

                  <div class="person-1">
                      <div class="img-person"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS9oPFTXFi43AqCikkM9gAsec3UsgXiLpMbQ&usqp=CAU">
                      </div>
                      <div class="comment-fake-content">
                          <h2>Thái Tuấn Công - 26 tuổi</h2>
                          <span>7 phút trước</span>
                          
                          <p><i class="fas fa-quote-left"></i> Muốn tới Phú Quốc bạn có thể lựa chọn di chuyển bằng nhiều phương tiện khác nhau. Tụi mình chọn di chuyển bằng Máy bay từ Đà Nẵng tới Phú Quốc của hãng Bamboo (Vé 1tr2/khứ hồi/người – tổng 2tr4 tiền vé cho 2ng – đặt trước khoảng 2 tuần)</p>
                      </div>
                      </div>

                  <div class="person-1">
                      <div class="img-person"><img src="https://i.pinimg.com/originals/18/60/64/186064435781b1d78013dcb4ba9208a4.jpg"></div>
                      <div class="comment-fake-content">
                      <h2>Thái Tuấn Công - 26 tuổi</h2>
                          <span>7 phút trước</span>
                          
                          <p><i class="fas fa-quote-left"></i> Muốn tới Phú Quốc bạn có thể lựa chọn di chuyển bằng nhiều phương tiện khác nhau. Tụi mình chọn di chuyển bằng Máy bay từ Đà Nẵng tới Phú Quốc của hãng Bamboo (Vé 1tr2/khứ hồi/người – tổng 2tr4 tiền vé cho 2ng – đặt trước khoảng 2 tuần)</p>
                          </div>
                  </div>    
              </div>
              <div class="comment-send">
                  <img src="./image/anhvietcon/lemiho.jpg">
                  <textarea name="" placeholder="Your Message"></textarea>
                  <input type="submit" value="Send">
              </div>
          </div>
          </div>
      <!-- comnent end -->
  </div>
</div>`
};
 let vietcon = document.getElementById("vietcon")
vietcon.innerHTML = templateHTML;




// COMMENT

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