// ======================================================
// PROFESSIONAL PORTFOLIO WEBSITE JAVASCRIPT
// ======================================================



// ======================================================
// WEBSITE LOADED
// ======================================================

console.log("Portfolio Website Loaded Successfully");



// ======================================================
// HEADER SCROLL EFFECT
// ======================================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    // Background Change

    if(window.scrollY > 50){

        header.style.background = "#020617";

        header.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";

    }

    else{

        header.style.background = "rgba(15,23,42,0.95)";

        header.style.boxShadow = "none";

    }



    // MOBILE HEADER SHRINK EFFECT

    if(window.innerWidth <= 768){

        if(window.scrollY > 80){

            header.classList.add("shrink-header");

        }

        else{

            header.classList.remove("shrink-header");

        }

    }

});



// ======================================================
// SMOOTH SCROLL
// ======================================================

const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const targetId = this.getAttribute("href");

        const targetSection = document.querySelector(targetId);

        if(targetSection){

            window.scrollTo({

                top: targetSection.offsetTop - 100,

                behavior: "smooth"

            });

        }

    });

});



// ======================================================
// ACTIVE NAV LINK
// ======================================================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;

        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop - 150){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});



// ======================================================
// FADE-IN ANIMATION
// ======================================================

const fadeElements = document.querySelectorAll(

    ".about-card, .skill-card, .education-card, .project-card, .contact-container"

);

function fadeInOnScroll(){

    fadeElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        const screenHeight = window.innerHeight;

        if(elementTop < screenHeight - 100){

            element.style.opacity = "1";

            element.style.transform = "translateY(0px)";

        }

    });

}

fadeElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform = "translateY(40px)";

    element.style.transition = "all 0.8s ease";

});

window.addEventListener("scroll", fadeInOnScroll);

fadeInOnScroll();



// ======================================================
// BUTTON HOVER EFFECT
// ======================================================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});



// ======================================================
// SCROLL TO TOP BUTTON
// ======================================================

const scrollTopBtn = document.createElement("button");

scrollTopBtn.innerHTML = "↑";

document.body.appendChild(scrollTopBtn);

scrollTopBtn.style.position = "fixed";

scrollTopBtn.style.bottom = "20px";

scrollTopBtn.style.right = "20px";

scrollTopBtn.style.padding = "12px 16px";

scrollTopBtn.style.fontSize = "20px";

scrollTopBtn.style.border = "none";

scrollTopBtn.style.borderRadius = "50%";

scrollTopBtn.style.background = "#2563eb";

scrollTopBtn.style.color = "white";

scrollTopBtn.style.cursor = "pointer";

scrollTopBtn.style.display = "none";

scrollTopBtn.style.zIndex = "1000";

scrollTopBtn.style.boxShadow = "0 4px 10px rgba(0,0,0,0.3)";

window.addEventListener("scroll", () => {

    if(window.scrollY > 300){

        scrollTopBtn.style.display = "block";

    }

    else{

        scrollTopBtn.style.display = "none";

    }

});

scrollTopBtn.addEventListener("click", () => {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});



// ======================================================
// DEVICE CHECK
// ======================================================

function detectDevice(){

    const width = window.innerWidth;

    if(width <= 768){

        console.log("Mobile Device");

    }

    else if(width <= 1024){

        console.log("Tablet Device");

    }

    else{

        console.log("Desktop Device");

    }

}

detectDevice();

window.addEventListener("resize", detectDevice);



// ======================================================
// PAGE LOADED
// ======================================================

window.addEventListener("load", () => {

    console.log("All Resources Loaded Successfully");

});



// ======================================================
// END
// ======================================================
