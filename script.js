"use strict";

/* Add Event On Element */
const addEventOnElem = function (elem, type, callback) {
	if (elem.length > 1) {
		for (let i = 0; i < elem.length; i++) {
			elem[i].addEventListener(type, callback);
		}
	} else {
		elem.addEventListener(type, callback);
	}
};

/* Navbar Toggle */
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
	navbar.classList.toggle("active");
	navToggler.classList.toggle("active");
	document.body.classList.toggle("active");
};

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
	navbar.classList.remove("active");
	navToggler.classList.remove("active");
	document.body.classList.remove("active");
};

addEventOnElem(navbarLinks, "click", closeNavbar);

/* Header Active*/

const header = document.querySelector("[data-header]");

const activeHeader = function () {
	if (window.scrollY > 300) {
		header.classList.add("[active]");
	} else {
		header.classList.remove("active");
	}
};

addEventOnElem(window, "scroll", activeHeader);
