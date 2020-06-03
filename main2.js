$(document).ready(function(){
    var numItems = $('.notice').length;
    console.log(numItems);
    var i;
    var x = 0;
    setInterval(scrolling, 2000, numItems);
    
    
});

function scrolling(divItems){
        for (i = 1; i < divItems; i++) {
            $('html,body').animate({scrollTop: $("#"+i).offset().top}, 1000);        
        }
        
        $('html,body').animate({scrollTop: 0}, 1000);              
    
}

