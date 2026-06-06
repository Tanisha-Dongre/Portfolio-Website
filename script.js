// Scroll Reveal Animation

const revealElements = document.querySelectorAll(
".about-card, .skill-box, .project-card, .education-card, .certificate-card, .contact-card"
);

function revealOnScroll() {


revealElements.forEach((element) => {

    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 100) {
        element.classList.add("show");
    }

});


}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

// Mobile Menu Toggle

const menuIcon = document.querySelector(".menu-icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {


navbar.classList.toggle("active");


});

// Active Navigation Highlight

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {


let current = "";

sections.forEach((section) => {

    const sectionTop = section.offsetTop;

    if (pageYOffset >= sectionTop - 150) {
        current = section.getAttribute("id");
    }

});

navLinks.forEach((link) => {

    link.classList.remove("active");

    if (link.getAttribute("href").includes(current)) {
        link.classList.add("active");
    }

});


});
