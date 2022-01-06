// sidebar 
let menu = document.getElementById("menu");
let sideBar = document.querySelector(".shownav");
let cancel = document.getElementById("close");

menu.addEventListener("click", () => {
    openSideBar();
})

cancel.addEventListener("click", () => {
    closeSideBar();
})

function openSideBar() {
    sideBar.style.transition = "all .5s ease-in-out";
    sideBar.classList.add("opennav");
}
function closeSideBar() {
    sideBar.style.transition = "all .8s ease-in-out";
    sideBar.classList.remove("opennav");
}