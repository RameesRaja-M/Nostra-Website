// Pop-Up bar

var closepopup = document.getElementById("closepopup")
var close = document.getElementById("close")

close.addEventListener("click", function () {
    closepopup.remove("closepopup")
})

// Slider Bar

let currentSliderID = 0; // Start from the first slide
const sliderElement = document.getElementById("slider");
const totalSlides = sliderElement.children.length;

function nxt() {
    currentSliderID = (currentSliderID + 1) % totalSlides; // Loop back to the first slide
    updateSlidePosition();
}

function prev() {
    currentSliderID = (currentSliderID - 1 + totalSlides) % totalSlides; // Loop to the last slide if at first
    updateSlidePosition();
}

function updateSlidePosition() {
    const offset = -currentSliderID * 100; // Calculate offset in percentage
    sliderElement.style.transform = `translateX(${offset}%)`; // Apply translation
}


// Selecting a Side NaveBar & MenuIcon

var sidenav = document.getElementById("sidenavbar")
var menuicon = document.getElementById("menuicon")
var closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () {
    sidenav.style.left = 0
})

closenav.addEventListener("click", function () {
    sidenav.style.left = "-50%"
})