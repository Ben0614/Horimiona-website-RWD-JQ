// 開關 (漢堡選單用)
let menuOpened = false;
// 開關 (footer+-用)
let supperMenuOpened = false;

const preloader = document.querySelector('#preloader')
const portrait_big_pic = document.querySelector('.portrait-pic.big')
const portrait_small_pic = document.querySelector('.portrait-pic.small')
// 頁面加載中
setTimeout(function () {
    preloader.style.top = '-100%'

}, 1500)

// 讓圖片opacity從0-1
// 第一個1.5是動畫完成時間
// 第二個1.5是動畫開始時間(delay) 與頁面加載時間相同
portrait_big_pic.style.animation = 'change-o 1.5s 1.5s linear forwards';
portrait_small_pic.style.animation = 'change-o 1.5s 1.5s linear forwards';

const hum = document.querySelector('.hum')
const hum_list = document.querySelector('.hum-list')
const top_line = document.querySelector('.top-line')
const bottom_line = document.querySelector('.bottom-line')
// 手機的漢堡選單
hum.addEventListener('click', () => {
    menuOpened = !menuOpened;
    if (menuOpened) {
        hum_list.style.opacity = 1
        hum_list.style.zIndex = 20
        top_line.style.top = '50%'
        bottom_line.style.top = '50%'
        document.querySelector('body').style.overflow = 'hidden'
    } else {
        hum_list.style.opacity = 0
        hum_list.style.zIndex = -1
        top_line.style.top = '40%'
        bottom_line.style.top = '60%'
        document.body.style.overflow = 'auto'
    }

})

const nav = document.querySelector('.nav')
const nav_list = document.querySelector('.nav-list')
const nav_more = document.querySelector('.nav .more')

// 手機
// 點擊後讓footer的選單list顯示
// 讓more裡面的+和-切換
nav.addEventListener('click', () => {
    supperMenuOpened = !supperMenuOpened;
    if (supperMenuOpened) {
        nav_list.style.height = nav_list.scrollHeight + 'px'
        nav_more.innerHTML = '-'
    } else {
        nav_list.style.height = 0
        nav_more.innerHTML = '+'
    }
})

const logo = document.querySelector('header .logo')
const navbar = document.querySelector('.navbar')
const aside_line = document.querySelector('.aside-line')
const up_area = document.querySelectorAll('.up-area')

logo.style.height = logo.scrollHeight + 'px'

// 桌機
// 獲取頁面從上往下滾動了多少
// 如果超過400，就讓logo消失，navbar往上移
window.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop >= 400) {
        logo.style.height = 0
        navbar.style.transform = 'translateY(-70px)'
        navbar.style.fontSize = '14px'
        navbar.style.transition = '.3s'
    } else {
        logo.style.height = logo.scrollHeight + 'px'
        navbar.style.transform = 'translateY(0)'
        navbar.style.fontSize = '16px'
        navbar.style.transition = '.3s'
    }

    // 上方右下角的垂直線，頁面一滾動就淡出
    if (document.documentElement.scrollTop >= 1) {
        aside_line.style.display = 'none';
    } else {
        aside_line.style.display = 'block';
    }

    // 為每個區塊添加class="up-area" 
    // 添加時要注意 不要命名成已經有的class
    // 然後迴圈這些區塊
    up_area.forEach((item)=>{
        if((document.documentElement.scrollTop + window.innerHeight) >= item.offsetTop){
            item.style.opacity = 1
            item.style.transform = 'translateY(-70px)'
            item.style.transition = '1s'
        }else{
            item.style.opacity = 0
            item.style.transform = 'translateY(0)'
            item.style.transition = '1s'
        }
    })

})

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

    // 頁面加載中
    // $('#preloader').delay(1500).slideUp(1000);

    // 讓圖片opacity從0-1
    // 第一個1.5是動畫完成時間
    // 第二個1.5是動畫開始時間(delay) 與頁面加載時間相同
    // $('.portrait-pic').css('animation', 'change-o 1.5s 1.5s linear')


    // 手機的漢堡選單
    // $('.hum').click(function () {
    // menuOpened = !menuOpened;

    // if (menuOpened == true) {
    // 點擊後顯示選單list
    // $('.hum-list').stop().fadeIn();
    // 上線位置從40%變成50%
    // $('.top-line').stop().css('top', '50%');
    // 下線位置從60%變成50%
    // $('.bottom-line').stop().css('top', '50%');
    // body添加overflow hidden，讓滾動條消失，頁面無法移動
    //     $('body').css('overflow', 'hidden');
    // } else {
    // 復原
    //         $('.hum-list').stop().fadeOut();
    //         $('.top-line').stop().css('top', '40%');
    //         $('.bottom-line').stop().css('top', '60%');
    //         $('body').css('overflow', 'auto');
    //     }

    // })

    // 手機
    // 點擊後讓footer的選單list顯示
    // 讓more裡面的+和-切換
    // $('.nav').click(function () {
    //     menuOpened = !menuOpened;

    //     if (menuOpened == true) {
    //         $('.nav-list').stop().slideToggle();
    //         $('.nav .more').html('-');
    //     } else {
    //         $('.nav-list').stop().slideToggle();
    //         $('.nav .more').html('+');
    //     }

    // })

    // 桌機
    // 獲取頁面從上往下滾動了多少
    // 如果超過400，就讓logo消失，navbar往上移
    // $(window).scroll(function () {
    //     if ($(document).scrollTop() >= 400) {
    //         $('header .logo').slideUp(200);
    //         // 設置多個css ({})
    //         $('.navbar').css({
    //             'transform': 'translateY(-70px)',
    //             'font-size': '14px'
    //         });
    //         $('.navbar').css('transition', '.5s');
    //     } else {
    //         $('header .logo').slideDown(200);
    //         $('.navbar').css({
    //             'transform': 'translateY(0)',
    //             'font-size': '16px'
    //         });
    //         $('.navbar').css('transition', '.5s');
    //     }
    // })


    // 如果頁面滾動到該區塊的上方，就讓該區塊往上淡入
    // 反之則淡出
    // $(document).scrollTop() 頁面被捲去部分的高度
    // $(window).height() 頁面可視區域的高度
    // $(window).scroll(function () {
        // 上方右下角的垂直線，頁面一滾動就淡出
        // if ($(document).scrollTop() >= 1) {
        //     $('.aside-line').fadeOut(100);
        // } else {
        //     $('.aside-line').fadeIn(100);
        // }


        // 為每個區塊添加class="up-area" 
        // 添加時要注意 不要命名成已經有的class
        // 然後迴圈這些區塊
        // $('.up-area').each(function () {
        //     // 頁面被捲去部分的高度 + 頁面可視區域的高度>=該區塊距離頁面頂端的高度
        //     if ($(document).scrollTop() + $(window).height() >= $(this).offset().top) {
        //         $(this).fadeIn(1000);
        //         $(this).css('transform', 'translateY(-70px)');
        //         $(this).css('transition', '1s');
        //     } else {
        //         $(this).fadeOut(1000);
        //         $(this).css('transform', 'translateY(0)');
        //         $(this).css('transition', '1s');
        //     }

        // })

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

    // })


})