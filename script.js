// ======================================================
// PROFESSIONAL PORTFOLIO WEBSITE JAVASCRIPT
// Chandrakanth Pedapudi Portfolio
// Responsive for Mobile, Tablet & Desktop
// ======================================================



// ======================================================
// WEBSITE LOAD MESSAGE
// ======================================================

console.log("Portfolio Website Loaded Successfully");



// ======================================================
// SELECT ELEMENTS
// ======================================================

const header = document.querySelector("header");

const navLinks = document.querySelectorAll("nav a");

const sections = document.querySelectorAll("section");



// ======================================================
// HEADER SCROLL EFFECT
// ======================================================

window.addEventListener("scroll", () => {

    // Header Background Change

    if(window.scrollY > 50){

        header.style.background = "#020617";

        header.style.boxShadow = "0 4px 12px rgba(0,0,0,0.35)";

    }

    else{

        header.style.background = "rgba(
