var login = document.querySelector(".login");
var popup = document.querySelector(".pop-up");
var close = document.querySelector(".pop-up button");
var buttons = document.querySelector(".right-column button");
var mapopener = document.querySelector(".open-map");
var map = document.querySelector(".map");
var closeMap = document.querySelector(".map button");

login.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("pop-up-shown", "fall");
    
});

mapopener.addEventListener("click", function(event) {
    event.preventDefault();
    map.classList.add("map-shown", "fade");
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("pop-up-shown");
});

closeMap.addEventListener("click", function(event){
    event.preventDefault();
    map.classList.remove("map-shown");
});

window.addEventListener("keydown", function(event) {
    event.preventDefault();
    if(event.keyCode == 27) {
        if(popup.classList.contains("pop-up-shown")) {
            popup.classList.remove("pop-up-shown");
        }        
    }
});

