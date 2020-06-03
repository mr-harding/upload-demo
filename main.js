// https://stackoverflow.com/questions/9837676/smooth-auto-scroll-by-using-javascript

var downTime = 5000;
var upTime = downTime / 3;

$(document).ready(function(){
     $('body,html').animate({scrollTop: $(document).height()}, downTime); 
     $('body,html').animate({scrollTop: 0}, upTime); 
});


setInterval(function(){ 
     $('body,html').animate({scrollTop: $(document).height()}, downTime); 
     $('body,html').animate({scrollTop: 0}, upTime); 
}, downTime+1200);