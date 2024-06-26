// let count = 0;
// const navdata = ["네이버","다음","구글","아마존","깃"];

// setInterval(function(){
//     console.log(navdata[count]);
//     count++;
//     count %= navdata.length;
// },500)

//자바스크립트 경로는 css랑 다르므로 연결된 html 기준으로 처리해야 한다
let count = 3;
const _banner = ["/img2/4.png","/img2/cantata.png","/img2/clftjd.png","/img2/moabi.png","/img2/pokemon.png"]

document.querySelector("#bannerImg").setAttribute("src",`${_banner[count]}`)

document.querySelector(".bannerwrap").style.background = `url(${_banner[count]}) center no-repeat`

const autoBanner = setInterval(function(){

    count++;
    count %= _banner.length;    
    document.querySelector("#bannerImg").setAttribute("src",`${_banner[count]}`)
    document.querySelector(".bannerwrap").style.background = `url(${_banner[count]}) center no-repeat`
    
},1000)



document.querySelector(".bannerwrap button").addEventListener("click", function(){
    
    if(clearInterval(autoBanner)){
        this.innerHTML = "STOP"        
    }else{
        this.innerHTML = "PLAY"
    }

})