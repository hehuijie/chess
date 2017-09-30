$(function() {
    //动态设置banner尺寸
    var bannerOut = $('.banner-out').width();
    $('.banner-inner').width(bannerOut);
    $('.banner-inner ul li').width(bannerOut);
    // console.log($('.banner-inner ul li').width()+"==="+$('.banner-inner ul li img').width());
    //banner自动轮播
    $('#myCarousel').carousel({
        interval: 2000,
    });
    
});