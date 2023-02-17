const hamburger = document.querySelector(".hamburger");
const mainMenu = document.querySelector(".mainMenu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    mainMenu.classList.toggle("active");
})

document.querySelectorAll(".mainMenu").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    mainMenu.classList.remove("active");
}))