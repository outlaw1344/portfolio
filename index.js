// NIGHT AAND LIGHT MODE
const lightmode = document.getElementById("lightmode");
const isi = document.getElementById("isi");
const isih1 = document.getElementById("isi-h1");
const isip = document.getElementById("isi-p");
const icon = document.getElementById("icon");
const navlink = document.getElementById("link");
const button = document.getElementById("button-white");
const body = document.body;

lightmode.addEventListener("click", function () {
  document.body.classList.toggle("dark-body");
  isih1.classList.toggle("dark-color");
  navlink.classList.toggle("dark-color");
  isip.classList.toggle("dark-color");
  button.classList.toggle("dark-bg");
  icon.classList.toggle("dark-color");
  icon.classList.toggle("muter");
});


// TYPING EFFECT
document.addEventListener("DOMContentLoaded", function () {
  new TypeIt(".frontend-text", {
    speed: 150,
    strings: [
      'Front End <br> <span class="frontendtext2">Web Developer</span>',
    ],
    loop: true,
  })
    .pause(500)
    .delete(99)
    .type('UI/UX <br> <span class="frontendtext2">Designer</span>')
    .go();
});

// const text = document.getElementById("nav-link");
// text.addEventListener("click", function () {
//   text.classList.add("underline");
// });
// window.onbeforeunload = function () {
//   text.classList.remove("underline");
// };