/*************** Navbar ***************/

document.addEventListener("DOMContentLoaded", function () {
    // Get all "navbar-burger" elements.
    var navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);

    // Check if there are any navbar burgers.
    if (navbarBurgers.length > 0) {
        // Add a click event on each of them.
        navbarBurgers.forEach(function (el) {
            el.addEventListener("click", function () {
                // Get the target from the "data-target" attribute.
                var target = el.dataset.target;
                var target = document.getElementById(target);

                // Toggle the class on both the "navbar-burger" and the "navbar-menu".
                el.classList.toggle("is-active");
                target.classList.toggle("is-active");
            });
        });
    }
});

const navbarMenu = document.getElementsByClassName("navbar-menu")[0];
const navbarBurger = document.getElementsByClassName("navbar-burger")[0];
const navbarEnd = document.getElementsByClassName("navbar-end")[0];

navbarEnd.addEventListener("click", function () {
    if (navbarBurger.classList.contains("is-active") && navbarMenu.classList.contains("is-active")) {
        navbarMenu.classList.toggle("is-active");
        navbarBurger.classList.toggle("is-active");
    }
});

/*************** Dark Mode ***************/

const btnTheme = document.querySelector("#btnTheme");
const heroes = document.querySelectorAll(".hero");
const navbar = document.querySelector("#home .navbar");
const homeSub = document.querySelector(".subtitle-animation");
const btnResume = document.querySelector("#home .button");
const cards = document.querySelectorAll("#portfolio .card");
const timelineLines = document.querySelectorAll("#experience hr");
const formLabels = document.querySelectorAll("#contact form label");
const formInputs = document.querySelectorAll("#contact .input");
const formTextarea = document.querySelector("#contact .textarea");
const formIcons = document.querySelectorAll("#contact .control.has-icons-left .icon");
const formSubmit = document.querySelector("#contact .button");
const footer = document.querySelector(".footer");
const footerLine = document.querySelector(".footer hr");
const footerBulma = document.querySelector(".footer .bulmaImg");

btnTheme.addEventListener("change", () => {
    navbar.classList.toggle("is-dark");
    navbar.classList.toggle("is-light");
    btnResume.classList.toggle("is-dark");
    btnResume.classList.toggle("is-light");
    for (const hero of heroes) {
        hero.classList.toggle("is-dark");
        hero.classList.toggle("is-light");
    }
    homeSub.classList.toggle("dark");
    homeSub.classList.toggle("light");
    for (const card of cards) {
        card.classList.toggle("has-background-grey-dark");
        card.classList.toggle("has-text-white");
        card.classList.toggle("has-background-white");
    }
    for (const line of timelineLines) {
        line.classList.toggle("has-background-dark");
    }
    for (const label of formLabels) {
        label.classList.toggle("has-text-white");
    }
    for (const input of formInputs) {
        input.classList.toggle("has-background-dark");
        input.classList.toggle("has-text-white");
    }
    formTextarea.classList.toggle("has-background-dark");
    formTextarea.classList.toggle("has-text-white");
    for (const icon of formIcons) {
        icon.classList.toggle("has-text-white");
    }
    formSubmit.classList.toggle("dark");
    formSubmit.classList.toggle("light");
    formSubmit.classList.toggle("has-text-white");
    footer.classList.toggle("has-text-white");
    footer.classList.toggle("has-background-grey-lighter");
    footerLine.classList.toggle("has-background-grey");
    if (btnTheme.checked) {
        footerBulma.src = "https://bulma.io/images/made-with-bulma.png";
    } else {
        footerBulma.src = "https://bulma.io/images/made-with-bulma--dark.png";
    }
});

/*************** Home ***************/

const btnScrollTop = document.getElementById("btnScrollTop");

function btnScrollEvent() {
    if (window.scrollY >= 600) {
        btnScrollTop.classList.add("btn-show");
    } else {
        btnScrollTop.classList.remove("btn-show");
    }
}

window.addEventListener("load", btnScrollEvent);
window.addEventListener("scroll", btnScrollEvent);

/*************** Type Writter ***************/

const homeSubtitle = document.querySelector(".subtitle-animation");

let homeWriter = new Typewriter(homeSubtitle, {
    cursor: "_",
});
homeWriter.pauseFor(600).changeDelay(70).typeString("<b>System</b> <i>Administrator</i>").start();

/*************** Scroll Animations ***************/

AOS.init({
    offset: 200,
    duration: 1000,
    easing: "ease-in-out-back",
    delay: 50,
    disable: "mobile",
    once: true,
});
