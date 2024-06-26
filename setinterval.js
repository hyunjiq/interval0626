// let count = 0;
// const navdata = ["네이버","다음","구글","아마존","깃"];

// setInterval(function(){
//     console.log(navdata[count]);
//     count++;
//     count %= navdata.length;
// },500)

//자바스크립트 경로는 css랑 다르므로 연결된 html 기준으로 처리해야 한다
let num = 0;
const bannerData = ["/img2/4.png","/img2/cantata.png","/img2/clftjd.png","/img2/moabi.png","/img2/pokemon.png"]
const bannerWrap = document.querySelector(".bannerwrap");
const bannerImg = document.querySelector("#bannerImg");
const bannerButton = document.querySelector(".bannerwrap button");

function updateBanner() {
    bannerWrap.style.background = `url(${bannerData[num]}) center no-repeat`;
    bannerImg.setAttribute("src", bannerData[num]);
}

function startAutoBanner() {
    return setInterval(function() {
        num = (num + 1) % bannerData.length;
        updateBanner();
    }, 3000);
}

let autoBanner = startAutoBanner();

bannerButton.addEventListener('click', function() {
    clearInterval(autoBanner);
    bannerButton.innerHTML = "PLAY";
});

// 초기 배너 설정
updateBanner();
