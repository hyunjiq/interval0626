// let count = 0;
// const navdata = ["네이버","다음","구글","아마존","깃"];

// setInterval(function(){
//     console.log(navdata[count]);
//     count++;
//     count %= navdata.length;
// },500)

//자바스크립트 경로는 css랑 다르므로 연결된 html 기준으로 처리해야 한다
let count = 3;
setInterval(function(){
    count++;
    count %= 5;    
    document.querySelector("#bannerImg").setAttribute("src",`/img1/${count}.png`)
    
    
},1000)
