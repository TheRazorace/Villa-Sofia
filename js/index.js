// Header Scroll
let nav = document.querySelector(".navbar");
window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add("header-scrolled");
    } else {
        nav.classList.remove("header-scrolled");
    }
}

// nav hide 
let navBar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a) {
    a.addEventListener("click", function () {
        navCollapse.classList.remove("show");
    })
})

// Swiper Slider
var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    autoplay: {
        delay: 4500,
        disableOnInteraction: false
    },
});

// About Swiper Slider
var abswiper = new Swiper(".aboutSwiper", {
    effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        loop: true,
        slidesPerView: "auto",
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        },
        pagination: {
          el: ".swiper-pagination",
        },
        autoplay: {
            delay: 5700,
            disableOnInteraction: false
        },
      });
