function toggleMenu() {
    var menuOverlay = document.getElementById("menuOverlay");
    var inner_body = document.getElementById("inner_body");
    menuOverlay.classList.toggle("open");
    inner_body.classList.toggle("menu-open")
}

document.getElementById("currentYear").textContent = new Date().getFullYear();
