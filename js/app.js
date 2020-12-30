const hamburgerMenu = document.querySelector(".hamburger__icon");
const nav = document.querySelector("#nav");
//hamburger Menu
hamburgerMenu.addEventListener("click", () => {
  nav.classList.toggle("toggle__collapse");
});
