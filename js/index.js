const btnNew = document.getElementById("button-new");
const btnPopular = document.getElementById("button-popular");
const btnVideos = document.getElementById("button-videos");

const moreNew = document.getElementById("more-new");
const morePopular = document.getElementById("more-popular");
const moreVideos = document.getElementById("more-videos");

const navbarToggler = document.getElementById("navbar-search__toggle");
const navbar = document.getElementById("navbar-nav");
const headerTop = document.getElementById("header-top");

const sticker__content = document.querySelector(".sticker__content");
const body = document.getElementById("body");

const backToTop = document.getElementById("back-to-top");

$(document).ready(function () {
  btnNew.onclick = function () {
    moreNew.style.display = "block";
    moreNew.style.paddingTop = 0;
    btnNew.style.display = "none";
  };

  btnPopular.onclick = function () {
    morePopular.style.display = "block";
    morePopular.style.paddingTop = 0;
    btnPopular.style.display = "none";
  };

  btnVideos.onclick = function () {
    moreVideos.style.display = "block";
    moreVideos.style.paddingTop = 0;
    btnVideos.style.display = "none";
  };

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

  navbarToggler.addEventListener("click", () => {
    navbar.classList.toggle("navbar-nav--vertical");
    body.classList.toggle("overflow-y");
    headerTop.classList.toggle("header-top--hide");
  });

  backToTop.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
    });
  });
});
