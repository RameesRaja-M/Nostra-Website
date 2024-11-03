// Pop-Up bar

var closepopup = document.getElementById("closepopup")
var close = document.getElementById("close")

close.addEventListener("click", function () {
    closepopup.remove("closepopup")
})

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