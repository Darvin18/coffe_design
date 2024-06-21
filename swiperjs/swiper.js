const gallary = new Swiper('.gallary', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 50,
    slidesPerView: 3,
    slidesPerGroup: 3,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    pagination: {
        el: '.swiper-pagination',
    },

    breakpoints: {
        1251: {
            spaceBetween: 50,
            slidesPerView: 3,
        },
        951: {
            spaceBetween: 50,
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        0: {
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    },
});

