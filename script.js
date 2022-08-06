'use strict';

/* Add Event On Element */
const addEventOnElement = function (elem, type, callback){
    if(elem, length > 1){
        for(let i = 0; i < elem, length; i++){
        elem[i].addEventListener(type, callback);
        }
    }
    else{
        elem.addEventListener(type, callback);
    }
}

/* Navbar Toggle */ 
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function (){
    navbar.classList.toggle("active");
    navToggler.classList.toggle('active');
    document.body.classList.toggle('active')
}

addEventOnElement(navToggler, "click", toggleNavbar);