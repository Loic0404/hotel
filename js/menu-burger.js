const lien = document.getElementsByClassName('ti-menu')
const burger = document.getElementsByClassName('menu-burger')
const ul = document.querySelector('ul')

link.addEventListener('click', function(e){
    e.preventDefault()
    burger.classList.toggle('open')
    ul.classList.toggle('open')
})