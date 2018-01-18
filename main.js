$(document).ready(function(){
    var totWidth = 0;
    var positions = [];
    $(`#slides .slide`).each(function(i){
        positions[i] = totWidth;
        totWidth += $(this).width();
    })
    $('#slides').width(totWidth);
    $('#menu ul li a').click(function(e){
        $('li.menuItem').removeClass('act').addClass('inact');
        $(this).parent().addClass('act');

        var pos = $(this).parent().prevAll('.menuItem').length;

        $('#slides').stop().animate({marginLeft:-positions[pos]+'px'},450);

        e.preventDefault();
    });
    $('#menu ul li.menuItem:first').addClass('act').siblings().addClass('inact');
})