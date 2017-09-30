$(function(){
   //鼠标滚动时，给header 添加onScroll 悬浮
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        console.log(scrollTop);
        if (scrollTop > 100) {
            $('.header').addClass('onScroll');
        }else if (scrollTop <= 100) {
            $('.header').removeClass('onScroll');
        }
    });  
})