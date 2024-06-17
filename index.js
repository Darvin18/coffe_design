const gallary = new Swiper('.gallary', {
    direction: 'horizontal',
    loop: true,
    spaceBetween: 20,
    slidesPerView: 3,

    navigation: {
        nextEl: '.btn-next',
        prevEl: '.btn-prev',
    },

    breakpoints: {
        1251: {
            spaceBetween: 20,
            slidesPerView: 3,
        },
        951: {
            spaceBetween: 20,
            slidesPerView: 2,
        },
        0: {
            spaceBetween: 0,
            slidesPerView: 1,
        },
    },
});