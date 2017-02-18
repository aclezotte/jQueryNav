$(document).ready(function(){
    
    var $li = $('li');
    var $a = $('a');
    
    $li.hover(function(){
        $(this).fadeTo('fast', 0.25);
    }, function(){
        $(this).fadeTo('fast', 1);
    });
    
    $a.click(function(){
        $(this).toggleClass('backgroundClick');
        $(this).text('Clicked!');
    });
    
});