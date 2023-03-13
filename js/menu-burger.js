const lien = document.getElementsByClassName('ti-menu');
const burger = document.getElementsByClassName('menu-burger');
const ul = document.querySelector('ul');
const aside = document.querySelector('aside');
const toggle = aside.classList.toggle('active');


lien.addEventListener('click', function(e){
    e.preventDefault();
    burger.classList.toggle('open');
    ul.classList.toggle('open');
});

afficherMasquer()

function afficherMasquer(){
    if (toggle){ 
    lien.addEventListener ="visible";
    burger.classList ="visible";
 } else {
    lien.addEventListener ="hidden";
    burger.classList ="hidden";
 }
}