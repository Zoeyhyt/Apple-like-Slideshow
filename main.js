let totWidth = 0;
let positions = [];

let $slide = $(`#slides .slide`)
let $menus = $(`#menu ul li a`)


$slide.each(function(i){
    positions[i] = totWidth;
    totWidth += $(this).width();
})

$(`#slides`).width(totWidth);

$(`#menu ul li.menuItem:first`).addClass(`act`).siblings().addClass(`inact`);


//点击切换
let $menuItems = $(`li.menuItem`)
let $menuItemsArray = Array.from($menuItems)
for (let i = 0; i < $menuItems.length; i++) {   
       $($menuItems[i]).on('click', function(e) {
        $menuItems.removeClass(`act`).addClass(`inact`);
        $(this).addClass(`act`);
        var pos = $(this).prevAll(`.menuItem`);
        iNow = pos.length
        $('#slides').css({transform: `translateX(`+ (-positions[pos.length]) + 'px)'})
        e.preventDefault();
    })    
}

//点击切换方法2
// goToSlide()

// function goToSlide(){ 
//     $menus.on(`click`, function(e){
//         $menuItems.removeClass(`act`).addClass(`inact`);
//         $(this).parent().addClass(`act`);
//         var pos = $(this).parent().prevAll(`.menuItem`);
//         $(`#slides`).stop().animate({marginLeft:-positions[pos.length]+`px`},450);
//         e.preventDefault();
//     });
// }


//自动轮播
var timer = null; 
var iNow = 0;  
timer = setInterval(function(){  
    iNow++;       
    if(iNow>$menuItems.length-1){ 
        iNow=0;
    }
    $menuItems.eq(iNow).trigger("click"); 
},3000);






