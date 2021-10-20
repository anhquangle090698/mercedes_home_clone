"use strict";

var btnNew = document.getElementById("button-new");
var btnPopular = document.getElementById("button-popular");
var btnVideos = document.getElementById("button-videos");
var moreNew = document.getElementById("more-new");
var morePopular = document.getElementById("more-popular");
var moreVideos = document.getElementById("more-videos");
var navbarToggler = document.getElementById("navbar-search__toggle");
var navbar = document.getElementById("navbar-nav");
var headerTop = document.getElementById("header-top");
var sticker__content = document.querySelector(".sticker__content");
var body = document.getElementById("body");
var backToTop = document.getElementById("back-to-top");
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
    var currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 120) {
      document.getElementById("header-1").style.transform = "translateY(-120px)";
    }

    if (currentScrollPos === 0) {
      document.getElementById("header-1").style.transform = "translateY(0px)";
    }
  };

  navbarToggler.addEventListener("click", function () {
    navbar.classList.toggle("navbar-nav--vertical");
    body.classList.toggle("overflow-y");
    headerTop.classList.toggle("header-top--hide");
  });
  backToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0
    });
  });
});