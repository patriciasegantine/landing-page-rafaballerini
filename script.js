const menuBurger = document.querySelector(".menu-burger");
const navLinks = document.querySelector(".nav-links");

function activeMenuBurguer() {
 navLinks.classList.toggle("nav-active")
}

menuBurger.addEventListener("click", activeMenuBurguer)
