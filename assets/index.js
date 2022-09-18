const botaoMenu = document.querySelector('.navbar__menu-icon');
const menu = document.querySelector('.banner__menu')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('banner__menu--active')
})