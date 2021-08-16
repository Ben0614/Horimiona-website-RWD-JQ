// 外面先聲明一個開關 (漢堡選單用)
let menuOpened = false;

$(function () {
    // 上方輪播
    $('.top-big-slick').slick({
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });

    // 下方輪播
    $('.movie-slick').slick({
        dots: true,
        arrows: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });


    // 這個代碼要放下面，否則會報錯
    // 手機的漢堡選單
    $('.hum').click(function () {
        menuOpened = !menuOpened;

        if (menuOpened == true) {
            // 點擊後顯示選單list
            $('.hum-list').stop().fadeIn();
            // 上線位置從40%變成50%
            $('.top-line').stop().css('top', '50%');
            // 下線位置從60%變成50%
            $('.bottom-line').stop().css('top', '50%');
            // body添加overflow hidden，讓滾動條消失，頁面無法移動
            $('body').css('overflow', 'hidden');
        } else {
            // 復原
            $('.hum-list').stop().fadeOut();
            $('.top-line').stop().css('top', '40%');
            $('.bottom-line').stop().css('top', '60%');
            $('body').css('overflow', 'auto');
        }

    })

    // 手機
    // 點擊後讓footer的選單list顯示
    $('.nav').click(function () {
        menuOpened = !menuOpened;

        if (menuOpened == true) {
            $('.nav-list').stop().slideToggle();
        } else {
            $('.nav-list').stop().slideToggle();
        }

    })

    // 桌機
    // 獲取頁面從上往下滾動了多少
    // 如果超過400，就讓logo消失，navbar往上移
    $(window).scroll(function () {
        if ($(document).scrollTop() >= 400) {
            $('header .logo').slideUp(200);
            $('.navbar').css('transform', 'translateY(-70px)');
            $('.navbar').css('transition', '.5s');
        } else {
            $('header .logo').slideDown(200);
            $('.navbar').css('transform', 'translateY(0)');
            $('.navbar').css('transition', '.5s');
        }
    })


    // 獲取區塊與頁面頂部的距離
    let big_slickTop = $('.top-big-slick').offset().top;
    let carouselTop = $('.carousel').offset().top;
    let newsTop = $('.news').offset().top;
    let scheduleTop = $('.schedule').offset().top;
    let anoimTop = $('.anoim').offset().top;
    let fc_newsTop = $('.fc-news').offset().top;
    let movieTop = $('.movie').offset().top;
    let mailTop = $('.mail').offset().top;
    let checkTop = $('.check').offset().top;

    // 如果頁面滾動到該距離，就讓該區塊往上淡入
    // 反之則隱藏
    $(window).scroll(function () {
        // 上方右下角的垂直線，頁面一滾動就淡出
        if ($(document).scrollTop() >= 1) {
            $('.aside-line').fadeOut(.3);
        } else {
            $('.aside-line').fadeIn(.3);
        }

        if ($(document).scrollTop() >= movieTop - 1400) {
            $('.movie').fadeIn(1000);
            $('.movie').css('transform', 'translateY(-70px)');
            $('.movie').css('transition', '1s');
        } else {
            $('.movie').fadeOut(1000);
            $('.movie').css('transform', 'translateY(0)');
            $('.movie').css('transition', '1s');
        }

        if ($(document).scrollTop() >= carouselTop - 700) {
            $('.carousel').fadeIn(1000);
            $('.carousel').css('transform', 'translateY(-70px)');
            $('.carousel').css('transition', '1s');
        } else {
            $('.carousel').fadeOut(1000);
            $('.carousel').css('transform', 'translateY(0)');
            $('.carousel').css('transition', '1s');
        }

        if ($(document).scrollTop() >= big_slickTop - 900) {
            $('.top-big-slick').fadeIn(1000);
            $('.top-big-slick').css('transform', 'translateY(-70px)');
            $('.top-big-slick').css('transition', '1s');
        } else {
            $('.top-big-slick').fadeOut(1000);
            $('.top-big-slick').css('transform', 'translateY(0)');
            $('.top-big-slick').css('transition', '1s');
        }

        if ($(document).scrollTop() >= newsTop - 900) {
            $('.news').fadeIn(1000);
            $('.news').css('transform', 'translateY(-70px)');
            $('.news').css('transition', '1s');
        } else {
            $('.news').fadeOut(1000);
            $('.news').css('transform', 'translateY(0)');
            $('.news').css('transition', '1s');
        }

        if ($(document).scrollTop() >= scheduleTop - 900) {
            $('.schedule').fadeIn(1000);
            $('.schedule').css('transform', 'translateY(-70px)');
            $('.schedule').css('transition', '1s');
        } else {
            $('.schedule').fadeOut(1000);
            $('.schedule').css('transform', 'translateY(0)');
            $('.schedule').css('transition', '1s');
        }

        if ($(document).scrollTop() >= anoimTop - 900) {
            $('.anoim').fadeIn(1000);
            $('.anoim').css('transform', 'translateY(-70px)');
            $('.anoim').css('transition', '1s');
        } else {
            $('.anoim').fadeOut(1000);
            $('.anoim').css('transform', 'translateY(0)');
            $('.anoim').css('transition', '1s');
        }

        if ($(document).scrollTop() >= fc_newsTop - 900) {
            $('.fc-news').fadeIn(1000);
            $('.fc-news').css('transform', 'translateY(-70px)');
            $('.fc-news').css('transition', '1s');
        } else {
            $('.fc-news').fadeOut(1000);
            $('.fc-news').css('transform', 'translateY(0)');
            $('.fc-news').css('transition', '1s');
        }

        if ($(document).scrollTop() >= mailTop - 900) {
            $('.mail').fadeIn(1000);
            $('.mail').css('transform', 'translateY(-70px)');
            $('.mail').css('transition', '1s');
        } else {
            $('.mail').fadeOut(1000);
            $('.mail').css('transform', 'translateY(0)');
            $('.mail').css('transition', '1s');
        }

        if ($(document).scrollTop() >= checkTop - 900) {
            $('.check').fadeIn(1000);
            $('.check').css('transform', 'translateY(-70px)');
            $('.check').css('transition', '1s');
        } else {
            $('.check').fadeOut(1000);
            $('.check').css('transform', 'translateY(0)');
            $('.check').css('transition', '1s');
        }

    })


})
