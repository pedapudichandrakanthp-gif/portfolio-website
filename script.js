// Smooth welcome message

console.log("Portfolio Website Loaded Successfully");

// Example animation effect

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.background = "#020617";
    }
    else{
        header.style.background = "#0f172a";
    }

});
