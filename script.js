
// navbar section 

const menuBtn = document.getElementById("nav-btn");
const navLinks = document.getElementById("nav-menu");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute(
    "class",
    isOpen ? "ri-close-line" : "ri-menu-3-line"
  );
});
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

//  header continer 

const ScrollRevealOptions = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
}
ScrollReveal().reveal(".header-content h1", {
  ...ScrollRevealOptions
})
ScrollReveal().reveal(".header-btn", {
  ...ScrollRevealOptions,
  delay: 300,
})

// service container 
ScrollReveal().reveal(".service-card", {
  ...ScrollRevealOptions,
  interval: 500,
});

ScrollReveal().reveal(".price-card", {
  ...ScrollRevealOptions,
  interval: 500,
});
ScrollReveal().reveal(".footer-socials", {
  ...ScrollRevealOptions,
  interval: 500,
});


// swiper 

const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el:".swiper-pagination"
  },
});