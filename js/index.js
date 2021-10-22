//Button show more product
const btnNew = document.getElementById("button-new");
const btnPopular = document.getElementById("button-popular");
const btnVideos = document.getElementById("button-videos");

//Product hide
const moreNew = document.getElementById("more-new");
const morePopular = document.getElementById("more-popular");
const moreVideos = document.getElementById("more-videos");

//Header & navigation
const navbarToggler = document.getElementById("navbar-search__toggle");
const navbar = document.getElementById("navbar-nav");
const headerTop = document.getElementById("header-top");

//Body element
const body = document.getElementById("body");

//Scroll back to top
const backToTop = document.getElementById("back-to-top");

$(document).ready(function () {
  //Handle show more new
  btnNew.onclick = function () {
    moreNew.style.display = "block";
    moreNew.style.paddingTop = 0;
    btnNew.style.display = "none";
  };

  //Handle show more popular
  btnPopular.onclick = function () {
    morePopular.style.display = "block";
    morePopular.style.paddingTop = 0;
    btnPopular.style.display = "none";
  };

  //Handle show more videos
  btnVideos.onclick = function () {
    moreVideos.style.display = "block";
    moreVideos.style.paddingTop = 0;
    btnVideos.style.display = "none";
  };

  //Handle show/hide header when scroll
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    if (currentScrollPos > 120) {
      document.getElementById("header-1").style.transform =
        "translateY(-120px)";
    }

    if (currentScrollPos === 0) {
      document.getElementById("header-1").style.transform = "translateY(0px)";
    }
  };

  //Handle show/hide navigation
  navbarToggler.addEventListener("click", () => {
    navbar.classList.toggle("navbar-nav--vertical");
    body.classList.toggle("overflow-y");
    headerTop.classList.toggle("header-top--hide");
  });

  //Handle back to top
  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
    });
  });
});
