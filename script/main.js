var login = document.querySelector(".login");
var popup = document.querySelector(".pop-up");
var close = document.querySelector(".pop-up button");


login.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("pop-up-shown");
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("pop-up-shown");
});