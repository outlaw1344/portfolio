const lightmode = document.getElementById("lightmode");
const isih1 = document.getElementById("isi-h1");
const isip = document.getElementById("isi-p");
const icon = document.getElementById("icon");
const button = document.getElementById("button-white");
const navlinks = document.querySelectorAll(".nav-link");

lightmode.addEventListener("click", function () {
  document.body.classList.toggle("dark-body");
  isih1.classList.toggle("dark-color");
  isip.classList.toggle("dark-color");
  button.classList.toggle("dark-bg");
  icon.classList.toggle("dark-color");
  icon.classList.toggle("muter");

  navlinks.forEach(link => {
    if (document.body.classList.contains("dark-body")) {
      link.style.color = "#ffffff"; // Warna putih saat mode gelap
    } else {
      link.style.color = "#1f2937"; // Warna asli saat mode terang
    }
  });
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

document.addEventListener("scroll", function () {
    let scrollPosition = window.scrollY;
    let navbarTrigger = window.innerHeight * 0.5;
    let imagesTrigger = window.innerHeight * 0.1;
    
    let images = document.querySelectorAll(".eclipse, .asset1, .asset2, .asset3 , .image1");
    let navbar = document.querySelector(".navbar");
    
    let navbarStyles = {
        transition: "transform 0.5s ease-out, opacity 0.5s ease-out",
        hidden: {
            transform: "translateY(-50px)",
            opacity: "0"
        },
        visible: {
            transform: "translateY(0)",
            opacity: "1"
        }
    };
    
    if (scrollPosition > imagesTrigger) {
        images.forEach(img => {
            img.style.transition = "transform 0.5s ease-out, opacity 0.5s ease-out";
            img.style.transform = "translateY(-50px)";
            img.style.opacity = "0";
        });
    } else {
        images.forEach(img => {
            img.style.transform = "translateY(0)";
            img.style.opacity = "1";
        });
    }
    
    if (scrollPosition > navbarTrigger) {
        if (navbar) {
            navbar.style.transition = navbarStyles.transition;
            navbar.style.transform = navbarStyles.hidden.transform;
            navbar.style.opacity = navbarStyles.hidden.opacity;
        }
    } else {
        if (navbar) {
            navbar.style.transform = navbarStyles.visible.transform;
            navbar.style.opacity = navbarStyles.visible.opacity;
        }
    }
});

