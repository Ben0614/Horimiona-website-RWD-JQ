// 外面先聲明一個開關 (漢堡選單用)
let menuOpened = false;

$(function () {
    // 頁面加載中
    $('#preloader').delay(1500).slideUp(1000);

    // 讓圖片opacity從0-1
    // 第一個1.5是動畫完成時間
    // 第二個1.5是動畫開始時間(delay) 與頁面加載時間相同
    $('.portrait-pic').css('animation', 'change-o 1.5s 1.5s linear')


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
    // 讓more裡面的+和-切換
    $('.nav').click(function () {
        menuOpened = !menuOpened;

        if (menuOpened == true) {
            $('.nav-list').stop().slideToggle();
            $('.nav .more').html('-');
        } else {
            $('.nav-list').stop().slideToggle();
            $('.nav .more').html('+');
        }

    })

    // 桌機
    // 獲取頁面從上往下滾動了多少
    // 如果超過400，就讓logo消失，navbar往上移
    $(window).scroll(function () {
        if ($(document).scrollTop() >= 400) {
            $('header .logo').slideUp(200);
            // 設置多個css ({})
            $('.navbar').css({
                'transform': 'translateY(-70px)',
                'font-size': '14px'
            });
            $('.navbar').css('transition', '.5s');
        } else {
            $('header .logo').slideDown(200);
            $('.navbar').css({
                'transform': 'translateY(0)',
                'font-size': '16px'
            });
            $('.navbar').css('transition', '.5s');
        }
    })


    // 如果頁面滾動到該區塊的上方，就讓該區塊往上淡入
    // 反之則淡出
    // $(document).scrollTop() 頁面被捲去部分的高度
    // $(window).height() 頁面可視區域的高度
    $(window).scroll(function () {
        // 上方右下角的垂直線，頁面一滾動就淡出
        if ($(document).scrollTop() >= 1) {
            $('.aside-line').fadeOut(100);
        } else {
            $('.aside-line').fadeIn(100);
        }


        // 為每個區塊添加class="up-area" 
        // 添加時要注意 不要命名成已經有的class
        // 然後迴圈這些區塊
        $('.up-area').each(function () {
            // 頁面被捲去部分的高度 + 頁面可視區域的高度>=該區塊距離頁面頂端的高度
            if ($(document).scrollTop() + $(window).height() >= $(this).offset().top) {
                $(this).fadeIn(1000);
                $(this).css('transform', 'translateY(-70px)');
                $(this).css('transition', '1s');
            } else {
                $(this).fadeOut(1000);
                $(this).css('transform', 'translateY(0)');
                $(this).css('transition', '1s');
            }

        })

        // 有添加up-area的區塊
        // top - big - slick
        // carousel
        // news
        // schedule
        // anoim
        // fc-news
        // movie
        // mail
        // check



        // 複雜的寫法

        // 獲取區塊與頁面頂部的距離
        // let top_big_slickTop = $('.top-big-slick').offset().top;
        // let carouselTop = $('.carousel').offset().top;
        // let newsTop = $('.news').offset().top;
        // let scheduleTop = $('.schedule').offset().top;
        // let anoimTop = $('.anoim').offset().top;
        // let fc_newsTop = $('.fc-news').offset().top;
        // let movieTop = $('.movie').offset().top;
        // let mailTop = $('.mail').offset().top;
        // let checkTop = $('.check').offset().top;

        // if ($(document).scrollTop() + $(window).height() >= carouselTop) {
        //     $('.carousel').fadeIn(1000);
        //     $('.carousel').css('transform', 'translateY(-70px)');
        //     $('.carousel').css('transition', '1s');
        // } else {
        //     $('.carousel').fadeOut(1000);
        //     $('.carousel').css('transform', 'translateY(0)');
        //     $('.carousel').css('transition', '1s');
        // }

        // if ($(document).scrollTop() + $(window).height() >= top_big_slickTop) {
        //     $('.top-big-slick').fadeIn(1000);
        //     $('.top-big-slick').css('transform', 'translateY(-70px)');
        //     $('.top-big-slick').css('transition', '1s');
        // } else {
        //     $('.top-big-slick').fadeOut(1000);
        //     $('.top-big-slick').css('transform', 'translateY(0)');
        //     $('.top-big-slick').css('transition', '1s');
        // }

        // if ($(document).scrollTop() + $(window).height() >= newsTop) {
        //     $('.news').fadeIn(1000);
        //     $('.news').css('transform', 'translateY(-70px)');
        //     $('.news').css('transition', '1s');
        // } else {
        //     $('.news').fadeOut(1000);
        //     $('.news').css('transform', 'translateY(0)');
        //     $('.news').css('transition', '1s');
        // }

        // if ($(document).scrollTop() + $(window).height() >= scheduleTop) {
        //     $('.schedule').fadeIn(1000);
        //     $('.schedule').css('transform', 'translateY(-70px)');
        //     $('.schedule').css('transition', '1s');
        // } else {
        //     $('.schedule').fadeOut(1000);
        //     $('.schedule').css('transform', 'translateY(0)');
        //     $('.schedule').css('transition', '1s');
        // }

        // if ($(document).scrollTop() + $(window).height() >= anoimTop) {
        //     $('.anoim').fadeIn(1000);
        //     $('.anoim').css('transform', 'translateY(-70px)');
        //     $('.anoim').css('transition', '1s');
        // } else {
        //     $('.anoim').fadeOut(1000);
        //     $('.anoim').css('transform', 'translateY(0)');
        //     $('.anoim').css('transition', '1s');
        // }

        // if ($(document).scrollTop() + $(window).height() >= fc_newsTop) {
        //     $('.fc-news').fadeIn(1000);
        //     $('.fc-news').css('transform', 'translateY(-70px)');
        //     $('.fc-news').css('transition', '1s');
        // } else {
        //     $('.fc-news').fadeOut(1000);
        //     $('.fc-news').css('transform', 'translateY(0)');
        //     $('.fc-news').css('transition', '1s');
        // }

        // if ($(document).scrollTop() + $(window).height() >= movieTop) {
        //     $('.movie').fadeIn(1000);
        //     $('.movie').css('transform', 'translateY(-70px)');
        //     $('.movie').css('transition', '1s');
        // } else {
        //     $('.movie').fadeOut(1000);
        //     $('.movie').css('transform', 'translateY(0)');
        //     $('.movie').css('transition', '1s');
        // }

        // if ($(document).scrollTop() + $(window).height() >= mailTop) {
        //     $('.mail').fadeIn(1000);
        //     $('.mail').css('transform', 'translateY(-70px)');
        //     $('.mail').css('transition', '1s');
        // } else {
        //     $('.mail').fadeOut(1000);
        //     $('.mail').css('transform', 'translateY(0)');
        //     $('.mail').css('transition', '1s');
        // }

        // if ($(document).scrollTop() + $(window).height() >= checkTop) {
        //     $('.check').fadeIn(1000);
        //     $('.check').css('transform', 'translateY(-70px)');
        //     $('.check').css('transition', '1s');
        // } else {
        //     $('.check').fadeOut(1000);
        //     $('.check').css('transform', 'translateY(0)');
        //     $('.check').css('transition', '1s');
        // }

    })


})