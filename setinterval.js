let count = 0;
const navdata = ["네이버","다음","구글","아마존","깃"];

setInterval(function(){
    
    console.log(navdata[count]);
    count++;
    count %= navdata.length; //count = count % 10;
}, 500)