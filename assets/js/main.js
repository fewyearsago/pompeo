const btn = document.querySelector('.menu__btn')
const nav = document.querySelector('.menu')

btn.addEventListener('click', () => {
    nav.classList.toggle('menu__open')
})