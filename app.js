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

const images = ['url("/img/banner-img.png")', 'url("/img/hero-4.png")', 'url("/img/hero-3.png")'];

let currentIndex = 0;
const heroSection = document.querySelector(".hero");
const heroBefore = window.getComputedStyle(heroSection, "::before");
const heroAfter = window.getComputedStyle(heroSection, "::after");

function changeBackground() {
	currentIndex = (currentIndex + 1) % images.length;
	heroSection.style.backgroundImage = images[currentIndex];
}

setInterval(changeBackground, 4000);
