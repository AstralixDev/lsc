const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

function scrollToCurso() {
    document.getElementById("curso").scrollIntoView({ behavior: "smooth" });
}
