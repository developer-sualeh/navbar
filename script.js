const hamburgerEl = document.querySelector(".hamburger");
const navMenuEl = document.querySelector(".nav__menu");
const servicedropdownItemEl = document.getElementById("service");
const servicedropDownMenuEl = document.getElementById("dropdown__menu");
const aboutDropdownItemEl = document.getElementById("about");
const aboutDropdownMenuEl = document.getElementById("about-dropdown");
const reportDropdownSubItem = document.getElementById("report");
const reportDropdownSubMenu = document.getElementById("dropdown-sub__menu");
const faEL = document.getElementById("arrow");
const faELUp = document.getElementById("up-arrow");
const minusEl = document.getElementById("minus");
const plusEl = document.getElementById("plus");

hamburgerEl.addEventListener("click", () => {
  navMenuEl.classList.toggle("active");
  hamburgerEl.classList.toggle("active");
});

servicedropdownItemEl.addEventListener("click", () => {
  servicedropDownMenuEl.classList.toggle("show");
  faEL.classList.toggle("animation");
});
aboutDropdownItemEl.addEventListener("click", () => {
  aboutDropdownMenuEl.classList.toggle("show");
  faELUp.classList.toggle("animation");
});
reportDropdownSubItem.addEventListener("click", () => {
  reportDropdownSubMenu.classList.toggle("show");
});
