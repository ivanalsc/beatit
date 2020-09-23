const menuBtn = document.querySelector(".menu-btn");
const menuMobile = document.querySelector(".menu-mobile");

let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuMobile.classList.add("open");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    menuMobile.classList.remove("open");
    menuOpen = false;
  }
});


window.sr = ScrollReveal();

sr.reveal('.border-left', {
    duration: 4000,
    origin: 'left',
    distance: '-400px'
});

sr.reveal('.border-right', {
    duration: 4000,
    origin: 'right',
    distance: '-400px'
});


  
