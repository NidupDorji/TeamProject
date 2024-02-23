function toggleMenu() {
    var menuOverlay = document.getElementById("menuOverlay");
    var inner_body = document.getElementById("inner_body");
    menuOverlay.classList.toggle("open");
    inner_body.classList.toggle("menu-open")
}

document.getElementById("currentYear").textContent = new Date().getFullYear();


//toggle theme
const darkModeToggle = document.getElementById('toggleTheme');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Check if dark mode is enabled from previous session
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
}