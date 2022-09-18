const botaoMenu = document.querySelector('.navbar__menu-icon');
const menu = document.querySelector('.banner__menu')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('banner__menu--active')
})

const botaoPesquisa = document.querySelector('.navbar__pesquisa');
const barraPesquisa = document.querySelector('.banner__barra-pesquisa')

botaoPesquisa.addEventListener('click', () => {
    barraPesquisa.classList.toggle('banner__barra-pesquisa-active')
})

const iconePesquisa = document.querySelector('.navbar__pesquisa');
const iconeX = document.querySelector('.fecha__pesquisa');
const botaoFechaPesquisa = document.querySelector('.fecha__pesquisa');

iconePesquisa.addEventListener('click', () => {
    iconePesquisa.classList.toggle('navbar__pesquisa--none')
})

iconePesquisa.addEventListener('click', () => {
    botaoFechaPesquisa.classList.toggle('fecha__pesquisa-active')
})

botaoFechaPesquisa.addEventListener('click', () => {
    barraPesquisa.classList.toggle('banner__barra-pesquisa-active')
})

botaoFechaPesquisa.addEventListener('click', () => {
    iconePesquisa.classList.toggle('navbar__pesquisa--none')
})

botaoFechaPesquisa.addEventListener('click', () => {
    botaoFechaPesquisa.classList.toggle('fecha__pesquisa-active')
})