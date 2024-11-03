
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

// Search Collections Functionality 

var collectionContainer = document.getElementById("collection-container")
var search = document.getElementById("search")
var collectionList = collectionContainer.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var enteredValue = event.target.value.toUpperCase()

    for (count = 0; count < collectionList.length; count = count + 1) {
        var collectionName = collectionList[count].querySelector("h2").textContent
        if (collectionName.toUpperCase().indexOf(enteredValue) < 0) {
            collectionList[count].style.display = "none"
        }
        else {
            collectionList[count].style.display = "block"
        }
    }
})