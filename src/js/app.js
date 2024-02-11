const menuButton = document.querySelector(".fa-bars");
const menuCloseButton = document.querySelector(".fa-xmark");
const nav_list = document.querySelector(".navigation-list");

menuButton.addEventListener('click', (e) => {
    e.target.classList.remove("btn-activate");
    menuCloseButton.classList.add("btn-activate");
    nav_list.classList.add("activate-menu")
})

menuCloseButton.addEventListener('click', (e) => {
    e.target.classList.remove("btn-activate");
    menuButton.classList.add("btn-activate");
    nav_list.classList.remove("activate-menu")
})