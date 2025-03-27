const lightmode = document.getElementById("lightmode");
const icon = document.getElementById("icon");

// Set default theme to light
document.addEventListener("DOMContentLoaded", function() {
  const html = document.documentElement;
  const icon = document.getElementById("icon");
  
  // Check localStorage for saved preference or default to light
  const savedTheme = localStorage.getItem("theme") || "light";
  html.setAttribute("data-theme", savedTheme);
  
  // Set appropriate icon and color
  if (savedTheme === "light") {
    icon.classList.replace("bi-moon", "bi-brightness-high");
    icon.style.color = "#1f2937";
  } else {
    icon.classList.replace("bi-brightness-high", "bi-moon");
    icon.style.color = "#ffffff";
  }
});


lightmode.addEventListener("click", function() {
  const html = document.documentElement;
  const isDark = html.getAttribute("data-theme") === "dark";
  
  // Toggle theme
  html.setAttribute("data-theme", isDark ? "light" : "dark");
  
  // Rotate icon
  icon.classList.toggle("muter");
  
  // Change icon based on theme
  if (isDark) {
    icon.classList.replace("bi-moon", "bi-brightness-high");
    icon.style.color = "#1f2937"; // Warna gelap untuk light mode
  } else {
    icon.classList.replace("bi-brightness-high", "bi-moon");
    icon.style.color = "#ffffff"; // Warna terang untuk dark mode
  }
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

