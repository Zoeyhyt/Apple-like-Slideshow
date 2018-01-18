let totWidth = 0;
let positions = [];

let $slide = $(`#slides .slide`)
let $menus = $(`#menu ul li a`)


$slide.each(function(i){
    positions[i] = totWidth;
    totWidth += $(this).width();
})

$(`#slides`).width(totWidth);

goToSlide()

function goToSlide(){ 
    $menus.on(`click`, function(e){
    $(`li.menuItem`).removeClass(`act`).addClass(`inact`);
    $(this).parent().addClass(`act`);
    var pos = $(this).parent().prevAll(`.menuItem`);
    $(`#slides`).stop().animate({marginLeft:-positions[pos.length]+`px`},450);
    e.preventDefault();
    });
    $(`#menu ul li.menuItem:first`).addClass(`act`).siblings().addClass(`inact`);
}



