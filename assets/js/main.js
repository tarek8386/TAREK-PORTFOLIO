(function ($) {
  // "use strict";

  $(document).ready(function () {
    // $(window).on("scroll", function () {
    //   $("header").toggleClass("active", $(this).scrollTop() > 10);
    // });

    AOS.init({
      once: true,
    });
    // nice select
    $("select").niceSelect();
  });
})(jQuery);

// for mobile menu
var mobileMenu = document.querySelector(".mobile-menu");
var closeBtn = document.querySelector(".aside-close-btn");
var asideMenu = document.querySelector(".aside-menu-bar")

mobileMenu.addEventListener("click", function () {
  asideMenu.classList.add("show");
});
closeBtn.addEventListener("click", function () {
  asideMenu.classList.remove("show");
});



$('.owl-carousel').owlCarousel({
  items: 3,
  autoplay: true,
  loop: true,
  lazyLoad: true,
  center: true,
  dots: true,
  margin: 20,
  nav: true,
  navText: [
    '<svg fill="#000000" width="50px" height="50px" viewBox="-12 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>angle-left</title><path d="M7.28 23.28c-0.2 0-0.44-0.080-0.6-0.24l-6.44-6.44c-0.32-0.32-0.32-0.84 0-1.2l6.44-6.44c0.32-0.32 0.84-0.32 1.2 0 0.32 0.32 0.32 0.84 0 1.2l-5.8 5.84 5.84 5.84c0.32 0.32 0.32 0.84 0 1.2-0.16 0.16-0.44 0.24-0.64 0.24z"></path></svg>',
    '<svg fill="#000000" width="50px" height="50px" viewBox="-12 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><title>angle-right</title><path d="M0.88 23.28c-0.2 0-0.44-0.080-0.6-0.24-0.32-0.32-0.32-0.84 0-1.2l5.76-5.84-5.8-5.84c-0.32-0.32-0.32-0.84 0-1.2 0.32-0.32 0.84-0.32 1.2 0l6.44 6.44c0.16 0.16 0.24 0.36 0.24 0.6s-0.080 0.44-0.24 0.6l-6.4 6.44c-0.2 0.16-0.4 0.24-0.6 0.24z"></path></svg>',
  ],
  animateIn: "fadeIn",
  animateOut: "fadeOut",
  responsive: {
    0: {
      nav: false,
      items: 1
    },
    600: {
      items: 2
    },
    1000: {
      items: 3
    }
  }
})