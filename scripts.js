$(document).ready(function(){

	var figure = $(".video").hover( hoverVideo, hideVideo );

function hoverVideo(e) {  
    $('video', this).get(0).play(); 
    $(this).children('video').removeClass('hide');
}

function hideVideo(e) {
    $('video', this).get(0).pause(); 
    $(this).children('video').addClass('hide');
}


});