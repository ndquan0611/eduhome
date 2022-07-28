'use strict';

// element toggle func
const toggleElem = function (e) {
    e.classList.toggle('active');
};

const navbar = document.querySelector('[data-navbar]');
const navToggler = document.querySelectorAll('[data-nav-toggler]');
const overlay = document.querySelector('[data-overlay]');

// C1
// for (let i = 0; i < navToggler.length; i++) {
//     navToggler[i].addEventListener('click', function () {
//         toggleElem(navbar);
//         toggleElem(overlay);
//     });
// }

// C2
navToggler.forEach((nav) => {
    nav.addEventListener('click', function () {
        toggleElem(navbar);
        toggleElem(overlay);
    });
});

// C3
// for (let i = 0; i < navToggler.length; i++) {
//     const MenuCloseFunc = function () {
//         navbar.classList.remove('active');
//         overlay.classList.remove('active');
//     };

//     navToggler[i].addEventListener('click', function () {
//         navbar.classList.add('active');
//         overlay.classList.add('active');
//     });

//     navbar.addEventListener('click', MenuCloseFunc);
//     overlay.addEventListener('click', MenuCloseFunc);
// }

// header sticky & back to top
const header = document.querySelector('[data-header]');
const backTopBtn = document.querySelector('[data-back-top-btn]');

window.addEventListener('scroll', function () {
    if (window.scrollY >= 100) {
        header.classList.add('active');
        backTopBtn.classList.add('active');
        header.classList.add('header-anim');
    } else {
        header.classList.remove('active');
        backTopBtn.classList.remove('active');
        header.classList.remove('header-anim');
    }
});

// search box
const searchTogglers = document.querySelectorAll('[data-search-toggler]');
const searchBox = document.querySelector('[data-search-box]');

searchTogglers.forEach((search) => {
    search.addEventListener('click', function () {
        toggleElem(searchBox);
    });
});

// whishlist button toggle
const whishlistBtns = document.querySelectorAll('[data-whish-btn]');

whishlistBtns.forEach((whish) => {
    whish.addEventListener('click', function () {
        toggleElem(this);
    });
});
