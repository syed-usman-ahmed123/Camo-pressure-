console.log("ready")

// ---------------------------------------------TESTIMONIAL SLIDER-------------------------------------//

document.addEventListener("DOMContentLoaded", function () {

    let testimonailSlider = new Swiper(".testimonailSlider", {
        slidesPerView: 'auto',
        spaceBetween: 20,
        initialSlide: 3.5,
        centeredSlides: false,
        autoplay: true,
        loop: true,
        pagination: {
            el: ".testimonial-pagination",
            dynamicBullets: true,
        },
        // grabCursor: true,
        breakpoints: {
            0: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 2.5, spaceBetween: 20 },
            1300: { slidesPerView: 2.4, spaceBetween: 20 }
        }

    });
});



// -------------------------------------------------OUR VALUES SLIDER-----------------------------
document.addEventListener("DOMContentLoaded", function () {
let valuesSlider = new Swiper(".valuesSlider",
    {
        slidesPerView: 'auto',
        spaceBetween: 20,
        initialSlide: 3,
        // centeredSlides: false,
        // autoplay: true,
        loop: true,
       
        // grabCursor: true,
        breakpoints: {
            0: { slidesPerView: 1, spaceBetween: 16 },
            768: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 2.5, spaceBetween: 20 },
            1300: { slidesPerView: 4, spaceBetween: 20 }
        }

    });
    });