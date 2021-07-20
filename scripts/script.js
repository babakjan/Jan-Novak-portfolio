/**
 * show and hide hamberger button
 * when menu open switch hamburger button to close button
 */
const hamburgerBtn = document.getElementById("hamburger-btn");
const menuUl = document.querySelector(".navbar ul");
const navbar = document.querySelector(".navbar");
const navbarLogoHome = document.getElementById("logo-home");
hamburgerBtn.addEventListener("click", openMenu);

//open and close menu - navigation
function openMenu() {
	menuUl.classList.toggle("hide-menu");
	navbar.classList.toggle("hide-navbar");
	hamburgerBtn.classList.toggle("button-close-image");
	navbarLogoHome.classList.toggle("hide-logo-home");
}

// hide menu when user click on contact
const contactLinkInnavbar = document.getElementById("contact-in-nav");
if (contactLinkInnavbar) {
	contactLinkInnavbar.addEventListener("click", closeMenu);
}

//close navigation
function closeMenu() {
	menuUl.classList.add("hide-menu");
	navbar.classList.add("hide-navbar");
	hamburgerBtn.classList.remove("button-close-image");
}

/**
 * show and hide scroll up button on scrolling
 * scroll up, when button is clicked
 */
const scrollUpBtn = document.querySelector(".scroll-up-btn");
//scroll up, when user click on scroll up button
scrollUpBtn.addEventListener("click", function scrollUp() {
	window.scrollTo(0, 0);
});

//show scroll up button, when user scroll down more than 500
document.addEventListener("scroll", function () {
	if (window.scrollY > 500) {
		scrollUpBtn.classList.add("show-scroll-up-btn");
	} else {
		scrollUpBtn.classList.remove("show-scroll-up-btn");
	}
});
