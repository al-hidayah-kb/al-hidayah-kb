var hamburger = document.querySelector(".hamburger");
var sidebar = document.querySelector(".sidebar");
var close = document.querySelector(".close");
var bahasa = document.querySelector(".bahasa");

var listBahasa = document.querySelector(".list-bahasa");
hamburger.addEventListener("click", () => {
 sidebar.classList.toggle("active");
});

close.addEventListener("click", () => {
 sidebar.classList.toggle("active");
});

bahasa.addEventListener("click", () => {
 listBahasa.classList.toggle("hidden");
});

//navbar scroll
window.onscroll = function () {
 const header = document.querySelector("header");
 const fixNav = header.offsetTop;

 if (window.pageYOffset > fixNav) {
  header.classList.add("header-blur");
 } else {
  header.classList.remove("header-blur");
 }
};
