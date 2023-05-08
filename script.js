
const toggleBtn = document.querySelector('.toggle-menu-btn');
const menu = document.querySelector('.nav-links');
let openMenu = false;

toggleBtn.addEventListener('click', handleMenu);

function handleMenu() {
    openMenu = !openMenu;

    if (openMenu) {
        menu.classList.add('active');
    } else {
        menu.classList.remove('active');
    }
}