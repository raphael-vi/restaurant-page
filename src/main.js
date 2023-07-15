import './style.css';
import {header, footer} from './header.js';
import bg from './resource/pexels-photo-958545.jpeg'

const main = function (){
    const main = document.createElement('main'); 
    return main;

}

const loadContent = function (){
    const background = `url(${bg})`;
    const content = document.querySelector("#content");
    content.style.backgroundImage = background;
    content.appendChild(header());
    content.appendChild(main());
    content.appendChild(footer());  
}

export { loadContent, main}