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

// Timeline
(function () {
  // Sélection des li de la class timeline
  let items = document.querySelectorAll(".timeline li");

  // On vérifie si un élément est dans la fenêtre de visualisation

  function isElementInViewport(el) {
    let rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  //On écoute les différents évènements
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();
