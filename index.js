const contentLetterSrart_actived = "Hi! Chỉ là vài lời chúc nho nhỏ~Click vào hộp quà ~ ~" //Lời mở đầu cho bức thư
var mainContentLetter = "Mong rằng tuổi mới sẽ đầy hạnh phúc, thành công và niềm vui. >" +
"Tuổi mới hy vọng bạn sẽ gặp được nhiều người mới đối xử tốt với bản thân bạn. Không cần gì quá nổi bật, chỉ cần họ tôn trọng bạn là được. >" +
"Mong bạn luôn vui vẻ, mọi vấn đề đều xem là nhẹ và luôn giải quyết được tất cả. >" +
"Mọi giấc ngủ đều là giấc ngủ ngon, không muộn phiền và những giấc mơ sẽ chữa lành mọi phiền não, nổi đau của bạn. >" +
"Mỗi năm qua đi, bạn càng trở nên xinh đẹp và mạnh mẽ hơn. Hãy tiếp tục là phiên bản tốt đẹp nhất của chính mình! >" +
"Hãy để những ngày tươi đẹp đánh dấu cuộc hành trình tiếp theo của bạn. Hãy biến mỗi khoảnh khắc thành một kỷ niệm đáng nhớ. >" +
"Chúc mỗi ngày đều có ý nghĩa để khi nhìn lại bạn không phải hối tiếc bất kỳ điều gì. ~"

// EASTER EGG : đây có thể là vài câu tui muốn nhắn gởi tới bạn ...

// Tui không quan tâm kết quả có tốt đẹp hay không nhưng trong khoảng thời gian đó tui đã phải đổi tiếng thông báo messenger riêng với bạn.

// If I could give you one thing in this life, I would give you the ability to see yourself through my eyes. Only then, would you realize how special you are to me.

// Tui biết là bạn rất giỏi, đủ tự lập và mạnh mẽ để không cần dựa dẫm vào ai nhưng mà tui chỉ muốn bạn biết thêm là hễ có chuyện gì xảy ra thì có tui got your back
// Love you.

// Gắn 1 đường link ảnh bất kì
let imgStart = document.querySelector(".myAI"); //Hình ảnh xuất hiện trong lời mở đầu của bức thư
imgStart.src = "./img/Subject.png";

// Gắn 1 link ảnh bất kì
let imgLetter = document.querySelector(".img");
imgLetter.src = "./img/zzz1.jpg"; //Hình ảnh xuất hiện trong nội dung của bức thư sau khi bức thư được viết ra hết

const splitContentLetterSrart_actived = contentLetterSrart_actived.split("");

document.querySelector(".sticker").addEventListener("click", function () { //Hiệu ứng gõ chữ cho phần mở đầu của bức thư
    document.querySelector(".contentLetter").innerHTML = "";
    document.querySelector(".startLetter").classList.add("active")
    setTimeout(() => {
        splitContentLetterSrart_actived.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".contentLetter").innerHTML += val;
                if (index == contentLetterSrart_actived.length - 1) {
                    setTimeout(() => {
                        document.querySelector(".recieve").setAttribute("style", "opacity: 1; transition: .5s") 
                    }, 1000)
                }
            }, 50 * index)
        })
    }, 1000)
})

document.querySelector("#mess").addEventListener("change", function () { //Hiệu ứng gõ chữ cho phần nội dung của bức thư
    if (this.checked == true) {
        document.querySelector(".content").classList.add("actived")
        var splitMainContentLetter = mainContentLetter.split("");
        for (let i = 0; i<splitMainContentLetter.length; i++){
            if (splitMainContentLetter[i] == '>'){
                splitMainContentLetter[i] = "<br>";
            }
        }

        splitMainContentLetter.forEach((val, index) => {
            setTimeout(() => {
                document.querySelector(".mainContent").innerHTML += val;
                if (index == mainContentLetter.length - 1) {
                    document.querySelector(".img1").setAttribute("style", "opacity: 1; transition: .5s")
                }
            }, 50 * index)
        })

    } else {
        document.querySelector(".content").classList.remove("actived")
        document.querySelector(".img1").setAttribute("style", "opacity: 0; transition: .5s")
        document.querySelector(".mainContent").innerHTML = "";
    }
})

document.querySelector(".recieve").addEventListener("click", () => {
    document.querySelector(".startLetter").classList.add("close");
    setTimeout(() => {
        document.querySelector(".startForm").classList.add("close");
        setTimeout(() => {
            document.querySelector(".startForm").setAttribute("style", "bottom: 100%");
            
            let getTypeDevice = document.documentElement.clientWidth;
            if (getTypeDevice <= 768) {
                createLight(20)
            } else {
                createLight(40)
            }

        }, 500)
    }, 500)
})

// Animation Drop light _ Tạo hiệu ứng kim tuyến rơi
//Bạn có thể thiết kế lại để trông chân thật hơn nhé, thiết kế của mình hơi bị cứng và thiếu sự tự nhiên
const getBackground = document.querySelector(".backgroundParty");
var width = getBackground.offsetWidth;
var height = getBackground.offsetHeight;

function createLight(a) {
    var container = document.querySelector(".backgroundParty");
    const blurLv = [2, 4];
    const count = a;
    const allDefaultColor = ["red", "lime", "yellow", "orange", "blue", "pink", "DarkViolet	", "Aqua"]

    for (var i = 0; i < count; i++) {
        var randomLeft = 0;
        randomLeft = Math.floor(Math.random() * width);
        var randomTop = 0;
        randomTop = Math.floor(Math.random() * height / 2);
        var color = "white";
        var blur = Math.floor(Math.random() * 2);
        var widthEle = Math.floor(Math.random() * 8) + 15;
        var moveTime = Math.floor(Math.random() * 5) + 4;

        var div = document.createElement("div");
        div.classList.add = "snow";
        div.style.position = "absolute";
        div.style.backgroundColor = allDefaultColor[Math.floor(Math.random() * 8)]
        div.style.borderRadius = Math.floor(Math.random() * 10 + 10).toString() + "px"

        div.style.height = "0px";
        div.style.width = "0px";

        div.style.height = widthEle * Math.floor(Math.random() * 4 + 1) + "px";
        div.style.width = widthEle + "px";
        div.style.marginLeft = randomLeft + "px"
        div.style.marginTop = randomTop + "px"
        div.style.filter = "blur(" + blurLv[blur] + "px" + ")"
        div.style.animation = "moveLight " + moveTime + "s ease-in-out infinite";

        container.appendChild(div);
    }
}
