const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
const closeElement = document.querySelector(".menu__close");

hamburger.addEventListener('click', function () {
    menu.classList.add("active");
});

closeElement.addEventListener("click", function () {
    menu.classList.remove("active");
})