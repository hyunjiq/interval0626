let count = 0;
const navdata = ["네이버","다음","구글","아마존","깃"];

setInterval(function(){
    
    console.log(count);
    count++;
    count %= 10; //count = count % 10;
}, 500)