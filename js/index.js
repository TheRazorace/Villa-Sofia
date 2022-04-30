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

let room_item = document.querySelector(".room-item");

let a1 = document.querySelector("#a1");
let a2 = document.querySelector("#a2");
let a3 = document.querySelector("#a3");
let a4 = document.querySelector("#a4");

let a1c = document.querySelector("#a1c");
let a2c = document.querySelector("#a2c");
let a3c = document.querySelector("#a3c");
let a4c = document.querySelector("#a4c");

let a1_content = document.querySelector("#a1-content");
let a2_content = document.querySelector("#a2-content");
let a3_content = document.querySelector("#a3-content");
let a4_content = document.querySelector("#a4-content");

function a1_click() {
    a1.classList.add("is-active");
    a2.classList.remove("is-active");
    a3.classList.remove("is-active");
    a4.classList.remove("is-active");

    a1c.style.display = "none";
    a2c.style.display = "block";
    a3c.style.display = "block";
    a4c.style.display = "block";

    a1_content.style.display = "block";
    a2_content.style.display = "none";
    a3_content.style.display = "none";
    a4_content.style.display = "none";
}

function a2_click() {
    a2.classList.add("is-active");
    a1.classList.remove("is-active");
    a3.classList.remove("is-active");
    a4.classList.remove("is-active");
    a2c.style.display = "none";
    a1c.style.display = "block";
    a3c.style.display = "block";
    a4c.style.display = "block";

    a2_content.style.display = "block";
    a1_content.style.display = "none";
    a3_content.style.display = "none";
    a4_content.style.display = "none";
}

function a3_click() {
    a3.classList.add("is-active");
    a2.classList.remove("is-active");
    a1.classList.remove("is-active");
    a4.classList.remove("is-active");
    a3c.style.display = "none";
    a2c.style.display = "block";
    a1c.style.display = "block";
    a4c.style.display = "block";

    a3_content.style.display = "block";
    a1_content.style.display = "none";
    a2_content.style.display = "none";
    a4_content.style.display = "none";
}

function a4_click() {
    a4.classList.add("is-active");
    a2.classList.remove("is-active");
    a3.classList.remove("is-active");
    a1.classList.remove("is-active");
    a4c.style.display = "none";
    a2c.style.display = "block";
    a3c.style.display = "block";
    a1c.style.display = "block";

    a4_content.style.display = "block";
    a1_content.style.display = "none";
    a2_content.style.display = "none";
    a3_content.style.display = "none";
}

function initMap() {
    // The location of Uluru
    const uluru = { lat: 39.28262919, lng: 20.43616732 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 17,
      center: uluru,
      mapTypeId: 'satellite',
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;