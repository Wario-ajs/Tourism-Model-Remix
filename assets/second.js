const botaoPesquisa = document.querySelector('.navbar__pesquisa');
const barraPesquisa = document.querySelector('.banner__navbar--barra-pesquisa')

botaoPesquisa.addEventListener('click', () => {
    barraPesquisa.classList.toggle('.banner__navbar--barra-pesquisa-active')
})