const menu = document.querySelector("#mobile-menu");

const menuLinks = document.querySelector(".navbar_menu");

const navLogo = document.querySelector("#navbar_logo");

const body = document.querySelector("body");

const mobileMenu = () => {
   menu.classList.toggle("is-active");
   menuLinks.classList.toggle("active");
   body.toggle.style.overflow = "hidden";  
};

menu.addEventListener("click", mobileMenu);

