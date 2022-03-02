// header-swiper
var swiper = new Swiper("#buyoutSwiper", {
    fadeEffect: "cards",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev ",
    },
    loop: true,
    speed: 800,
    slidesPerView: 3,
    spaceBetween: 50,
    // Responsive breakpoints
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        // when window width is >= 480px
        420: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        // when window width is >= 640px
        700: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
    },
});