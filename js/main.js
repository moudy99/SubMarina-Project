(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Modal Video
  var $videoSrc;
  $(".btn-play").click(function () {
    $videoSrc = $(this).data("src");
    console.log($videoSrc); // Make sure the URL is logged correctly
  });

  $("#videoModal").on("shown.bs.modal", function (e) {
    $("#video").attr(
      "src",
      $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0"
    );
  });
  $("#videoModal").on("hide.bs.modal", function (e) {
    $("#video").attr("src", $videoSrc);
  });

  // Project and Testimonial carousel
  $(".project-carousel, .testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    margin: 25,
    loop: true,
    center: true,
    dots: false,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });
})(jQuery);

// ? Cashing all Images

var Teleferic = [
  "img/Sectores/Teleferic/Al-noor.jpg",
  "img/Sectores/Teleferic/pic-tunektepe-teleferik-antalya-4.jpeg",
  "img/Sectores/Teleferic/Al-Thore.jpg",
  "img/Sectores/Teleferic/Teleferik,_Uludağ.jpg",
  "img/Sectores/Teleferic/Al-noor-2.jpg",
  "img/Sectores/Teleferic/Al-Thore-2.jpg",
];

var AquaPark = [
  // Aqua park
  "img/Sectores/Submarines/sectors-sliders/Luxury-Yacht-2jpg.jpg",
  "img/Sectores/Submarines/sectors-sliders/Luxury-Yacht-video-1.jpg",
  "img/Sectores/Submarines/sectors-sliders/Luxury-Yacht-video-2.jpg",
  "img/Sectores/Submarines/sectors-sliders/conventional%20.jpg",
  "img/Sectores/Submarines/sectors-sliders/conventional-2.jpg",
  "img/Sectores/Submarines/sectors-sliders/conventional-1.jpeg",
  "img/Sectores/Submarines/sectors-sliders/Semi-Submarine-1.jpg",
  "img/Sectores/Submarines/sectors-sliders/Semi-Submarine-2.jpg",
  "img/Sectores/Submarines/sectors-sliders/Semi-Submarine-4.jpg",
  "img/Sectores/Submarines/sectors-sliders/Sub%20Catamaran--1.jpg",
  "img/Sectores/Submarines/sectors-sliders/Sub%20Catamaran--2.jpg",
  "img/Sectores/Submarines/sectors-sliders/sub-Catamaran-3.jpg",
  "img/Sectores/Submarines/sectors-sliders/parasailing-1.jpeg",
  "img/Sectores/Submarines/sectors-sliders/parasailing-2.jpg",
  "img/Sectores/Submarines/sectors-sliders/parasailing-3.jpg",
  "img/Sectores/Submarines/sectors-sliders/parasailing-4.jpg",
  "img/Sectores/Submarines/sectors-sliders/parasailing-5.jpg",
  "img/Sectores/Submarines/sectors-sliders/glass-boat-2jpg.jpg",
  "img/Sectores/Submarines/sectors-sliders/glass-boat-3.jpg",
  "img/Sectores/Submarines/sectors-sliders/glass-boat-4.jpg",
  "img/Sectores/Submarines/sectors-sliders/glass-boat-5.jpg",
];
var Freeis_wheels = [
  "img/Sectores/Freeis-wheels/Ferris-wheels-5.jpg",
  "img/Sectores/Freeis-wheels/Ferris-wheels-1.jpg",
  "img/Sectores/Freeis-wheels/Ferris-wheels-7.jpg",
  "img/Sectores/Freeis-wheels/Ferris-wheels-2.jpg",
  "img/Sectores/Freeis-wheels/Ferris-wheels-3.jpg",
  "img/Sectores/Freeis-wheels/Ferris-wheels-4.jpg",
  "img/Sectores/Freeis-wheels/Ferris-wheels-6.jpg",
];
var skiDome = [
  //skiDome

  "img/Sectores/skiDome/ski-domes-in-Malaysia.jpg",
  "img/Sectores/skiDome/Feasibility Study .png",
  "img/Sectores/skiDome/ice-hotel-1.jpeg",
  "img/Sectores/skiDome/ice-hotel.jpg",
  "img/Sectores/skiDome/ice-hotel-2I.webp",
  "img/Sectores/skiDome/ice-hotel-2.webp",
  "img/Sectores/skiDome/indoor-ski-1.jpg",
  "img/Sectores/skiDome/indoor-ski-2.jpg",
  "img/Sectores/skiDome/indoor-ski-3.jpg",
  "img/Sectores/skiDome/indoor-ski-4.webp",
  "img/Sectores/skiDome/Ice-Cave-2.jpg",
  "img/Sectores/skiDome/Ice-Cave-4.jpg",
  "img/Sectores/skiDome/ice-cave-1.jpg",
];
var Playground = [
  //Playground

  "img/Sectores/Playground/playground-1.jpg",
  "img/Sectores/Playground/playground-2.jpg",
  "img/Sectores/Playground/playground-3.jpg",
  "img/Sectores/Playground/playground-4.jpg",
  "img/Sectores/Playground/playground-5.jpg",
  "img/Sectores/Playground/playground-6.jpg",
  "img/Sectores/Playground/playground-video-1.jpg",
  "img/Sectores/Playground/playground-video-2.jpg",
  "img/Sectores/Playground/playground-video-3.jpg",
  "img/Sectores/Playground/trampoline-6.webp",
  "img/Sectores/Playground/Trampoline-1.jpg",
  "img/Sectores/Playground/trampoline-5.jpeg",
  "img/Sectores/Playground/trampoline-3.jpg",
  "img/Sectores/Playground/trampoline-4.jpg",
  "img/Sectores/Playground/Theme-Park.-.jpg",
  "img/Sectores/Playground/Theme-Park.-1.jpg",
  "img/Sectores/Playground/Theme-Park.-2.jpg",
  "img/Sectores/Playground/Theme-Park.-3.jpg",
  "img/Sectores/Playground/Theme-Park.-4.jpg",
  "img/Sectores/Playground/Theme-Park.-5.jpg",
  "img/Sectores/Playground/edutainment-1.jpg",
  "img/Sectores/Playground/edutainment-2.jpg",
  "img/Sectores/Playground/edutainment-3.webp",
];
var safari_zoo = [
  //Safari Zoo
  "img/Sectores/safari-zoo/icons/wild-animals.png",
  "img/Sectores/safari-zoo/icons/horse.png",
  "img/Sectores/safari-zoo/icons/dolphin.png",
  "img/Sectores/safari-zoo/icons/parrot.png",
  "img/Sectores/safari-zoo/icons/cowboy-hat.png",
  "img/Sectores/safari-zoo/icons/elephant.png",
  "img/Sectores/safari-zoo/sectors-sliders/safari-Zoo1.jpg",
  "img/Sectores/safari-zoo/sectors-sliders/Safari-zoo3.jpg",
  "img/Sectores/safari-zoo/sectors-sliders/Safari-zoo2.jpg",
  "img/Sectores/safari-zoo/sectors-sliders/safari-zoo-video-cover-1.jpg",
  "img/Sectores/safari-zoo/sectors-sliders/safari-zoo-video-cover-2.jpg",
  "img/Sectores/safari-zoo/sectors-sliders/safari-zoo-video-cover-3.jpg",
  "img/Sectores/safari-zoo/sectors-sliders/safari-zoo-video-cover-5.jpeg",
  "img/Sectores/safari-zoo/sectors-sliders/safari-zoo-video-cover-6.jpg",
  "img/Sectores/safari-zoo/sectors-sliders/safari-zoo-video-cover-7.jpg",
  "img/Sectores/safari-zoo/sectors-sliders/safari-zoo-video-cover-9.jpg",
  "img/Sectores/safari-zoo/sectors-sliders/safari-zoo-video-cover-4.jpg",
];
var SubMarines = [
  "img/Sectores/Submarines/sectors-sliders/Luxury-Yacht-2jpg.jpg",
  "img/Sectores/Submarines/sectors-sliders/Luxury-Yacht-video-1.jpg",
  "img/Sectores/Submarines/sectors-sliders/Luxury-Yacht-video-2.jpg",
  "img/Sectores/Submarines/sectors-sliders/conventional .jpg",
  "img/Sectores/Submarines/sectors-sliders/conventional-2.jpg",
  "img/Sectores/Submarines/sectors-sliders/conventional-1.jpeg",
  "img/Sectores/Submarines/sectors-sliders/Semi-Submarine-1.jpg",
  "img/Sectores/Submarines/sectors-sliders/Semi-Submarine-2.jpg",
  "img/Sectores/Submarines/sectors-sliders/Semi-Submarine-4.jpg",
  "img/Sectores/Submarines/sectors-sliders/Sub Catamaran--1.jpg",
  "img/Sectores/Submarines/sectors-sliders/Sub Catamaran--2.jpg",
  "img/Sectores/Submarines/sectors-sliders/sub-Catamaran-3.jpg",
  "img/Sectores/Submarines/sectors-sliders/parasailing-1.jpeg",
  "img/Sectores/Submarines/sectors-sliders/parasailing-2.jpg",
  "img/Sectores/Submarines/sectors-sliders/parasailing-3.jpg",
  "img/Sectores/Submarines/sectors-sliders/parasailing-4.jpg",
  "img/Sectores/Submarines/sectors-sliders/parasailing-5.jpg",
  "img/Sectores/Submarines/sectors-sliders/glass-boat-2jpg.jpg",
  "img/Sectores/Submarines/sectors-sliders/glass-boat-3.jpg",
  "img/Sectores/Submarines/sectors-sliders/glass-boat-4.jpg",
  "img/Sectores/Submarines/sectors-sliders/glass-boat-5.jpg",
];

