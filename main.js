let hamburger = document.getElementById("hamburger");
// var container = document.getElementById("container");
hamburger.addEventListener("click", open);
function open() {
  navlink.classList.toggle("open");
}

let changeMode = document.getElementById("switch");
let container = document.getElementById("container");

// let navDark = document.getElementById("nav");
changeMode.addEventListener("click", darkMode);
function darkMode() {
  container.classList.toggle("dark");
  nav.classList.toggle("navDark");
}
