// DOM queries
const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector("#site-nav");
const heroDescription = document.querySelector(".hero-description");
const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");
const yearSpan = document.querySelector("#year");
const yearAboutSpan = document.querySelector("#year-about");

// set current year in footer
const currentYear = new Date().getFullYear();
if (yearSpan) {
  yearSpan.textContent = currentYear;
}
if (yearAboutSpan) {
  yearAboutSpan.textContent = currentYear;
}

// Mobile nav toggle
if (navToggle && siteNav) {
  navToggle.addEventListener("click", function () {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
}

// Fake form submission handler
if (contactForm && formStatus) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    formStatus.textContent = "Thanks for reaching out — we’ll get back to you soon.";
    contactForm.reset();
  });
}
