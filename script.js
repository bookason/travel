$(document).ready( function(){

$('.nav-button').click(function(){

$('.nav-button').toggleClass('change');

});


//Animating navbar on scroll
$(window).scroll(function(){
    let position =$(this).scrollTop();
    if(position >= 300){
        $('.nav-menu').addClass('custom-navbar')
    }
    else{
        $('.nav-menu').removeClass('custom-navbar')
    }
})
});