var imageUrlsByPage = {
  // "/index.html": Teleferic,
  "/Indoor_ski_dome.html": skiDome,
  "/Submarines.html": SubMarines,
  "/Playground.html": Playground,
  "/Teleferik.html": Teleferic,
  "/safari_zoo.html": safari_zoo,
  "/Aqua_park.html": AquaPark,
  "/Ferris_wheels.html": Freeis_wheels,
};

function preloadImagesForCurrentPage() {
  var currentPage = window.location.pathname;
  var currentPageImages = imageUrlsByPage[currentPage];
  if (currentPageImages) {
    currentPageImages.forEach(function (url) {
      var img = new Image();
      img.src = url;
      img.onload = function () {
        var cachedImg = new Image();
        cachedImg.src = url;
        if (!cachedImg.complete) {
          console.log("Image loaded from server:", url);
        }
      };
      img.onerror = function () {
        console.error("Failed to load image:", url);
      };

      // Add caching headers to force caching
      img.crossOrigin = "anonymous";
      img.setAttribute("referrerpolicy", "no-referrer");
      img.setAttribute("loading", "lazy");
    });
  }
}

window.onload = preloadImagesForCurrentPage;

function toggleArticle() {
  const shortArticle = document.querySelector(".article-short");
  const fullArticle = document.querySelector(".article-full");

  shortArticle.classList.toggle("d-none");
  fullArticle.classList.toggle("d-none");
}

var locationLink = document.querySelectorAll("#locationLink");

locationLink.forEach((link) => {
  link.addEventListener("click", function () {
    window.open(
      "https://maps.google.com/maps/place//data=!4m2!3m1!1s0x15c21b761d70f68f:0xfc500d90562b4a60?entry=s&sa=X&ved=1t:8290&hl=en-sa&ictx=111"
    );
  });
});
