import {loadContent, main} from './main';
import menu from './menu';
import home from './home';


loadContent();

const $menu = document.querySelector('#menu');
const $home = document.querySelector('#home');
const $header = document.querySelector('.logo')
const $main = document.getElementsByTagName('main')[0];

$main.appendChild(home());

$header.addEventListener('click', () =>{
    $main.innerHTML = ''; 
    $main.appendChild(home());
})

$menu.addEventListener('click', () =>{
    
    $main.innerHTML = '';
    $main.appendChild(menu());  
})

$home.addEventListener('click', ()=>{     
    $main.innerHTML = ''; 
    $main.appendChild(home());
})




